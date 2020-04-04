import React, { useState, useEffect } from "react";

import api from "./services/api";

import "./styles.css";

function App() {
  const [movies, setMovies] = useState([]);

  const recommendedMovies = async () => {
    const response = await api.get("ComingSoon/k_h3c553kX");
    const arrayResponse = response.data.items;
    const fiveMoviesArray = arrayResponse.slice(0, 5);
    setMovies(fiveMoviesArray);
  };

  useEffect(() => {
    recommendedMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    const response = await api.get(`${movies}`);

    console.log(response);
  };

  return (
    <div className="container">
      <h1>Título da página</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Busque filmes"
          value=""
          onChange={() => {}}
        />
      </form>

      <div className="carousels">
        <h2>COMING SOON</h2>
        <ul className="recommended-carousel">
          {movies.map((movie) => (
            <li key={movie.id}>
              <img alt={movie.title} src={movie.image} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
