import { useState } from "react";
import { Form } from "../form/Form";
import { HeaderTask } from '../header/HeaderTask';
import { ContentEmpty } from "./ContentEmpty";
import { CardTask } from "../card/CardTask";
import style from './Content.module.css';

interface ITask {[
    tasks: {
        isDone: boolean,
        taskText: string
    }
]}

export function Content() {
    const [listTask, setListTask] = useState<ITask>([]);

    function createTask(event: ITask) {
        setListTask([...listTask, event])
    }

    const tasks = listTask.map(task => (
        <CardTask doneTask={task.tasks.isDone} textTask={task.tasks.taskText} />
    ))

    return (
        <div className={style.content}>
            <Form newCreateTask={createTask} />
            <main className={style.mainTask}>
                <HeaderTask />
                {tasks}
            </main>
        </div>
    );
}