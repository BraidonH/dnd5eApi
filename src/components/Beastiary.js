import '../App.scss';
import React, {useEffect, useState} from 'react';

const Beastiary = (props) => {
const [creatures, setCreatures] = useState();





useEffect(() => {


  if(typeof props.results === 'undefined' ) {
    console.log('bitch')
  } else if(props.link === 'Monsters'){
    for(let i = 0; i < props.results.length; i++) {
      let parentDiv = document.getElementById('items-MonsterContainer') 
      let childElement = document.createElement('div');
      parentDiv.appendChild(childElement);
      childElement.setAttribute("class", `item-monster-${props.results[i].name}`);
      childElement.innerHTML = ` ${props.results[i].name}`;
    }
  } else if(props.results && props.link != 'Monsters'){
    console.log('wrong request')
  }
},)

    return (
      <div id="items-MonsterContainer">
       
      </div>
    );
  }
  
  export default Beastiary;