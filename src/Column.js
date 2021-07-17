import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import './Column.css';

function Column(props) {

    const onTaskEdit = (title, desc, id) => { 
      let taskProps = [
        title,
        desc,
        props.title,
        id,
        props.taskList.map(task => task.id).indexOf(id)
      ]
      console.log("colum.js", taskProps);
      props.onTaskEdit(props.onTaskEdit(taskProps));
    }

    if (props.title === 'Delete') {
        return (
            <div className="delete-dropzone">
                <Droppable droppableId={props.title} direction="horizontal">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                          <p>X</p>
                          {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        )
    }
    return (
      <div className="column">
        <div className={props.colColor}>
        <div className="col-header"><h3>{props.title}</h3></div>
        <Droppable droppableId={props.title} direction="vertical">
          {(provided) => (
            <div className="task-list"
              {...provided.droppableProps} 
              ref={provided.innerRef}
            >
              {props.taskList.map((task, index) => 
                <Task key={task.id} task={task} index={index} onTaskEdit={onTaskEdit}
              />)}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        </div>
      </div>
    );
  }

export default Column;