import { Component } from "react";

export default class Calculator extends Component {
  state = {
    num1: "",
    num2: "",
    result: "",
  };
  setNum = (e, num) => {
    this.setState({ [num]: e.target.value });
  };
  showSum = (e) => {
    this.setState({
      result: parseInt(this.state.num1) + parseInt(this.state.num2),
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input
            type="number"
            name="num1"
            placeholder="Enter your 1st number"
            value={this.state.num1}
            onChange={(e) => this.setNum(e, "num1")}
          />
          <span>+</span>
          <input
            type="number"
            name="num2"
            placeholder="Enter your 2nd number"
            value={this.state.num2}
            onChange={(e) => this.setNum(e, "num2")}
          />
          <button onClick={this.showSum}>=</button>
          <h3>{this.state.result}</h3>
        </div>
      </div>
    );
  }
}
