import { useContext, useEffect } from "react"
import HeaderComponent from "../components/HeaderComponent"
import TaskCard from "../components/TaskCard";
import { TaskContext } from "../context/task.context";
import CreateTask from "../components/CreateTask";
import { FaExclamationTriangle, FaSpinner } from "react-icons/fa";

function TasksPage() {
    const { tasks, getTasks, hasError, hasLoaded } = useContext(TaskContext);

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

                {hasError ? (
                    <h2 className="text-danger justify-content-center d-flex align-items-center gap-2">
                        <FaExclamationTriangle /> Failed to load tasks
                    </h2>
                ) : !hasLoaded ? (
                    <h2 className="text-info d-flex align-items-center gap-2">
                        <FaSpinner className="spinner-border" /> Loading...
                    </h2>
                ) : (
                    <ul className="list-unstyled">
                        {taskCards}
                    </ul>
                )}
            </section>
        </>
    );
}

export default TasksPage
