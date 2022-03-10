import { Component } from "react";

class Addition extends Component {
  state = {
    num1: 0,
    num2: 0,
    
  };



  setSum = (num1, num2) => {
    console.log("SETSUM:", this.state.sum);
    this.setState({ sum: parseInt(num1) + parseInt(num2) });
  };

  render() {
    return (
      <>
        <h1>nada</h1>
      </>
    );
  }
}

export default Addition;
