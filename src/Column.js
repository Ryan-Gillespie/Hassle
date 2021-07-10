import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import './index.css';

export default class Column extends Component {
    render() {
        return (
            <div className="column">
                <div className="animated-text"><h3>{this.props.column.title}</h3></div>
                
                <Droppable droppableId={this.props.column.id} direction="vertical">
                    {(provided) => (
                        <div className="task-list"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        )
    }
}