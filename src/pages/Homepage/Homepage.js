import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="home-container">
      <Link 
        to={`/beers`}
        className="small-home-container">
        <img
          className="home-img"
          src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1656699558/Random/beers_ln3wox.png"
          alt="beer"
        />
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          pharetra nisl eros, et molestie metus aliquet ut. Mauris mattis odio
          id bibendum mollis.
        </p>
      </Link>
      <Link
        to={`/random-beer`}
        className="small-home-container">
        <img
          className="home-img"
          src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1656699554/Random/new-beer_pnbmzi.png"
          alt="new-beer"
        />
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          pharetra nisl eros, et molestie metus aliquet ut. Mauris mattis odio
          id bibendum mollis.
        </p>
      </Link>
      <Link
        to={`/new-beer`}
        className="small-home-container">
        <img
          className="home-img"
          src="https://res.cloudinary.com/dvru7nv6q/image/upload/v1656699556/Random/random-beer_ahgr5g.png"
          alt="random-beer"
        />
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          pharetra nisl eros, et molestie metus aliquet ut. Mauris mattis odio
          id bibendum mollis.
        </p>{" "}
      </Link>
    </div>
  );
};

export default Homepage;
