import React, { useState, useEffect } from 'react';
// import App from './App.css';
import './App.css';
function App() {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState(""); 
  const [page, setPage] = useState(1); 

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${query}?page=${page}`
        );
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, [query, page]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search country..."
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {Array.isArray(countries) && countries.length > 0 ? (
            <div>
              {countries.map((country, index) => (
                <div key={index}>
                  <h3>{country.name.common}</h3>
                  <p>Capital: {country.capital}</p>
                  <p>Region: {country.region}</p>
                  <p>Population: {country.population}</p>
                  <p>area: {country.area}</p>
                  <img src={country.flags.png} alt={country.name.common} />
                </div>
              ))}
            </div>
          ) : (
            <p>No countries found.</p>
          )}
        </>
      )}
    </>
  );
}

export default App;



