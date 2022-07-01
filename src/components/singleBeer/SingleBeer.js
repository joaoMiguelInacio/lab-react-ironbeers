import { blueGrey } from "@mui/material/colors";
import React from "react";
import "./SingleBeer.css";

const SingleBeer = ({beer}) => {
  return (
    <>
      <img className="beer-image" src={`${beer.image_url}`} alt={beer.name} />
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
  );
};

export default SingleBeer;
