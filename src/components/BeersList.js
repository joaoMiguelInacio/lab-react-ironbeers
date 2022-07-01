import React from "react";
import { Link } from "react-router-dom";

const BeersList = (beer) => {
  return (
    <>
      <Link to={`/${beer._id}`} className="beer-list-item">
        <img
          className="beer-list-image"
          src={`${beer.image_url}`}
          alt={beer.name}
        />
        <div className="beer-list-details">
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
          <p>
            <span className="strong">Created by: </span>
            {beer.name}
          </p>
        </div>
      </Link>
      <hr />
    </>
  );
};

export default BeersList;
