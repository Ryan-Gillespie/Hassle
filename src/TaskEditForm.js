import React, { useState } from 'react'

export default function TaskEditForm(props) {
    const [title, setTitle] = useState(props.title);
    const [desc , setDesc ] = useState(props.desc );

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(title, desc);
    }

    return (
        <form>
            <h2>Edit Task</h2>
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
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <button onClick={handleSubmit}>Add Task</button>
        </form>
    )
}
