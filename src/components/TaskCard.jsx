import React, { useContext } from 'react'
import { TaskContext } from '../context/task.context'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';

function TaskCard({ task }) {
    const { updateTask } = useContext(TaskContext);

    const handleInput = (e) => {
        const updatedTask = { ...task, title: e.target.value }
        updateTask(updatedTask);
    }

    const handleCheck = (e) => {
        const updatedTask = { ...task, completed: !task.completed }
        updateTask(updatedTask);
    }

    return (
        <article className="d-flex align-items-center justify-content-between bg-dark text-light p-3 rounded shadow-lg mb-3">
            <input
                className="form-control bg-secondary text-light border-0 me-3"
                value={task.title}
                onChange={handleInput}
                placeholder="Task title..."
            />
            <button
                className="btn btn-outline-light d-flex align-items-center"
                onClick={handleCheck}
            >
                {task.completed ? <FaCheckCircle size={20} className="text-success" /> : <FaRegCircle size={20} className="text-danger" />}
            </button>
        </article>
    );
}

export default TaskCard
