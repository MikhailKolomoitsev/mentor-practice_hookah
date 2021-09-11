import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav>
            <NavLink to='/'><img src="" alt="Logo" /></NavLink>
            <ul>
                <li>
                    <NavLink to='/products'>products</NavLink>
                </li>
                <li>
                    <NavLink to='/lounges'>lounges</NavLink>
                </li>
                <li>
                    <NavLink to='/shops'>shops</NavLink>
                </li>
            </ul>
        </nav>
    )
}