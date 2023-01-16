import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import style from './Form.module.css';

interface ITextTask {
    taskText: string
}

interface IProps {
    newCreateTask: Function
}

export function Form({ newCreateTask }: IProps) {
    const [task, setTask] = useState<ITextTask>({taskText: 'Adicione uma nova tarefa'});

    function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
        setTask({taskText: event.target.value});
    }

    function handleCreateTask(event: FormEvent) {
        event.preventDefault();
        newCreateTask(task.taskText);
        setTask({taskText: ''});
    }

    return (
        <div className={style.formAddTask}>
            <input onChange={handleChangeInput} type="text" name="" id="task" className={style.inputForm} placeholder="Adicione uma nova tarefa" value={task.taskText} />
            <button onClick={handleCreateTask} className={style.buttonForm}>
                Criar
                <PlusCircle size={16} />
            </button>
        </div>
    );
}