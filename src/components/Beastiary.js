import '../App.scss';
import React, {useEffect, useState} from 'react';

const Beastiary = (props) => {
const [creatures, setCreatures] = useState();





useEffect(() => {


  if(typeof props.results === 'undefined' ) {
    console.log('bitch')
  } else {
    for(let i = 0; i < props.results.length; i++) {
      let parentDiv = document.getElementById('monsterContainer') 
      let childElement = document.createElement('div');
      parentDiv.appendChild(childElement);
      childElement.setAttribute("class", "monster");
      childElement.innerHTML = ` ${props.results[i].name}`;
    }

    // for (const index in creatures) {
    //   let childElement = document.createElement('div');
    //   childElement.setAttribute("class", "monster");
    //   childElement.innerHTML = `${index}: ${creatures[index].name}`;
    //   console.log(childElement)
    //   console.log("ahhhhhh")
    //  }
  }
},)

    return (
      <div id="monsterContainer">
       
      </div>
    );
  }
  
  export default Beastiary;