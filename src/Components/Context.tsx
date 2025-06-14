import React, { useEffect, useContext, useState } from 'react';

export const API_URL = 'http://www.omdbapi.com/?apikey=4d566003';

const APIContext = React.createContext();

const APIProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("batman");

  const getMovies = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.Response === "True") {
        setMovies(data.Search);
        setLoading(false);
      } else {
        setError({
          show: true,
          msg: data.Error
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError({
        show: true,
        msg: "Something went wrong!",
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    let t=setTimeout(()=>{
      getMovies(`${API_URL}&s=${query}`);
    },500)
    return ()=> clearTimeout(t);
  }, [query]);

  return (
    <APIContext.Provider value={{ error, isLoading, movies ,query, setQuery }}>
      {children}
    </APIContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(APIContext);
};

export { APIContext, APIProvider, useGlobalContext };
