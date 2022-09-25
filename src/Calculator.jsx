import React, { Component } from 'react'


export default class Calculator extends Component {




    render() {


        return (
            <div className="container">
                <h1>Math operations with React!</h1>

               
<br></br>
<br></br>

                <div className="add">

                    <form onSubmit={ (e) => this.props.getSum(e)}>
                        <input
                            type="number"
                            name='numOne'
                            onChange={ (e) => this.props.setNum(e, 'num1') }
                            value={this.props.numOne}
                        />

                        <span>+</span>

                        <input
                            type="number"
                            name='numTwo'
                            onChange={ (e) => this.props.setNum(e, 'num2') }
                            value={this.props.numTwo}
                        />

                        <button type='submit'>=</button>
                    </form>

                    <h3>Addition results go here!</h3>
                    <p>Sum: {this.props.sum}</p>

            </div>

<br></br>
<br></br>
<br></br>

            <div className='subtract'>

                    <form onSubmit={ (e) => this.props.getSubtract(e)}>
                        <input
                            type="number"
                            name='numOne'
                            onChange={ (e) => this.props.setNum(e, 'num1') }
                            value={this.props.numOne}
                        />

                        <span>-</span>

                        <input
                            type="number"
                            name='numTwo'
                            onChange={ (e) => this.props.setNum(e, 'num2') }
                            value={this.props.numTwo}
                        />

                        <button type='submit'>=</button>
                    </form>

                    <h3>Subtraction results go here!</h3>
                    <p>Subtraction Result: {this.props.subtract}</p>


            </div>

<br></br>
<br></br>
<br></br>

            <div className='multiply'>

                <form onSubmit={ (e) => this.props.getMultiply(e)}>
                    <input
                        type="number"
                        name='numOne'
                        onChange={ (e) => this.props.setNum(e, 'num1') }
                        value={this.props.numOne}
                    />

                    <span>*</span>

                    <input
                        type="number"
                        name='numTwo'
                        onChange={ (e) => this.props.setNum(e, 'num2') }
                        value={this.props.numTwo}
                    />

                    <button type='submit'>=</button>
                </form>

                <h3>Multiplication results go here!</h3>
                <p>Multiplication Result: {this.props.multiply}</p>
            </div>

<br></br>
<br></br>
<br></br>

            <div className='divide'>
                <form onSubmit={ (e) => this.props.getDivide(e)}>
                    <input
                        type="number"
                        name='numOne'
                        onChange={ (e) => this.props.setNum(e, 'num1') }
                        value={this.props.numOne}
                    />

                    <span>/</span>

                    <input
                        type="number"
                        name='numTwo'
                        onChange={ (e) => this.props.setNum(e, 'num2') }
                        value={this.props.numTwo}
                    />

                    <button type='submit'>=</button>
                </form>

                <h3>Division results go here!</h3>
                <p>Division Result: {this.props.divide}</p>
            </div>

                    
        </div>
        )
    }
}