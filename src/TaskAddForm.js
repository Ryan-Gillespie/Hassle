import React, { useState } from 'react';
import './TaskAddForm.css';

export default function TaskAddForm(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(title, description);
    }

    return (
        <form>
            <h2>Add New Task</h2>
            <label>Task Title: </label>
            <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Description: </label>
            <textarea 
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button onClick={handleSubmit}>Add Task</button>
        </form>
    )
}
