import React from 'react';
import "./Header.css";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to="/" className='header'><HomeIcon /></Link>
  )
}

export default Header