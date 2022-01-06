import React, {Component} from 'react';
import './App.scss';
import Beastiary from './components/Beastiary';
import Nav from './components/Nav'
import Spells from './components/Spells'
import TerrianBuilder from './components/TerrianBuilder';
import Characters from './components/Characters';
import Equipment from './components/Equipment';
import Npc from './components/Npc'

class App extends Component  {

  constructor() {
    super();
    this.state = {
        link: '',
        results: []
    };
  }


 

    apiCall = (e) =>  {
    let endpoint = e.target.innerHTML;
    fetch(`https://www.dnd5eapi.co/api/${endpoint}`)
    .then(response => response.json())
    .then(data => {
     for(let i = 0; i < data.results.length; i++) {
       this.setState({
         results: data.results
       })
     }
    })
    .catch((error) => {
    console.error('Error:', error);
    });
    this.setState({
      link: endpoint
    });
    console.log(this.state.link)
  }

render() {
   switch(this.state.link) {
    case 'Monsters':
      return (
        <div className="App">
          <Nav apiCall={this.apiCall}/>
          <Beastiary results={this.state.results}
          link={this.state.link}/>
        </div>
        )
        break;
      case 'Characters':
        return (
          <div className="App">
            <Nav apiCall={this.state.apiCall}/>
            <Characters />
          </div>
          )
          break;
      case 'Equipment':
        return (
          <div className="App">
            <Nav apiCall={this.apiCall}/>
            <Equipment />
          </div>
          )
          break;
      case 'Spells':
         return (
          <div className="App">
            <Nav apiCall={this.apiCall}/>
             <Spells results={this.state.results}
             link={this.state.link}/>
          </div>
          )
          break;
      case 'TerrianBuilder':
          return (
          <div className="App">
           <Nav apiCall={this.apiCall}/>
            <TerrianBuilder />
           </div>
          )
             break;     
      default:
        return (
          <div className="App">
            <Nav apiCall={this.apiCall}/>
            <h1>{this.state.link}</h1>
          </div>
        );
  }
 }
}


export default App;
