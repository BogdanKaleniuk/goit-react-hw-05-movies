import { useLocation, useNavigate } from "react-router-dom";
import { getMovies } from "../components/movieApi";

const FilmsDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => navigate(location?.state?.from ?? '/');

  return (
    <main>
         <button onClick={handleClick}>
          Go back
        </button>
    </main>
  );
};

export default FilmsDetails;