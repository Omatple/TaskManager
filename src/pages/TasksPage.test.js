import React from 'react';
import { render, screen } from '@testing-library/react';
import TasksPage from './TasksPage';
import { TaskContext, TaskProviderWrapper } from '../context/task.context';

jest.mock('../components/HeaderComponent.jsx', () => ({
    __esModule: true,
    default: () => <></>,
}));

jest.mock('../components/CreateTask.jsx', () => ({
    __esModule: true,
    default: () => <></>,
}));

jest.mock('../components/TaskCard.jsx', () => ({
    __esModule: true,
    default: ({ task }) => <input
        value={task.title}
        onChange={() => { }}
    />,
}));

jest.mock('react-icons/fa', () => ({
    FaExclamationTriangle: () => <></>,
}));

describe('Tasks Page', () => {
    it("Title should be 'Task Dashboard'", () => {
        const { getByTestId } = render(
            <TaskProviderWrapper>
                <TasksPage />
            </TaskProviderWrapper>
        );

        const taskTitle = getByTestId('tasks-title').textContent;
        expect(taskTitle).toEqual('Task Dashboard');
    });

    it("Should find 'Failed to load tasks'", () => {
        const { getByTestId } = render(
            <TaskContext.Provider value={{
                tasks: [],
                getTasks: jest.fn(),
                hasError: true,
                hasLoaded: false,
            }}>
                <TasksPage />
            </TaskContext.Provider>
        );

        const errorMsg = getByTestId('error-msg').textContent;
        expect(errorMsg).toEqual('Failed to load tasks');
    });

    it("Should find 'Loading...'", () => {
        const { getByTestId } = render(
            <TaskContext.Provider value={{
                tasks: [],
                getTasks: jest.fn(),
                hasError: false,
                hasLoaded: false,
            }}>
                <TasksPage />
            </TaskContext.Provider>
        );

        const loadingMsg = getByTestId('loading-msg').textContent;
        expect(loadingMsg).toEqual('Loading...');
    });

    it("Should find 'Estudiar React' and 'Limpiar'", async () => {
        render(
            <TaskContext.Provider value={{
                tasks: [
                    {
                        id: '1',
                        title: 'Limpiar',
                        completed: false,
                    },
                    {
                        id: '2',
                        title: 'Hacer la compra',
                        completed: true,
                    },
                    {
                        id: '3',
                        title: 'Estudiar React',
                        completed: false,
                    },
                    {
                        id: '4',
                        title: 'Hacer ejercicio',
                        completed: true,
                    },
                ],
                getTasks: () => { },
                hasError: false,
                hasLoaded: true,
            }}>
                <TasksPage />
            </TaskContext.Provider>
        );

        expect(await screen.findByDisplayValue('Estudiar React')).toBeVisible();
        expect(await screen.findByDisplayValue('Limpiar')).toBeVisible();
    });
});