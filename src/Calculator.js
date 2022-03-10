import { Component } from "react";
import "./App.css";

export default class Calculator extends Component {
  state = {
    num1: 0,
    num2: 0,
    result: 0
  };

  setNum = (e, num) => {
    console.log('type setNum!!!', typeof e)
    this.setState({ [num]: e.target.value });
  };

  setSum = (num1, num2) => {
    console.log('SETSUM:', this.state.sum)
    this.setState({result: parseInt(num1) + parseInt(num2)})
  }

  setSub = (num1, num2) => {
    // console.log('SETSUM:', this.state.sum)
    this.setState({result: parseInt(num1) - parseInt(num2)})
  }
  setMult = (num1, num2) => {
    // console.log('SETSUM:', this.state.sum)
    this.setState({result: parseInt(num1) * parseInt(num2)})
  }

  setDiv = (num1, num2) => {
    // console.log('SETSUM:', this.state.sum)
    this.setState({result: parseInt(num1) / parseInt(num2)})
  }

  render( 

  ) {
    return (
      <div className="container">
        <h1>Math with React!</h1>

        <div className="add">
          <input
            type="number"
            name="num1"
            placeholder="Enter your first number"
            value={this.state.num1}
            onChange={(e) => this.setNum(e, "num1")}
          />

          <input
            type="number"
            name="num2"
            placeholder="Enter your first number"
            value={this.state.num2}
            onChange={(e) => this.setNum(e, "num2")}
          />

          <div>
            <button
              name="sumButton"
              onClick={(e) => {
                this.setSum(this.state.num1, this.state.num2);
              }}
            >
              +
            </button>

            <button
              name="subButton"
              onClick={(e) => {
                this.setSub(this.state.num1, this.state.num2);
              }}
            >
              -
            </button>

            <button
              name="multButton"
              onClick={(e) => {
                this.setMult(this.state.num1, this.state.num2);
              }}
            >
              *
            </button>
            
            <button
              name="divButton"
              onClick={(e) => {
                this.setDiv(this.state.num1, this.state.num2);
              }}
            >
              /
            </button>
          </div>
            <h3>{this.state.result}</h3>
        </div>
      </div>
    );
  }
}
