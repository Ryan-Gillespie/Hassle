import React, { useState } from 'react';
import initialData from './initial-data';
import Column from './Column';
import TaskAddForm from './TaskAddForm';
import { DragDropContext } from 'react-beautiful-dnd';
import 'reset-css';
import './index.css';
import { v4 as uuidv4 } from 'uuid';

const addTask = (state, setState, title, description) => {
    const newState = Array.from(state);
    const newTask = {id: uuidv4(), title: title, description: description};
    const col = newState.find(col => col.id === 'ToDo');
    col.tasks.push(newTask);

    setState(newState);
    localStorage.setItem("State", JSON.stringify(state));
}

const editTask = (taskProps, cols, setCols) => {
  try {
    const newState = Array.from(cols);
    const insertCol = newState.find(column => column.id === taskProps[2]);
    const newTask = {id: taskProps[3], title: taskProps[0], description: taskProps[1]}
    insertCol.tasks.splice(taskProps[4], 1, newTask);

    setCols(newState);
    localStorage.setItem("State", JSON.stringify(cols));
  } catch(e) {}
}

const onDragEnd = (result, state, setState) => {
    const {destination, source, draggableId} = result;

    if (!destination) {
        return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    if (destination.droppableId === 'Delete') {
        // delete if not destination
        const newState = Array.from(state);
        const start = newState.find(col => col.id === source.droppableId);
        start.tasks.splice(source.index, 1);
        setState(newState);
        localStorage.setItem("State", JSON.stringify(state));
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
    localStorage.setItem("State", JSON.stringify(state));
}

const initCols = () => {
    const locstor = JSON.parse(localStorage.getItem("State"));
    if (locstor === null) {
        return initialData;
    }
    return locstor;
}

function App() {
    const [cols, setCols] = useState(initCols());
    const [showForm, setShowForm] = useState(false);

    const handleAddSubmit = (title, description) => { setShowForm(false); addTask(cols, setCols, title, description) };
    const onTaskEdit = (taskProps) => { console.log("line 81", taskProps); editTask(taskProps, cols, setCols) };
    
    const colColors = ['column-orange', 'column-blue', 'column-red', 'column-green', null]

    return (
      <div>
        <div className="header"><h1>Hassle</h1></div>
        <DragDropContext onDragEnd={result => onDragEnd(result, cols, setCols)}>
          <div className="main-content"> 
            {cols.map((col, index) => {
              return <Column title={col.id} taskList={col.tasks} colColor={colColors[index]} onTaskEdit={onTaskEdit} />
            })}
          </div>
        </DragDropContext>
        <button className="add-button" onClick={() => setShowForm(!showForm)}>+</button>
        {showForm && 
          <TaskAddForm handleSubmit={handleAddSubmit}/>
        }
      </div>
    );
  }
  export default App;