import React, { useState } from "react";

// functional component for rendering textbox
export default function Textbox(props) {
  const [wordleText, setText] = useState("")
  const [employees, setEmployees] = useState([])

  // this callback function handles text change for the inputbox
  const onTextBoxChange = (event) => {
    // get currentText from browser event
    const currentText = event.target.value
    setText(currentText)
  }

  // the purpose of this function is to catch when the user presses enter so we can do something about it
  const onAnyKeyPress = (keyboardEvent) => {
    const keyPressed = keyboardEvent.key
    
    if (keyPressed === "Enter") {
      // todo (austin): connect validation logic here

      // update employees variable to new array state
      setEmployees((prevEmployees) => {
              return [...prevEmployees, wordleText]
            })        
      
    }
  }

  return (
    <div>
      <input 
        type="text"
        value={wordleText}
        onChange={onTextBoxChange}
        onKeyPress={onAnyKeyPress}
      />
      <div>{employees}</div>
    </div>
  );
}
