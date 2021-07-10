import React, { Component } from 'react'
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

export default class Task extends Component {
    render() {
        return (
            <Draggable
                draggableId={this.props.task.id}
                index={this.props.index}
            >
                {(provided) => (
                    <Container
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
        );
    }
}