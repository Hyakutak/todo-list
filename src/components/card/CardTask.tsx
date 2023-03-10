import { Check, Trash } from "phosphor-react";
import styles from "./CardTask.module.css";

interface ICard {
    doneTask: boolean,
    textTask: string,
    idTask: string,
    changeIsDone: Function,
    deleteTaskCard: Function
}

export function CardTask({ doneTask, textTask, idTask, changeIsDone, deleteTaskCard }: ICard) {
    function handleClickIsDoneTask() {
        changeIsDone(idTask, doneTask);
    }

    function hancleClickDeleteTask() {
        deleteTaskCard(idTask);
    }

    return (
        <div className={styles.card}>
            <div className={styles.contentCheckbox}>
                <label onClick={handleClickIsDoneTask} className={doneTask ? styles.checkChecked : styles.checkEmpty}>
                    {doneTask && <Check className={styles.iconChecked} size={14}/>}
                </label>
            </div>
            <span className={doneTask ? styles.textCardChecked : styles.textCardEmpty}>{ textTask }</span>
            <button onClick={hancleClickDeleteTask} className={styles.buttonDeletdTask}>
                <Trash size={20} />
            </button>
        </div>
    );
}