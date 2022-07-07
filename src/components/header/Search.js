import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ searchedString, setSearchedString }) => {
      
	return (
            <div className="search-box">
                  <SearchIcon className="white" />
                  <input
                        className="input-box"
                        type="text"
                        placeholder= "Search..."
                        value={searchedString}
                        onChange={(e) => setSearchedString(e.target.value)}
                  />    
            </div>
		
	)
}

export default Search