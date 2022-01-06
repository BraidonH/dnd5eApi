import '../App.scss';
import React, {useState} from 'react';
import Input from './Input'
import dice from '../assests/dice.jpg'

const Nav = (props) => {

  return (
    <div id="navContainer">
      <img class="dice" src={dice} width="80"/>
      <h1 className="title">DND5EAPI</h1>
      <nav className="Nav">
          <ul onClick={props.apiCall}>Monsters</ul>
          <ul onClick={props.apiCall}>Characters</ul>
          <ul onClick={props.apiCall}>Equipment</ul>
          <ul onClick={props.apiCall}>Spells</ul>
          <ul onClick={props.apiCall}>TerrianBuilder</ul>
          <ul onClick={props.apiCall}>NPCs</ul>
      </nav>
     <Input />
    </div>
  );
}

export default Nav;