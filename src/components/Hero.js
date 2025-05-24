import React from 'react';
import '../css/Hero.css';

const Hero = ({searchItem, setSearchItem, onSearch}) => {
    return ( 
         <div className="hero">
      <h1>Welcome to BookNest 📚</h1>
      <p>Search for your next favorite book.</p>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books..."
          value={searchItem}
          onChange={(e)=>{setSearchItem(e.target.value)}}
        />
        <button onClick={onSearch}>Search</button>
      </div>
    </div>
     );
}
 
export default Hero;