import { useState } from "react";
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
    const [listTask, setListTask] = useState<ITask[]>([]);

    function createTask(newTextTask:string) {
        let newTask:ITask = {
            isDone: false,
            taskText: newTextTask,
            id: uuidv4()
        }
        setListTask([...listTask, newTask])
    }

    function changeIsTask(id:string, done:boolean) {
        setListTask((tasks) => {          
            return [...tasks.map(task => {
                if (task.id === id) {
                    return {...task, isDone: !done};
                }
                return task;
            })];
        });
    }

    function deleteTask(id:string) {
        const newValues = listTask.filter(task => task.id !== id);
        setListTask(newValues)
    }

    const tasks = listTask.map(task => (
        <CardTask key={task.id} doneTask={task.isDone} textTask={task.taskText}  idTask={task.id} changeIsDone={changeIsTask} deleteTaskCard={deleteTask} />
    ))

    return (
        <div className={style.content}>
            <Form newCreateTask={createTask} />
            <main className={style.mainTask}>
                <HeaderTask totalTasks={listTask.length} />
                {listTask.length <= 0 ? <ContentEmpty /> : tasks}
            </main>
        </div>
    );
}