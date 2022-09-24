import React, {Component} from 'react'

class Calculator extends Component {
    state = {
        sum:'',
        num1:'',
        num2:''
    }

    setNum = (e, num) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    setSum = e =>  {
        e.preventDefault()
        let add = parseInt(this.state.num1) + parseInt(this.state.num2)
        this.setState({
            ['sum']: add
        })
    }

    render(){
        return(
            <div className="calculator">
                <form onSubmit={(e) => this.setSum(e)}>
                    <input type="number" 
                        name="num1"
                        value={this.state.num1}
                        onChange={(e) => this.setNum(e)}
                    />

                    <span>+</span>

                    <input type="number" 
                        name="num2"
                        value={this.state.num2}
                        onChange={(e) => this.setNum(e)} 
                    />
                    
                    <button >=</button>
                    <h3>{this.state.sum}</h3>
                </form>
            </div>
        )
    }
}
export default Calculator