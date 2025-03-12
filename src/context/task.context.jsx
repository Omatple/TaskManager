import { createContext, useState } from "react";

const TaskContext = createContext();

function TaskProviderWrapper(props) {
    const [tasks, setTasks] = useState([
        {
            id: '1',
            title: 'Revisar correos',
            completed: false,
        },
        {
            id: '2',
            title: 'Desarrollar nueva funcionalidad en el Task Manager',
            completed: false,
        },
        {
            id: '3',
            title: 'Revisar errores en consola y corregir bugs',
            completed: false,
        },
        {
            id: '4',
            title: 'Actualizar documentación del proyecto',
            completed: false,
        },
        {
            id: '5',
            title: 'Hacer pruebas de UI y ajustes de diseño',
            completed: false,
        },
    ]);

    const updateTask = (updatedTask) => {
        const updatedTasks = tasks.map(task => {
            if (task.id !== updatedTask.id) return task;
            return updatedTask;
        });

        setTasks(updatedTasks);
    }

    const addTask = (newTask) => {
        setTasks([newTask, ...tasks]);
    }


    return (
        <TaskContext.Provider value={{ tasks, setTasks, updateTask, addTask }}>
            {props.children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskProviderWrapper }