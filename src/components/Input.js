import '../App.scss';
import React, {useState} from 'react';

const Input = (props) => {
const [input, setInput] = useState();


const search = (e) => {
    setInput(e.target.value)
    console.log(input)
}



    return (
      <div className="inputContainer">
        <input className="input" placeholder="..." onChange={search} value={input}/>
      </div>
    );
  }
  
  export default Input;