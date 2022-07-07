import axios from "axios";
import { useEffect, useState } from "react";
import ProgressIndicator from "../components/ProgressIndicator";
import React from "react";
import Header from "../components/header/Header";
import SingleBeer from "../components/singleBeer/SingleBeer";

const BeerPage = () => {
  const [beer, setBeer] = useState(null);
  useEffect(() => {
    const fecthBeers = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/random`
        );
        setBeer(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fecthBeers();
  }, []);

  return (
    <>
      <Header />
      {beer ? <SingleBeer beer={beer} /> : <ProgressIndicator />}
    </>
  );
};

export default BeerPage;
