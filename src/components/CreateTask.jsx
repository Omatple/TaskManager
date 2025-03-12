import { useContext, useState } from "react"
import { TaskContext } from "../context/task.context"

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
            id: 123,
            title: taskTitle,
            completed: false,
        }

        addTask(newTask);
        setTaskTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="New Task..." onChange={handleInput} value={taskTitle} />
            <button>+</button>
        </form>
    )
}

export default CreateTask
