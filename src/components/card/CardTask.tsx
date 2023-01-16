import { Check } from "phosphor-react";
import Trash from "../../assets/trash.svg"
import styles from "./CardTask.module.css";

interface ICard {
    doneTask: boolean,
    textTask: string,
    idTask: string,
    changeIsDone: Function,
    deleteTaskCard: Function
}

export function CardTask({ doneTask, textTask, idTask, changeIsDone, deleteTaskCard }: ICard) {
    let checkBox;
    let text;
    if(doneTask) {
        checkBox = <label onClick={handleClickIsDoneTask} className={styles.checkChecked}>
            <Check className={styles.iconChecked} size={14}/>
        </label>;
        text = <span className={styles.textCardChecked}>{ textTask }</span>;
    } else {
        checkBox = <label onClick={handleClickIsDoneTask} className={styles.checkEmpty} />;
        text = <span className={styles.textCardEmpty}>{ textTask }</span>;
    }

    function handleClickIsDoneTask() {
        changeIsDone(idTask, doneTask);
    }

    function hancleClickDeleteTask() {
        deleteTaskCard(idTask);
    }

    return (
        <div className={styles.card}>
            <div className={styles.contentCheckbox}>
                {checkBox}
            </div>
            {text}
            <img onClick={hancleClickDeleteTask} src={Trash} alt="Excluir tarefa" />
        </div>
    );
}