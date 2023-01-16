import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import style from './Form.module.css';

interface ITask {
    tasks: {
        isDone: boolean,
        taskText: string
    }
}

export function Form({ newCreateTask }) {
    const [task, setTask] = useState<ITask>({
        tasks: {
            isDone: false,
            taskText: ''
        }
    });

    function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
        setTask({
            tasks: {
                isDone: false,
                taskText: event.target.value
            }
        });
    }

    function handleCreateTask(event: FormEvent) {
        event.preventDefault();
        newCreateTask(task);
    }

    return (
        <div className={style.formAddTask}>
            <input onChange={handleChangeInput} type="text" name="" id="task" className={style.inputForm} placeholder="Adicione uma nova tarefa" />
            <button onClick={handleCreateTask} className={style.buttonForm}>
                Criar
                <PlusCircle size={16} />
            </button>
        </div>
    );
}