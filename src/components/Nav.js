import '../App.scss';
import React, {useState} from 'react';


const Nav = (props) => {

  return (
    <div>
      <nav className="Nav">
          <ul onClick={props.apiCall}>Monsters</ul>
          <ul onClick={props.apiCall}>Characters</ul>
          <ul onClick={props.apiCall}>Equipment</ul>
          <ul onClick={props.apiCall}>Spells</ul>
          <ul onClick={props.apiCall}>TerrianBuilder</ul>
      </nav>
    </div>
  );
}

export default Nav;