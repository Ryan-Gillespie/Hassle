import React, { useState } from 'react'
import './TaskForm.css'

export default function TaskEditForm(props) {
    const [title, setTitle] = useState(props.title);
    const [desc , setDesc ] = useState(props.desc );

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(title, desc);
    }

    return (
        <form className="task-edit-form">
            <div className="task-form">
                <h2>Edit Task</h2>
                <button className="close-edit" onClick={handleSubmit}>X</button>
                <div className="shift-up-edit">
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
                    maxLength={400}
                    placeholder={"Task Description goes here"}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                ></textarea>
                <div className="done-button"><button className="submit-button" onClick={handleSubmit}>Done</button></div>
                </div>
            </div>
        </form>
    )
}
