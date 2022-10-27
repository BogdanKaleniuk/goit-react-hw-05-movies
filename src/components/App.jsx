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

const Reviews = lazy(() => import("../components/Reviews/Rewiews"));

const Cast = lazy(() => import("../components/Cast/Cast"));

export const App = () => {
  return (
  <div>
      <Routes>

        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies/" element={<Movies />}></Route>
          <Route path="/movies/:movieId/" element={<FilmDetails />}> 
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<div>Отак тіпа має бути?</div>} />
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

