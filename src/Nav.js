import './App.scss';
import React, {useState, useEffect} from 'react';


const Nav = () => {
    const [link, setLink] = useState('');


    const apiCall = (e) => {
        let result;
        let endpoint = e.target.innerHTML;
        fetch(`https://www.dnd5eapi.co/api/${endpoint}`)
        .then(response => response.json())
        .then(data => {
         result = data.results;
         console.log(result)
        })
        .catch((error) => {
        console.error('Error:', error);
        });
        setLink(endpoint);
        console.log(link)
      }



    
  return (
    <div>
      <nav className="Nav">
          <ul onClick={apiCall}>Monsters</ul>
          <ul onClick={apiCall}>Characters</ul>
          <ul onClick={apiCall}>Equipment</ul>
          <ul onClick={apiCall}>Spells</ul>
          <ul onClick={apiCall}>Terrian Builder</ul>
      </nav>
    </div>
  );
}

export default Nav;