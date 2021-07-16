import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import './index.css';

function Column(props) {
    return (
      <div className="column">
        <div className="col-header"><h3>{props.title}</h3></div>
        <Droppable droppableId={props.title} direction="vertical">
          {(provided) => (
            <div className="task-list" {...provided.droppableProps} ref={provided.innerRef}>
              {props.taskList.map((task, index) => <Task key={task.id} task={task} index={index} />)}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }

export default Column;