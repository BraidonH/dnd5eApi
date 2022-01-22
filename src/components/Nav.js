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
          <ul id="monsterNav" onClick={props.setLink}>Monsters</ul>
          <ul onClick={props.setLink}>Characters</ul>
          <ul onClick={props.setLink}>Equipment</ul>
          <ul onClick={props.setLink}>Spells</ul>
          <ul onClick={props.setLink}>TerrianBuilder</ul>
          <ul onClick={props.setLink}>NPCs</ul>
      </nav>
     <Input />
    </div>
  );
}

export default Nav;