import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./SharedLayout.styled";
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

export default function SharedLayout () {
  return (
    <Container>
      <Header>
        <nav>
          <Navigation />
        </nav>
      </Header>
        <Outlet />
    </Container>
  );
};
