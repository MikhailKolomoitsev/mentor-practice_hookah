import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

export default function Navigation() {
  const location = useLocation();
  console.log(location);
  return (
    <nav className="nav">
      <NavLink
        to={{
          pathname: '/',
          state: { from: location },
        }}
        className="nav__logo"
      >
        <img src="" alt="Logo" />
      </NavLink>
      <ul className="nav__list">
        <li className="nav__list_item">
          <NavLink
            to={{
              pathname: '/products',
              state: { from: location },
            }}
          >
            products
          </NavLink>
        </li>
        <li className="nav__list_item">
          <NavLink
            to={{
              pathname: '/lounges',
              state: { from: location },
            }}
          >
            lounges
          </NavLink>
        </li>
        <li className="nav__list_item">
          <NavLink
            to={{
              pathname: '/shops',
              state: { from: location },
            }}
          >
            shops
          </NavLink>
        </li>
        <li className="nav__list_item">
          <NavLink
            to={{
              pathname: '/shops',
              state: { from: location },
            }}
          >
            Map
          </NavLink>
        </li>
        <li className="nav__list_item">
          <NavLink
            to={{
              pathname: '/my-product',
              state: { from: location },
            }}
          >
            My product
          </NavLink>
        </li>
        <li className="nav__list_item">
          <NavLink
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          >
            Log in
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
