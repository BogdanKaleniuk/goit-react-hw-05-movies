import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from '../movieApi';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

    useEffect(() => {
        function fetchReviews() {
      fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=7880f10208129df405f0f3d5264141ee&language=en-US`)
        .then(response => response.json())
        .then(data => {
          setReviews(
            data.results.map(({ author_details, content, }) => ({
              author: author_details.username,
              content: content,
            }))
          );
        })
        .catch(error => console.log(error));
    }
console.log(setReviews)
    fetchReviews();

    fetchReviews();
  }, [movieId]);
  
return (
    <>
      {error && <div>{error}</div>}
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
      {/* {reviews} */}
    </>
  );
};

export default Reviews;