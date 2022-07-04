import "./BeersPage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ProgressIndicator from "../../components/ProgressIndicator";
import React from 'react';
import BeersList from "../../components/BeersList";
import Header from "../../components/header/Header";
import Search from "@mui/icons-material/Search";

const BeersPage = () => {
  const [ beers, setBeers ] = useState(null);
  const [searchedString, setSearchedString] = useState("");

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
    return searchedBeers.map((beer) => (
      <BeersList {...beer} key={beer._id}/>
    ))
  };

  let searchedBeers = null
	if (searchedString !== "") {
		searchedBeers = beers.filter((beer) => {
			return beer.name.toLowerCase().includes(searchedString.toLowerCase())
		});
	} else {
		searchedBeers = beers;
	}

  const search = true;

  return (
    <>
    <Header search = {search} setSearchedString = {setSearchedString} searchedString = {searchedString} />
    {
      beers 
      ? displayBeers()
      : <ProgressIndicator />
    }
    </>
  )
}

export default BeersPage