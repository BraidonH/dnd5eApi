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
        link: ''
    };
  }


 

    setLink = (e) =>  {
    let endpoint = e.target.innerHTML;
    this.setState({
      link: endpoint,
      eStack: e
    });
    console.log(this.state.link)
      }


      setData = (hook, link) => {
        fetch(`https://www.dnd5eapi.co/api/${link}`)
        .then(response => response.json())
        .then(data => {
    
             hook(data.results)
    
        })
        .catch((error) => {
        console.error('Error:', error);
        });
      
      }


      infoSelect = (link, selection) => {
        selection = selection.slice(1)
        fetch(decodeURI(`https://www.dnd5eapi.co/api/${link}/${selection}`))
        .then(response => response.json())
        .then(data => {
    
            console.log(data)
    
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    
      }

    
render() {
   switch(this.state.link) {
    case 'Monsters':
      return (
        <div className="App">
          <Nav setLink={this.setLink}/>
          <Beastiary 
          link={this.state.link} setData={this.setData} infoSelect={this.infoSelect}/>
        </div>
        )
      case 'Characters':
        return (
          <div className="App">
            <Nav setLink={this.setLink}/>
            <Characters />
          </div>
          )

      case 'Equipment':
        return (
          <div className="App">
            <Nav setLink={this.setLink}/>
            <Equipment  link={this.state.link} setData={this.setData}/>
          </div>
          )

      case 'Spells':
         return (
          <div className="App">
            <Nav setLink={this.setLink}/>
             <Spells  link={this.state.link} setData={this.setData}/>
          </div>
          )

      case 'TerrianBuilder':
          return (
          <div className="App">
           <Nav setLink={this.setLink}/>
            <TerrianBuilder />
           </div>
          )
         
      default:
        return (
          <div className="App">
            <Nav setLink={this.setLink}/>
            <h1>{this.state.link}</h1>
          </div>
        );
  }
 }
}


export default App;
