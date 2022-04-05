import "../App.scss";
import React, { useState, useEffect } from "react";
import Input from "./Input";

const Spells = (props) => {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    props.setData(setSpells, props.link);
  }, []);

  return (
    <div id="items-SpellsContainer">
      {spells.map((spell) => {
        return <h1 className={`item-spells-${spell.name}`}>{spell.index}</h1>;
      })}
    </div>
  );
};

export default Spells;
