import '../App.scss';
import React, {useEffect, useState} from 'react';

const Beastiary = (props) => {
const [creatures, setCreatures] = useState();





useEffect(() => {
  if(typeof props.results === 'undefined' ) {
    console.log('bitch')
  } else {
    setCreatures(props.results)
    for (const index in creatures) {
      console.log(`${index}: ${creatures[index].name}`);
     }
  }
},)

    return (
      <div>
  
      </div>
    );
  }
  
  export default Beastiary;