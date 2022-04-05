import "../App.scss";
import React from "react";
import dice from "../assests/dice.jpg";

const Nav = (props) => {
  return (
    <div id="navContainer">
      <img className="dice" src={dice} width="80" />
      <h1 className="title">DND5EAPI</h1>
      <nav id="Nav">
        <ul id="monsterNav" onClick={props.setLink}>
          Monsters
        </ul>
        <ul onClick={props.setLink}>Characters</ul>
        <ul onClick={props.setLink}>Equipment</ul>
        <ul onClick={props.setLink}>Spells</ul>
        <ul onClick={props.setLink}>TerrianBuilder</ul>
        <ul onClick={props.setLink}>NPCs</ul>
      </nav>
    </div>
  );
};

export default Nav;
