// Code Keypad Component Here
import React from "react";

class Keypad extends React.Component{

  render ()  {
    const enterPassword = () => {
      console.log('Entering password...')
    }
    return (
      <input type="password" onKeyUp={this.enterPassword} />
    )
  }
}

export default Keypad
