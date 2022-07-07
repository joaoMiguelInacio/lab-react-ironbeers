import { Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import BeersPage from "./pages/BeersPage/BeersPage";
import SingleBeerPage from "./pages/SingleBeerPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import NewBeerPage from "./pages/NewBeerPage";

function App() {
  return (
    <>
      <Routes>
        {/* Routes should be ordered from the more specific ones to the more vague ones, to avoid routing errors */}
        <Route path="/:id" element={<SingleBeerPage/>} />
        <Route path="/beers" element={<BeersPage/>} />
        <Route path="/random-beer" element={<RandomBeerPage/>} />
        <Route path="/new-beer" element={<NewBeerPage/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </>
  )
}

export default App;
