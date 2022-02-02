import '../App.scss';
import React, {useState, useEffect} from 'react';

const Equipment = (props) => {
const [equipment, setEquipment] = useState();


useEffect(() => {
  props.setData(setEquipment, props.link)  
}, [])

if(!equipment) {
    
  console.log('uh oh')
} else if(equipment){
  for(let i = 0; i < equipment.length; i++) {
    let parentDiv = document.getElementById('items-EquipmentContainer') 
    let childElement = document.createElement('div');
    parentDiv.appendChild(childElement);
    childElement.setAttribute("class", `item-equipment-${equipment[i].name}`);
    childElement.innerHTML = ` ${equipment[i].index}`;
    childElement.addEventListener("click", function()  {props.infoSelect(props.link.toLowerCase(), childElement.innerHTML.toLowerCase().replace(/\s+/g, '-'))})
   }
} else if(props.link !== 'Equipment'){
  console.log("Logged Prop is incorrect");
}






    return (


      <div id="items-EquipmentContainer">
      </div>
    );
  }
  
  export default Equipment;