import '../App.scss';
import React, {useState, useEffect} from 'react';

const Spells = (props) => {
const [creatures, setCreatures] = useState('creature');


useEffect(() => {
if(typeof props.results === 'undefined' ) {
  console.log('bitch')
} else if(props.results && props.link === 'Spells'){
  for(let i = 0; i < props.results.length; i++) {
    let parentDiv = document.getElementById('items-SpellsContainer') 
    let childElement = document.createElement('div');
    parentDiv.appendChild(childElement);
    childElement.setAttribute("class", `item-spells-${props.results[i].name}`);
    childElement.innerHTML = ` ${props.results[i].name}`;
  }
} else {
  console.log('wrong request')
}
}, )


    return (
      <div id="items-SpellsContainer">
      
      </div>
    );
  }
  
  export default Spells;