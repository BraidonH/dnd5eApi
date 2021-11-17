import '../App.scss';
import React, {useState} from 'react';
import dice from '../assests/dice.jpg'

const Nav = (props) => {

  return (
    <div>
      <img class="dice" src={dice} width="80"/>
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