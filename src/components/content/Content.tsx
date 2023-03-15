import { useEffect, useState } from "react";
import { Form } from "../form/Form";
import { HeaderTask } from '../header/HeaderTask';
import { ContentEmpty } from "./ContentEmpty";
import { CardTask } from "../card/CardTask";
import { v4 as uuidv4 } from 'uuid';
import style from './Content.module.css';

interface ITask {
    isDone: boolean,
    taskText: string,
    id: string
}

export function Content() {
    const TasksLocalStorage = localStorage.getItem('@todo-list:tasks-state-1.0.0');
    const initialTasks = TasksLocalStorage != null ? JSON.parse(TasksLocalStorage) : [];
    const [listTask, setListTask] = useState<ITask[]>(initialTasks);

    useEffect(() => {
        const stateJSON = JSON.stringify(listTask);

        localStorage.setItem('@todo-list:tasks-state-1.0.0', stateJSON);
    }, [listTask]);

    const isTaskEmpty = listTask.length <= 0;
    const totalIsDone = listTask.reduce<number>(
        (value: number, currentIndex: ITask) => currentIndex.isDone ? ++value : value, 0
    );

    function createTask(newTextTask:string) {
        let newTask:ITask = {
            isDone: false,
            taskText: newTextTask,
            id: uuidv4()
        }
        setListTask((oldState) => [...oldState, newTask]);
    }

    function changeIsTask(id:string, done:boolean) {
        const newTaskList = listTask.map(task => {
            if (task.id === id) return {...task, isDone: !done};
            return task;
        });
        setListTask(newTaskList);
    }

    function deleteTask(id:string) {
        const newValues = listTask.filter(task => task.id !== id);
        setListTask(newValues)
    }

    const tasks = listTask.map(task => (
        <CardTask key={task.id} doneTask={task.isDone} textTask={task.taskText}  idTask={task.id} changeIsDone={changeIsTask} deleteTaskCard={deleteTask} />
    ));

    return (
        <main className={style.content}>
            <Form newCreateTask={createTask} />
            <article className={style.mainTask}>
                <HeaderTask totalTasks={listTask.length} isDoneTask={totalIsDone} />
                {isTaskEmpty ? <ContentEmpty /> : tasks}
            </article>
        </main>
    );
}