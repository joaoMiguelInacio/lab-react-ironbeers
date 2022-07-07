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
        <Route path="/" element={<HomePage/>} />
        <Route path="/beers" element={<BeersPage/>} />
        <Route path="/:id" element={<SingleBeerPage/>} />
        <Route path="/random-beer" element={<RandomBeerPage/>} />
        <Route path="/new-beer" element={<NewBeerPage/>} />
      </Routes>
    </>
  )
}

export default App;
