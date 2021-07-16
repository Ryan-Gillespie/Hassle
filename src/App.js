import React, { useState } from 'react';
import initialData from './initial-data';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
import 'reset-css';
import './index.css';

const onDragEnd = (result, state, setState) => {
    console.log(result);
    const {destination, source, draggableId} = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    // init new state
    const newState = Array.from(state);

    // remove the draggableId from the source
    const start = newState.find(col => col.id === source.droppableId);
    const newTask = {...start.tasks.find(task => task.id === draggableId)};
    start.tasks.splice(source.index, 1);

    // add the draggableId to the destination
    const finsh = newState.find(col => col.id === destination.droppableId);
    finsh.tasks.splice(destination.index, 0, newTask);

    setState(newState);
}

function App() {
    const [cols, setCols] = useState(initialData);
  
    return (
      <div>
        <div className="header"><h1>Hassle</h1></div>
        <DragDropContext onDragEnd={result => onDragEnd(result, cols, setCols)}>
          <div className="main-content">
            {cols.map(col => {
              return <Column title={col.id} taskList={col.tasks} />
            })}
          </div>
        </DragDropContext>
      </div>
    );
  }
  export default App;