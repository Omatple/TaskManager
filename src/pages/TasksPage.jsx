import { useContext, useEffect } from "react"
import HeaderComponent from "../components/HeaderComponent"
import TaskCard from "../components/TaskCard";
import { TaskContext } from "../context/task.context";
import CreateTask from "../components/CreateTask";
import { FaClipboardList } from "react-icons/fa";

function TasksPage() {
    const { tasks, getTasks } = useContext(TaskContext);

    useEffect(() => {
        getTasks();
    }, []);

    const taskCards = tasks.map(task => {
        return (<li key={task.id}>
            <TaskCard task={task} />
        </li>);
    });

    return (
        <>
            <HeaderComponent />
            <section className="container my-4 p-4 bg-dark text-light rounded shadow-lg">
                <h2 className="d-flex align-items-center gap-2 text-white mb-4">
                    Task Dashboard
                </h2>
                <CreateTask />
                <ul className="list-unstyled">
                    {taskCards}
                </ul>
            </section>
        </>
    );
}

export default TasksPage
