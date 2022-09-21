import React from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function TaskForm({ createTask }) {
    const [title, setTitle] = useState('')

    // State for task description
    const [description, setDescription] = useState('')

    const haldeSubmit = (e) => {
        e.preventDefault()
        createTask(title, description)

        // Resetart form value
        setTitle ('')
        setDescription ('')
    }

    return (
        <form onSubmit={haldeSubmit}>
            <input
                type='text'
                placeholder='Write a task'
                onChange={(e) => setTitle(e.target.value)}
                
                // Set value with hooks, for allow cleanning
                value={title}

                // Alwais focus the input when load
                autoFocus={true}
            />

            {/* unput for task desciption */}
            <textarea
                placeholder='task description'
                onChange={(e) => setDescription(e.target.value)}

                // Set value with hooks, for allow cleanning
                value={description}
            />

            <input
                type='submit'
                value='Submit'
            />
        </form>
    )
}

TaskForm.propTypes = {
    createTask: PropTypes.func,
}

export default TaskForm
