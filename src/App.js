import { Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import BeersPage from "./pages/BeersPage/BeersPage";
import BeerPage from "./pages/BeerPage";
import RandomBeerPage from "./pages/RandomBeerPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/beers" element={<BeersPage/>} />
        <Route path="/:id" element={<BeerPage/>} />
        <Route path="/random-beer" element={<RandomBeerPage/>} />
      </Routes>
    </>
  )
}

export default App;
