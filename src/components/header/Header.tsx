import Logo from '../../assets/Logo.svg';
import style from './Header.module.css';

export function Header() {
    return (
        <main className={style.header}>
            <img className={style.logoHeader} src={Logo} alt='Logo' />
        </main>
    );
}
