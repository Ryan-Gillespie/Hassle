import React, { useState } from 'react';
import './TaskForm.css';

export default function TaskAddForm(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(title, description);
    }

    return (
        <form className="task-add-form">
            <div className="task-form">
                <h2>Add New Task</h2>
                <button className="close-add" onClick={() => props.destroy()}>X</button>
                <div className="shift-up-add">
                <label>Task Title: </label>
                <input 
                    type="text"
                    required
                    maxLength={60}
                    placeholder={"Task Title goes here"}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Description: </label>
                <textarea 
                    maxLength={400}
                    placeholder={"Task Description goes here"}
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button onClick={handleSubmit}>Done</button>
                </div>
            </div>
        </form>
    )
}
