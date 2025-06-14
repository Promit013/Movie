import React from 'react';
import { useGlobalContext } from './Context';
import { NavLink } from 'react-router-dom';

const Movie = () => {
  const { movies } = useGlobalContext(); 

  return (
    <section className="movie-page">
      <div className="grid grid-4-col">
        {movies.map((v:any) => {
          const { imdbID, Poster, Title } = v;
          return (
            <NavLink to={`movie/${imdbID}` } key={imdbID} >
              <div className="card">
                <div className="card-info">
                  <h2>{Title}</h2>
                  <img 
                    src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/150"} 
                    alt={Title} 
                  />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movie;
