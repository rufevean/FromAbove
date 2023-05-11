import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export function Header() {
    return (
        <div className={styles.menuWrapper}>
            <span>From Above</span>
            <nav>
                <NavLink>Community</NavLink>
                <NavLink>News</NavLink>
                <NavLink>Register</NavLink>
                <NavLink><button>Login</button></NavLink>
            </nav>
        </div>
    );
}