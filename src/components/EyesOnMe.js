// Code EyesOnMe Component Here
import  React from "react";

class EyesOnMe extends React.Component {


  render () {
    const focusHandler = () => {
      console.log('Good!')
    }
    const blurHandler = ()  => {
      console.log('Hey! Eyes on me!')
    }

    return (
      <button onFocus={this.focusHandler} onBlur={this.blurHandler}  />
    )
  }
}

export default EyesOnMe
