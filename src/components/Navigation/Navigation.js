import { NavLink } from 'react-router-dom';

let activeColorName = {
  color: '#2196f3',
};

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      style={({ isActive }) => (isActive ? activeColorName : undefined)}
    >
      Home
    </NavLink>

    <NavLink
      to="/movies"
      style={({ isActive }) => (isActive ? activeColorName : undefined)}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;