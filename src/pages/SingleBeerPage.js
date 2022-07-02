import axios from "axios";
import { useEffect, useState } from "react";
import ProgressIndicator from "../components/ProgressIndicator";
import React from "react";
import Header from "../components/header/Header";
import { useParams } from "react-router-dom";
import SingleBeer from "../components/singleBeer/SingleBeer";

const BeerPage = () => {
  const [beer, setBeer] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fecthBeers = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${id}`
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
