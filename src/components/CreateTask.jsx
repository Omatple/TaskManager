import { useContext, useState } from "react"
import { TaskContext } from "../context/task.context"
import { createId } from "../utils/utils";
import { FaPlus } from "react-icons/fa";

function CreateTask() {
    const { addTask } = useContext(TaskContext);

    const [taskTitle, setTaskTitle] = useState('');

    const handleInput = (e) => {
        setTaskTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskTitle) return;

        const newTask = {
            id: createId,
            title: taskTitle,
            completed: false,
        }

        addTask(newTask);
        setTaskTitle('');
    }
    return (
        <form
            className="d-flex align-items-center bg-dark text-light p-3 rounded shadow-lg mb-4"
            onSubmit={handleSubmit}
        >
            <input
                className="form-control bg-secondary text-light border-0 me-3"
                placeholder="New Task..."
                onChange={handleInput}
                value={taskTitle}
            />
            <button
                type="submit"
                className="btn btn-success d-flex align-items-center justify-content-center"
            >
                <FaPlus size={20} />
            </button>
        </form>
    );
}

export default CreateTask
