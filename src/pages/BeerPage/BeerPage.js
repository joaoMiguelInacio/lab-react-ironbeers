import "./BeerPage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ProgressIndicator from "../../components/ProgressIndicator";
import React from 'react';
import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";


const BeerPage = () => {
  const [ beer, setBeer ] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fecthBeers = async () => {
      try {
        console.log(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
        setBeer(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fecthBeers();
  }, []);

  return (
    <>
    <Header />
    {
      beer 
      ? <>
            <img
            className="beer-image"
            src={`${beer.image_url}`}
            alt={beer.name}
            />
            <div className="text-container">
                <div className="flex-container">
                    <h1 className="normal">{beer.name}</h1>
                    <h1 className="normal grey">{beer.attenuation_level}</h1>
                </div>
                <div className="flex-container">
                    <h3 className="normal grey">{beer.tagline}</h3>
                    <h5>{beer.first_brewed}</h5>
                </div>
                <p>{beer.description}</p>
                <h5 className="grey">{beer.contributed_by}</h5>
            </div>
        </>
      : <ProgressIndicator />
    }
    </>
  )
}

export default BeerPage;