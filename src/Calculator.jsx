import React, {Component} from 'react'


class Calculator extends Component {

    // Set variable in the state
    state = {
        num1: "",
        num2: "",
        sum: "",

        num3: "",
        num4: "",
        sub: "",

        num5: "",
        num6: "",
        mult: "",

        num7: "",
        num8: "",
        div: "",

    }
    // function that will control the adding the math
    doMath = (e) => {
        e.preventDefault()
        this.setState({
            // another way to look at it: let x = x1 + x2 = x3
            sum: this.state.num1 + this.state.num2,
            sub: this.state.num3 - this.state.num4,

            mult: this.state.num5 * this.state.num6,
            div: this.state.num7 / this.state.num8
        })
    }
    
    setNum = (e) => {
        this.setState({ [e.target.name]: parseInt(e.target.value) })
    }

    render() { 
        return(
            <div className="caclulator">
                <h1>Add with React!</h1>
                {/* form for the first variable */}
                <form onSubmit={this.doMath}>
                    <input type="number" 
                        name="num1"
                        value={this.state.num1}
                        onChange={this.setNum}
                    />
                    {/* symbol to describe what operation is being done  */}
                    <span> + </span>
                    {/* form for the 2nd variable */}
                    <input type="number" 
                        name="num2"
                        value={this.state.num2}
                        onChange={this.setNum}
                    />
                    <button> = </button>
                    {/* the solution */}
                    <h3>{this.state.sum}</h3>
                </form>

                
                <br/>
                <form onSubmit={this.doMath}>
                    <input type = "number"
                        name = "num3"
                        value = {this.state.num3}
                        onChange = {this.state.setNum} 
                    />
                    <span> - </span>
                    <input type = "number"
                        name = "num4"
                        value = {this.state.num4}
                        onChange = {this.state.setNum} 
                    />
                    <button> = </button>
                    <h3> {this.state.sub}</h3>
                </form>


                <br>
                </br>
                <form onSubmit={this.doMath}>
                    <input type = "number"
                        name = "num5"
                        value = {this.state.num5}
                        onChange = {this.state.setNum} 
                    />
                    <span> *  </span>
                    <input type = "number"
                        name = "num6"
                        value = {this.state.num6}
                        onChange = {this.state.setNum} 
                    />
                    <button> = </button>
                    <h3> {this.state.mult}</h3>
                </form>


                <br>
                </br>
                <form onSubmit={this.doMath}>
                    <input type = "number"
                        name = "num7"
                        value = {this.state.num7}
                        onChange = {this.state.setNum} 
                    />
                    <span> / </span>
                    <input type = "number"
                        name = "num8"
                        value = {this.state.num8}
                        onChange = {this.state.setNum} 
                    />
                    <button> = </button>
                    <h3> {this.state.div}</h3>
                </form>
                
            </div>



           
        )
    }
}

export default Calculator;