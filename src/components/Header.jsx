import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <div>
            <img src="" alt="" />
            <nav>
                <NavLink>Community</NavLink>
                <NavLink>News</NavLink>
                <NavLink>Register</NavLink>
                <NavLink><button>login</button></NavLink>
            </nav>
        </div>
    );
}