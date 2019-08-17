// Code EyesOnMe Component Here
import  React from "react";

class EyesOnMe extends React.Component {
  const focusHandler = function {
    console.log('Good!')
  }
  const blurHandler = function {
    console.log('Hey! Eyes on me!')
  }

  render () {
    return (
      <button onFocus={this.focusHandler} onBlur={this.blurHandler}
    )
  }
}
