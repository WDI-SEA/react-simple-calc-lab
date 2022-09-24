import React, { Component } from "react"

class Calculator extends Component {
    state= {
        total: 0,
        num1: "",
        num2: "",
        operator: ""
        
    }

    setNum= (e, num) => {
        this.setState({[num]: e.target.value})
    }

    totalNum = (e, num) => {
        e.preventDefault()
        let total
        if (this.state.operator === "+") {
            total = parseInt(this.state.num1) + parseInt(this.state.num2)
        } else if (this.state.operator === "-") {
            total= parseInt(this.state.num1) - parseInt(this.state.num2)
        } else if (this.state.operator === "*") {
            total = parseInt(this.state.num1) * parseInt(this.state.num2)
        } else if (this.state.operator === "/") {
            total = parseInt(this.state.num1) / parseInt(this.state.num2)
        }
        this.setState((prevState => {
            return {
                total
            }
        }))
    }


    render() {
        return(
            <div className="App-header">
                <h1>Simple Calculator</h1>
                <form onSubmit={this.totalNum}>
                    <input type="number"
                            name="num1"
                            placeholder="Enter number"
                            value={this.state.num1}
                            onChange={ (e) => this.setNum(e, 'num1') }
                        
                    />
                    <input type="number"
                            name="num2"
                            placeholder="Enter number"
                            value={this.state.num2}
                            onChange={ (e) => this.setNum(e, 'num2') }
                        
                    />
                     <input type="text"
                            name="operator"
                            size="30"
                            placeholder="Enter your operation(+, -, *, /)"
                            value={this.state.operator}
                            onChange={ (e) => this.setNum(e, 'operator') }
                        
                    />
                    <button type="submit">Perform Maths!</button>
                </form>
                <h1>Total:{this.state.total}</h1>
            </div>
          

        )
    }
}

export default Calculator