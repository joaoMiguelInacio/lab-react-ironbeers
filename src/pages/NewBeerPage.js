import React, { useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FormControl, OutlinedInput, InputLabel, Button } from "@mui/material";
import Header from "../components/header/Header";

export default function BasicTextFields() {
 
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    console.log(values)
    console.log(values.name)
    const { name, value } = e.target;
    setValues(({ ...values, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", values);
      setValues({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: ""
      });
      navigate("/beers");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
        <Header/>
        <Box
        component="form"
        style={{paddingTop:"5vh", display: "flex", flexDirection: "column", margin: "10vw", gap: "1vh"}}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        >
            <FormControl variant="outlined" margin="none">
                <InputLabel htmlFor="name">Name</InputLabel>
                <OutlinedInput id="component-simple" name="name" value={values.name} onChange={handleChange} />
            </FormControl>
            <FormControl variant="outlined" margin="none">
                <InputLabel htmlFor="tagline">Tagline</InputLabel>
                <OutlinedInput id="component-simple" name="tagline" value={values.tagline} onChange={handleChange} />
            </FormControl>
            <FormControl variant="outlined" margin="none">
                <InputLabel htmlFor="description">Description</InputLabel>
                <OutlinedInput id="outlined-multiline-static" name="description" value={values.description} onChange={handleChange} />
            </FormControl>
            <FormControl variant="outlined" margin="none">
                <InputLabel htmlFor="first_brewed">First Brewed</InputLabel>
                <OutlinedInput id="component-simple" name="first_brewed" value={values.first_brewed} onChange={handleChange} />
            </FormControl>
            <FormControl variant="outlined" margin="none">
                <InputLabel htmlFor="brewers_tips">Brewers Tips</InputLabel>
                <OutlinedInput id="component-simple" name="brewers_tips" value={values.brewers_tips} onChange={handleChange} />
            </FormControl>
            <FormControl variant="outlined" margin="none">
                <InputLabel htmlFor="attenuation_level">Attenuation Level</InputLabel>
                <OutlinedInput id="component-simple" type="number" name="attenuation_level" value={values.attenuation_level} onChange={handleChange} />
            </FormControl>
            <FormControl variant="outlined" margin="none">
                <InputLabel htmlFor="contributed_by">Contributed By</InputLabel>
                <OutlinedInput id="component-simple" name="contributed_by" value={values.contributed_by} onChange={handleChange} />
            </FormControl>
            <Button type="submit" variant="contained">Add New</Button>
        </Box>
    </>
  );
}
