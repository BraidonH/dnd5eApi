import "../App.scss";
import React, { useState, useEffect } from "react";
import Input from "./Input";

const Equipment = (props) => {
  const [equipment, setEquipment] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    props.setData(setEquipment, props.link);
  }, []);

  const search = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const filteredEquipment = equipment.filter((item) => {
    return item.name.toLocaleLowerCase().includes(input);
  });

  return (
    <div>
      <Input search={search} />
      <div id="items-EquipmentContainer">
        {filteredEquipment.map((items) => {
          return (
            <h1 className={`item-equipemnt${items.index}`} key={items.index}>
              {items.index}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default Equipment;

// if(!equipment) {

//   console.log('uh oh')
// } else if(equipment){
//   for(let i = 0; i < equipment.length; i++) {
//     let parentDiv = document.getElementById('items-EquipmentContainer')
//     let childElement = document.createElement('div');
//     parentDiv.appendChild(childElement);
//     childElement.setAttribute("class", `item-equipment-${equipment[i].name}`);
//     childElement.innerHTML = ` ${equipment[i].index}`;
//     childElement.addEventListener("click", function()  {props.infoSelect(props.link.toLowerCase(), childElement.innerHTML.toLowerCase().replace(/\s+/g, '-'))})
//    }
// } else if(props.link !== 'Equipment'){
//   console.log("Logged Prop is incorrect");
// }
