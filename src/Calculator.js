import React, { Component} from "react"


// class -> state -> event trackers->fnxs
// render -> new data
// return -> html


export default class Calculator extends Component{
    // state will need empty arrays for input ?and answer
    state={
        numOne:" ",
        numTwo: " ",
        answer: " "
    }
    // need event trackers
    setNum = e =>{
        e.preventDefault()
        // brackets allow a dynamic key value which becomes numOne or numTwo depending on what was clicked
        this.setState({ [e.target.name]:e.target.value})
    }

    render(){
    // this.state.numOne + this.state.numTwo

    return(
        < div className="container">
        <div className="add">
            <h1> Add with React!</h1>
                <input type="text"
                 name="numOne"
                 value={this.state.numOne}
                 onChange={this.setNum} />
                <span>+</span>
                <input type="text"
                name="numTwo"
                value={this.state.numTwo}
                onChange={this.setNum} />
                <button>=</button>
            <h3> Addition results go here: </h3>
        </div>
    </div>
    )
    }
}