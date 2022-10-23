import { Routes, Route } from "react-router-dom";
import Appbar from './AppBar/AppBar';


export const App = () => {
  return (
  <div>
    {/* <Appbar /> */}
      <Routes>

        <Route path="/" element={<Appbar />}></Route>
        {/* <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Movies  />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
          </Route>
        </Route> */}
      </Routes>
    </div>
  );
};

console.log(Appbar);