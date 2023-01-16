import { Check } from "phosphor-react";
import Trash from "../../assets/trash.svg"
import styles from "./CardTask.module.css";

export function CardTask({ doneTask, textTask }) {
    let checkBox;
    let text;
    if(doneTask) {
        checkBox = <label className={styles.checkChecked}>
            <Check className={styles.iconChecked} size={14}/>
        </label>;
        text = <span className={styles.textCardChecked}>{ textTask }</span>;
    } else {
        checkBox = <label className={styles.checkEmpty} />;
        text = <span className={styles.textCardEmpty}>{ textTask }</span>;
    }

    return (
        <div className={styles.card}>
            <div className={styles.contentCheckbox}>
                {checkBox}
            </div>
            {text}
            <img src={Trash} alt="Excluir tarefa" />
        </div>
    );
}