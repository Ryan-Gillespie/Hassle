import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';
import 'reset-css';

class App extends React.Component {
  state = initialData;

  onDragStart = result => {
    // TODO: start dragging
  }
  onDragUpdate = result => {
    // TODO: update the drag
  }
  onDragEnd = result => {
    // TODO: reorder the column
  }

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        { this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

          return <Column key={column.id} column={column} tasks={tasks} />
          })
        }
      </DragDropContext>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
