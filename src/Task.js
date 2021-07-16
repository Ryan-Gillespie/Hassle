import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid green;
    border-radius: 5px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: white;
    font-size: 28px;
    background-color: lightgreen;
`;

function Task(props) {
  return (
      <Draggable draggableId={props.task.id} index={props.index}>
        {(provided) => (
          <Container ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}> 
            <h2>{props.task.title}</h2>
            <p>{props.task.description}</p>
          </Container>
        )}
      </Draggable>
  );
}

export default Task;