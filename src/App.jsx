import { useRef, useState } from "react";
import "./App.css";
import ErrorContent from "./components/ErrorContent";
import MainContent from "./components/MainContent";

import useFetch from "./hooks/useFetch";
import getRandomLocation from "./utils/getRandomLocation";

const App = () => {
  const [inputValue, setInputValue] = useState(getRandomLocation());
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
  const [location, hasError] = useFetch(url);
  const inputLocation = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    //e.target.firstChild.value
    setInputValue(inputLocation.current.value);
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Rick and Morty</h1>
      </header>

      <form className="app__form" onSubmit={handleSearch}>
        <input className="app__input" ref={inputLocation} type="text" />
        <button className="app__button">Search</button>
      </form>
      {hasError ? <ErrorContent /> : <MainContent location={location} />}
    </div>
  );
};

export default App;
