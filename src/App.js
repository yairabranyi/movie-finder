import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchMovies from "./components/SearchMovies"


function App() {
  return (
    <div className="Container">
    <h1 className="title">React Movie search</h1>
    <SearchMovies/>
 
    </div>
  );
}

export default App;
