import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState, Validator } from 'react';
import style from './Form.module.css';

interface IProps {
    newCreateTask: Function
}

export function Form({ newCreateTask }: IProps) {
    const [task, setTask] = useState<string>('');

    function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setTask(event.target.value);
    }

    function handleCreateTask(event: FormEvent) {
        event.preventDefault();
        newCreateTask(task);
        setTask('');
    }

    function handleValidFormTask(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Este campo é obrigatorio!');
    } 

    return (
        <form className={style.formAddTask} onSubmit={handleCreateTask}>
            <input 
                onChange={handleChangeInput} 
                onInvalid={handleValidFormTask} 
                type="text" 
                name="task" 
                id="task" 
                className={style.inputForm}
                placeholder="Adicione uma nova tarefa" 
                value={task} 
                required
            />
            <button className={style.buttonForm}>
                Criar
                <PlusCircle size={16} />
            </button>
        </form>
    );
}