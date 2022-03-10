import React, {Component} from 'react'



class Calculator extends Component {
    state = {
        num1: '',
        num2: '',
        total: ''
    }

    setNum = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }



    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e)

        let num1 = parseInt(this.state.num1)
        let num2 = parseInt(this.state.num2)

        this.setState({total: num1 + num2})


        

    }
    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>    

                <div className="add">
                    <form onSubmit={this.handleSubmit}>
                    {/* Input for Number 1 */}
                        <input 
                            type="number" 
                            name="num1" 
                            placeholder="Enter your first number"
                            value={this.state.num1}
                            onChange = {this.setNum}
                        />
                        
                        
                        <span>+</span>

                    {/* Input for Number 2 */}
                        <input 
                            type="number" 
                            name="num2" 
                            placeholder="Enter your second number"
                            value={this.state.num2}
                            onChange = {this.setNum}
                        />
                    {/* Button for Equal Sign */}
                        <button> = </button>
                    </form>

                    <h3>{this.state.total}</h3>
                </div>
            </div>
        )
    }
}




export default Calculator