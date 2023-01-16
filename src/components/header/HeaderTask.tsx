import styles from './HeaderTask.module.css';

interface IProps {
    totalTasks: number
}

export function HeaderTask({totalTasks}: IProps) {
    return (
        <main className={styles.headerTasks}>
            <div className={styles.allTasks}>
                <span className={styles.allTasksText}>Tarefas Criadas</span>
                <div className={styles.allTasksCounter}>
                    <span className={styles.allTasksCounterText}>{totalTasks}</span>
                </div>
            </div>
            <div className={styles.countTasksDone}>
                <span className={styles.countTasksDoneText}>Concluídas</span>
                <div className={styles.allTasksCounter}>
                    <span className={styles.allTasksCounterText}>0</span>
                </div>
            </div>
        </main>
    );
}