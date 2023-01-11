import { Form } from "../form/Form";
import { HeaderTask } from '../header/HeaderTask';
import style from './Content.module.css';

export function Content() {
    return (
        <div className={style.content}>
            <Form />
            <HeaderTask />
        </div>
    );
}