import React, { Component } from "react"

class Calculator extends Component {
    state= {
        total: 0,
        
    }

    setNum= (e, num) => {
        this.setState({[num]: e.target.value})
    }

    totalNum = (e, num) => {
        e.preventDefault()
        this.setState((prevState => {
            return {
                total: parseInt(this.state.num1) + parseInt(this.state.num2)
            }
        }))
    }


    render() {
        return(
            <div>
                <form onSubmit={this.totalNum}>
                    <input type="number"
                            name="num1"
                            placeholder="Enter your first number"
                            value={this.state.num1}
                            onChange={ (e) => this.setNum(e, 'num1') }
                        
                    />
                    <input type="number"
                            name="num2"
                            placeholder="Enter your second number"
                            value={this.state.num2}
                            onChange={ (e) => this.setNum(e, 'num2') }
                        
                    />
                    <button type="submit">Add it!</button>
                </form>
                <h1>Total:{this.state.total}</h1>
            </div>
          

        )
    }
}

export default Calculator