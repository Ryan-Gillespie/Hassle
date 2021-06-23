import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgray;
    border-radius: 2px;
    display: inline-block;
    vertical-align: top;
    width: 250px;
`;
const Title = styled.h3`
    font-size: 18px;
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
`;

export default class Column extends Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provided) => (
                        <TaskList
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>
        )
    }
}
