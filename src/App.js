import React from "react";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Poster from "./Components/Poster/Poster";
import {action,originals,romanceMovies,trending,horrorMovies,documentaries} from "./url"; 
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Poster url={originals} title='Netflix Originals' /> 
    <Poster url={trending} title='Trending' isSmall/>
    <Poster url={action} title='Action' isSmall/>
    <Poster url={romanceMovies} title='Romance' isSmall/>
    <Poster url={horrorMovies} title='Horror' isSmall/>
    <Poster url={documentaries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
