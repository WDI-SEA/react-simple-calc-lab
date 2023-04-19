import React, {Component} from 'react'

class Calculator extends Component {

   
    state = {
        sum : 0,
        operator: "+"
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value} )
        console.log(num)
    }

    addNum = () => {
        const { num1, num2, operator } = this.state;
        let result;
    
        switch (operator) {
            case "+":
                result = Number(num1) + Number(num2);
                break;
            case "-":
                result = Number(num1) - Number(num2);
                break;
            case "*":
                result = Number(num1) * Number(num2);
                break;
            case "/":
                result = Number(num1) / Number(num2);
                break;
            default:
                result = "";
                break;
        }
    
        this.setState({ sum: result });
    }

    updateOperator = (e) => {
        const newOperator = (e.target.id)
        this.setState({operator: newOperator})
    }



    render() {

        return(
          <div className="container">
          <h1>Add with React</h1>
      
          <div>
            <p>Choose a oprator</p>
            <div>
                <button id="+" onClick={this.updateOperator}>+</button>
                <button id="-" onClick={this.updateOperator}>-</button>
                <button id="*" onClick={this.updateOperator}>*</button>
                <button id="/" onClick={this.updateOperator}>/</button>
            </div>
          </div>  
          <div className="add">
              <input type="number" 
              name="num1" 
              placeholder='Enter you first number' 
              value={this.state.num1}
              onChange={(e) => this.setNum(e, 'num1')}/>
              <span>{this.state.operator}</span>
              <input type="number" 
              name="num2" 
              placeholder='Enter you second number' 
              value={this.state.num2}
              onChange={(e) => this.setNum(e, 'num2')}
              />
              <button onClick={this.addNum}>=</button>
              <h3>{this.state.sum}</h3>
          </div>
      </div>
        )
    }
}






export default Calculator