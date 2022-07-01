import "./BeersPage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ProgressIndicator from "../../components/ProgressIndicator";
import React from 'react';
import BeersList from "../../components/BeersList";
import Header from "../../components/header/Header";


const BeersPage = () => {
  const [ beers, setBeers ] = useState(null);
  useEffect(() => {
    const fecthBeers = async () => {
      try {
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
        setBeers(response.data.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (error) {
        console.error(error);
      }
    }

    fecthBeers();
  }, []);

  const displayBeers = () => {
    return beers.map((beer) => (
      <BeersList {...beer} key={beer._id}/>
    ))
  }
  return (
    <>
    <Header />
    <p className="divider"></p>
    {
      beers 
      ? displayBeers()
      : <ProgressIndicator />
    }
    </>
  )
}

export default BeersPage