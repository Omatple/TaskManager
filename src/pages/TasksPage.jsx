import React, { useContext, useEffect } from "react"
import HeaderComponent from "../components/HeaderComponent"
import TaskCard from "../components/TaskCard";
import { TaskContext } from "../context/task.context";
import CreateTask from "../components/CreateTask";
import { FaExclamationTriangle } from "react-icons/fa";

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
                <h2 data-testid="tasks-title" className="d-flex align-items-center gap-2 text-white mb-4">
                    Task Dashboard
                </h2>

                <CreateTask />

                {hasError ? (
                    <h2 data-testid="error-msg" className="text-danger justify-content-center d-flex align-items-center gap-2">
                        <FaExclamationTriangle />Failed to load tasks
                    </h2>
                ) : !hasLoaded ? (
                    <h2 data-testid="loading-msg" className="text-white d-flex justify-content-center align-items-center gap-2">
                        <div className="spinner-border" />Loading...
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
