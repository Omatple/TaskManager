import { createContext, useState } from "react";

const TaskContext = createContext();

function TaskProviderWrapper(props) {
    const [tasks, setTasks] = useState([]);

    const API_URL = "https://caf51bab2a9762be6229.free.beeceptor.com/api/tasks/";

    const getTasks = async () => {
        try {
            console.log('Get Tasks');
            const response = await fetch(API_URL);
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.log(error);
        }
    }

    const updateTask = (updatedTask) => {
        const updatedTasks = tasks.map(task => {
            if (task.id !== updatedTask.id) return task;
            return updatedTask;
        });

        setTasks(updatedTasks);
    }

    const addTask = async (newTask) => {
        try {
            console.log('Add task');
            await fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify(newTask),
            });

            setTasks([newTask, ...tasks]);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TaskContext.Provider value={{ tasks, setTasks, updateTask, addTask, getTasks }}>
            {props.children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskProviderWrapper }