import '../App.scss';
import React, {useEffect, useState} from 'react';

const Beastiary = (props) => {
const [creatures, setCreatures] = useState();



useEffect(() => {
  props.setData(setCreatures, props.link)  
}, [])

console.log(creatures);

  if(!creatures) {
    
    console.log('uh oh')
  } else if(creatures){
    
    for(let i = 0; i < creatures.length; i++) {
      let parentDiv = document.getElementById('items-MonsterContainer') 
      let childElement = document.createElement('div');
      parentDiv.appendChild(childElement);
      childElement.setAttribute("class", `item-monster-${creatures[i].name}`);
      childElement.innerHTML = ` ${creatures[i].name}`;
      childElement.addEventListener("click", function()  {props.infoSelect(props.link.toLowerCase(), childElement.innerHTML.toLowerCase().replace(/\s+/g, '-'))})
     }
  } else if(props.link !== 'Monsters'){
    console.log("Logged Prop is incorrect");
  }


    return (
      <div id="items-MonsterContainer">
       
      </div>
    );
  }
  
  export default Beastiary;