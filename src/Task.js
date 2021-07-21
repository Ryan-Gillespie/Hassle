import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './Task.css'
import TaskEditForm from './TaskEditForm'

function Task(props) {
  const [showEdit, setShowEdit] = useState(false);

  const onTaskEdit = (title, desc) => {
    setShowEdit(false);
    props.onTaskEdit(title, desc, props.task.id);
  }

  return (
      <Draggable draggableId={props.task.id} index={props.index}>
        {(provided) => (
          <div className="task-card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}> 
            <h2>{props.task.title}</h2>
            <button onClick={() => setShowEdit(!showEdit)}>...</button>
            <p>{props.task.description}</p>
            { showEdit &&
              <TaskEditForm title={props.task.title} desc={props.task.description} handleSubmit={onTaskEdit} />
            }
          </div>
        )}
      </Draggable>
  );
}

export default Task;