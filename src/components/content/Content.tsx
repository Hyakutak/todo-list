import { Form } from "../form/Form";
import style from './Content.module.css';

export function Content() {
    return (
        <div className={style.content}>
            <Form />
        </div>
    );
}