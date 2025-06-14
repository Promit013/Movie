import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from './Context';

const SingleMovie = () => {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.Response === "True") {
        setMovie(data);
        setLoading(false);
      } else {
        // You can add an error state here if needed
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">Loading....</div>
      </div>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt={movie.Title} />
        </figure>
        <div className="card-content">
          <h2 className="title">{movie.Title}</h2>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating}</p>
          <p className="card-text">{movie.Country}</p>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
