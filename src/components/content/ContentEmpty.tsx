import Clipboard  from "../../assets/Clipboard.svg";
import styles from "./ContentEmpty.module.css";

export function ContentEmpty() {
    return (
        <div className={styles.empty}>
            <img src={Clipboard} alt="Bloco de notas" />
            <h2 className={styles.title}>Você ainda não tem tarefas cadastradas</h2>
            <h3 className={styles.subTitle}>Crie tarefas e organize seus itens a fazer</h3>
        </div>
    );
}