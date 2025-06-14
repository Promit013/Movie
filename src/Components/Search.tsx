import React from 'react';
import { useGlobalContext } from './Context';

const Search = () => {
  const { query, setQuery, error } = useGlobalContext();

  return (
    <>
      <section className='search-section'>
        <h2>Search your favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="Please search here"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        {error.show && (
          <div className="card-error">
            <p>{error.msg}</p>
          </div>
        )}
      </section>
    </>
  );
};

export default Search;
