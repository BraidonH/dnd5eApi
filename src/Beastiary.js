import './App.scss';
import React, {useState, useEffect} from 'react';

const Beastiary = () => {
const [creatures, setCreatures] = useState('creature');

useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/monsters')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}, [])


    return (
      <div>
        
      </div>
    );
  }
  
  export default Beastiary;