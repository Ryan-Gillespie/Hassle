import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Container = styled.div`
    margin: 8px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    height: 90%;
`;
const Title = styled.h3`
    font-size: 28px;
    padding: 8px;
    padding-left: 10px;
    border-radius: 8px 8px 0px 0px;
    display: flex;
    background-color: #153243;
    width: 40%;
    color: #EBF6FF;
`;
const TaskList = styled.div`
    padding: 8px;
    flex-grow: 1;
    min-height: 100px;
    background-color: #153243;
    border-radius: 0px 5px 5px 5px;
`;

export default class Column extends Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id} direction="vertical">
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