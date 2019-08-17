// Code Keypad Component Here
import React from "react";

class Keypad extends React.Component{
  const enterPassword = function {
    console.log('Entering password...')
  }
  render ()  {
    return (
      <input type="password" onClick={enterPassword} />
    )
  }
}
