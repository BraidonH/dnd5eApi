import "../App.scss";
import React, { useEffect, useState } from "react";
import Input from "./Input";

const Beastiary = (props) => {
  const [creatures, setCreatures] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    props.setData(setCreatures, props.link);
  }, []);

  const search = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const filteredMonsters = creatures.filter((creature) => {
    return creature.name.toLocaleLowerCase().includes(input);
  });

  return (
    <div>
      <Input search={search} />
      <div id="items-MonsterContainer">
        {filteredMonsters.map((creature) => {
          return (
            <h1 className={`item-monster${creature.name}`} key={creature.name}>
              {creature.name}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default Beastiary;

// if(!creatures) {

//   console.log('uh oh')
// } else if(creatures){
//   for(let i = 0; i < creatures.length; i++) {
//     let parentDiv = document.getElementById('items-MonsterContainer')
//     let childElement = document.createElement('div');
//     parentDiv.appendChild(childElement);
//     childElement.setAttribute("class", `item-monster-${creatures[i].name}`);
//     childElement.innerHTML = ` ${creatures[i].index}`;
//     childElement.addEventListener("click", function()  {props.infoSelect(props.link.toLowerCase(), childElement.innerHTML.toLowerCase().replace(/\s+/g, '-'))})
//    }
// } else if(props.link !== 'Monsters'){
//   console.log("Logged Prop is incorrect");
// }
