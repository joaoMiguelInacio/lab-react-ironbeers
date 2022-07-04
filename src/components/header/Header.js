import React from 'react';
import "./Header.css";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import Search from "./Search";

const Header = ({ search, searchedString, setSearchedString }) => {
  return (
    <>
      <div className='header'>
        <Link to="/" className='white' ><HomeIcon fontSize="large" /> </Link>
        {search ? 
          <Search setSearchedString = {setSearchedString} searchedString = {searchedString}  className='search-box' />
          : null
        }
      </div>
      <p className="divider"></p>
    </>
    
  )
}

export default Header