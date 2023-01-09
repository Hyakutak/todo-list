import { PlusCircle } from 'phosphor-react';
import style from './Form.module.css';

export function Form() {
    return (
        <div className={style.formAddTask}>
            <input type="text" name="" id="" className={style.inputForm} placeholder="Adicione uma nova tarefa" />
            <button className={style.buttonForm}>
                Criar
                <PlusCircle size={16} />
            </button>
        </div>
    );
}