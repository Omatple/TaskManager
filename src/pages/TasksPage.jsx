import { useContext } from "react"
import HeaderComponent from "../components/HeaderComponent"
import TaskCard from "../components/TaskCard";
import { TaskContext } from "../context/task.context";
import CreateTask from "../components/CreateTask";

function TasksPage() {
    const { tasks } = useContext(TaskContext);

    const taskCards = tasks.map(task => {
        return (<li key={task.id}>
            <TaskCard task={task} />
        </li>);
    });

    return (
        <>
            <HeaderComponent />
            <section>
                <h2>Tasks</h2>
                <ul>
                    <li>
                        <CreateTask />
                    </li>
                    {taskCards}
                </ul>
            </section>
        </>
    )
}

export default TasksPage
