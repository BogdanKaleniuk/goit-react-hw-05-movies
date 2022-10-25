import { Routes, Route } from "react-router-dom";
// import Appbar from './AppBar/AppBar';
import { lazy } from "react";
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() =>
  import("../pages/Home.js")
);
const Movies = lazy(() =>
  import("../pages/Movies.js")
);

const FilmDetails = lazy(() =>
  import("../pages/FilmDetails.js")
);

// const Home = createAsyncComponent("../pages/Home.js");

export const App = () => {
  return (
  <div>
      <Routes>

        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies/" element={<Movies />}></Route>
          <Route path="/movies/:movieId/" element={<FilmDetails />}> 
        </Route>
        </Route>
         

          {/* <Route path="/" element={<FilmDetails />} />  */}
        
        {/* <Route index element={<Home />}></Route> */}
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

