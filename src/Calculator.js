import React, {Component} from 'react'



export default class Calculator extends Component{
    state = {
        numOne: '',
        numTwo: '',
        result: '',
        operator: '+'
    }

    handleChange = (e, stateKey) => {
        this.setState({ [stateKey]: e.target.value});
    }

    doTheMath = (e)=>{
        e.preventDefault()
        let result
        if(this.state.operator === '+'){
            result = parseInt(this.state.numOne) + parseInt(this.state.numTwo)
        } else if(this.state.operator === '-'){
            result = parseInt(this.state.numOne) - parseInt(this.state.numTwo)
        } else if(this.state.operator === '*'){
            result = parseInt(this.state.numOne) * parseInt(this.state.numTwo)
        } else if(this.state.operator === '/'){
            result = parseInt(this.state.numOne) / parseInt(this.state.numTwo)
        }


        this.setState((prevState)=>{
            return{
                numOne: result,
                numTwo: '',
                result: result,
                operator: prevState.operator
            }
        })
    }

    reset = (e)=>{
        e.preventDefault()
        this.setState((prevState)=>{
            return{
                numOne: '',
                numTwo: '',
                result: '',
                operator: '+'
            }
        })
    }

  render(){
    return(
        <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
            <input type="number"
                name="numOne"
                placeholder="First number"
                value={this.state.numOne}
                onChange={ (e) => this.handleChange(e, 'numOne') }
            />
            
            <span>{this.state.operator}</span>
            
            <input type="number"
                name="numTwo"
                placeholder="Second number"
                value={this.state.numTwo}
                onChange={ (e) => this.handleChange(e, 'numTwo') }
            />
            <button  onClick={this.doTheMath}>=</button>
            <h3>{this.state.result}</h3>
            <div>
                <input type='button' name='operator' onClick={(e) => this.handleChange(e, 'operator')} value='+' />
                <input type='button' name='operator' onClick={(e) => this.handleChange(e, 'operator')} value='-' />
                <input type='button' name='operator' onClick={(e) => this.handleChange(e, 'operator')} value='*' />
                <input type='button' name='operator' onClick={(e) => this.handleChange(e, 'operator')} value='/' />

            </div>
            <button  onClick={this.reset}>Reset</button>
        </div>
        </div>
    )

    
  }

}