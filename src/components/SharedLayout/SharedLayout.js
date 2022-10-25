import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";
// import { NavLink } from 'react-router-dom';
import { Suspense } from "react";

// let activeColorName = {
//   color: 'blue',
// };
// let activeColorNameBlack = {
//   color: 'black',
// };

const Navigation = () => (
  <nav>
    <Link
      to="/"
      // style={({ isActive }) => (isActive ? activeColorName : activeColorNameBlack)}
      
    >
      Home
    </Link>

    <Link
      to="/movies"
      // style={({ isActive }) => (isActive ? activeColorName : activeColorNameBlack)}
    >
      Movies
    </Link>
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
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
