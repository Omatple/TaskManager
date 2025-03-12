import { createContext, useState } from "react";

const TaskContent = createContext();

function TaskProviderWrapper(props) {
    const [tasks, setTasks] = useState([]);

    return (
        <TaskContent.Provider value={{ tasks, setTasks }}>
            {props.children}
        </TaskContent.Provider>
    );
}

export { TaskContent, TaskProviderWrapper }