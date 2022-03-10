import './App.css';
import { Component } from 'react';

class Calculator extends Component {
	state = {
		num1: '',
		num2: '',
		sum: '', 
		sub: '',
		division: '',
		multi: ''

	}

	setNum = (e, num) => {
		this.setState({ [num]: e.target.value })
		console.log(e.target.value, num)
	}

	sum = () => {
		this.setState((prevState, props) => {
			return {
				sum: parseInt(prevState.num1) + parseInt(prevState.num2)
			}
		}, () => console.log('updated', this.state))
		console.log('not updated:', this.state)
	}

	sub = () => {
		this.setState((prevState, props) => {
			return {
				sub: parseInt(prevState.num1) - parseInt(prevState.num2)
			}
		}, () => console.log('updated', this.state))
		console.log('not updated:', this.state)
	}

	division = () => {
		this.setState((prevState, props) => {
			return {
				division: parseInt(prevState.num1) / parseInt(prevState.num2)
			}
		}, () => console.log('updated', this.state))
		console.log('not updated:', this.state)
	}

	multi = () => {
		this.setState((prevState, props) => {
			return {
				multi: parseInt(prevState.num1) * parseInt(prevState.num2)
			}
		}, () => console.log('updated', this.state))
		console.log('not updated:', this.state)
	}


	render() {
		return (
			<div className="container">
  			<h1>Add with React!</h1>

  			<div className="add">
					<input
						type="number"
						name='num1'
						placeholder='Enter your first number'
						value={this.state.num1}
						onChange={(e) => this.setNum(e, 'num1')}
					/>
    			<span>+</span>
					<input
						type="number"
						name="num2"
						placeholder="Enter your second number"
						value={this.state.num2}
						onChange={(e) => this.setNum(e, 'num2')}
					/>
					<button onClick={this.sum}>=</button>
					<button onClick={this.sub}>-</button>
					<button onClick={this.division}> / </button>
					<button onClick={this.multi}>*</button>
					<h3>{this.state.sum}</h3>
					<h3>{this.state.sub}</h3>
					<h3>{this.state.division}</h3>
					<h3>{this.state.multi}</h3>
  			</div>
			</div>
		)
	}
}

export default Calculator;
