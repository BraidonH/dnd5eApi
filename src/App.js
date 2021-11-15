import React, {useState} from 'react';
import './App.scss';
import Beastiary from './components/Beastiary';
import Nav from './components/Nav'
import Spells from './components/Spells'
import TerrianBuilder from './components/TerrianBuilder';
import Characters from './components/Characters';
import Equipment from './components/Equipment';


function App() {
  const [link, setLink] = useState('');
  const [results, setResults] = useState()

  const apiCall = (e) => {
    let endpoint = e.target.innerHTML;
    fetch(`https://www.dnd5eapi.co/api/${endpoint}`)
    .then(response => response.json())
    .then(data => {
     for(let i = 0; i < data.results.length; i++) {
       setResults(data.results)
     }
    })
    .catch((error) => {
    console.error('Error:', error);
    });
    setLink(endpoint);
  }


  switch(link) {
    case 'Monsters':
      return (
        <div className="App">
          <Nav apiCall={apiCall}/>
          <Beastiary results={results}/>
        </div>
        )
        break;
      case 'Characters':
        return (
          <div className="App">
            <Nav apiCall={apiCall}/>
            <Characters />
          </div>
          )
          break;
      case 'Equipment':
        return (
          <div className="App">
            <Nav apiCall={apiCall}/>
            <Equipment />
          </div>
          )
          break;
      case 'Spells':
         return (
          <div className="App">
            <Nav apiCall={apiCall}/>
             <Spells />
          </div>
          )
          break;
      case 'TerrianBuilder':
          return (
          <div className="App">
           <Nav apiCall={apiCall}/>
            <TerrianBuilder />
           </div>
          )
             break;     
      default:
        return (
          <div className="App">
            <Nav apiCall={apiCall}/>
            <h1>{link}</h1>
          </div>
        );
  }
}



export default App;
