// Code EyesOnMe Component Here
import  React from "react";

class EyesOnMe extends React.Component {
  const focusHandler = function {
    console.log('Good!')
  }

  render () {
    return (
      <button onFocus={this.} onBlur={this.}
    )
  }
}
