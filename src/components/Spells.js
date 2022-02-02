import '../App.scss';
import React, {useState, useEffect} from 'react';

const Spells = (props) => {
const [spells, setSpells] = useState();


useEffect(() => {
  props.setData(setSpells, props.link)  
}, [])

if(!spells) {
    
  console.log('uh oh')
} else if(spells){
  for(let i = 0; i < spells.length; i++) {
    let parentDiv = document.getElementById('items-SpellsContainer') 
    let childElement = document.createElement('div');
    parentDiv.appendChild(childElement);
    childElement.setAttribute("class", `item-spells-${spells[i].name}`);
    childElement.innerHTML = ` ${spells[i].name}`;
    childElement.addEventListener("click", function()  {props.infoSelect(props.link.toLowerCase(), childElement.innerHTML.toLowerCase().replace(/\s+/g, '-'))});
   }
} else if(props.link !== 'Spells'){
  console.log("Logged Prop is incorrect");
}


    return (
      <div id="items-SpellsContainer">
      
      </div>
    );
  }
  
  export default Spells;