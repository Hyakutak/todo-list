import styles from './HeaderTask.module.css';

interface IProps {
    totalTasks: number,
    isDoneTask: number
}

export function HeaderTask({totalTasks, isDoneTask}: IProps) {
    return (
        <header className={styles.headerTasks}>
            <section className={styles.allTasks}>
                <span className={styles.allTasksText}>Tarefas Criadas</span>
                <div className={styles.allTasksCounter}>
                    <span className={styles.allTasksCounterText}>{totalTasks}</span>
                </div>
            </section>
            <section className={styles.countTasksDone}>
                <span className={styles.countTasksDoneText}>Concluídas</span>
                <div className={styles.allTasksCounter}>
                    <span className={styles.allTasksCounterText}>{isDoneTask} de {totalTasks}</span>
                </div>
            </section>
        </header>
    );
}