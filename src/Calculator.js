import React, { Component } from 'react'
import './App.css'

export default class Calculator extends Component {
     state = {
          num1: 0,
          num2: 0,
          result: 0
     }

     setNum = (e, num) => {
          this.setState({
               [num]: Number(e.target.value)
          })
     }

     calculate = () => {
          this.setState(prevState => {
               const addition = prevState.num1 + prevState.num2

               return{
                    result: addition
               }
          })
     }


     render() {
          return (
               <div className="container">
               <h1>Add with React!</h1>
   
                    <div className="add">
                     <input type="text" 
                         placeholder='Enter number one...'
                         value={this.state.num1}
                         onChange={e => this.setNum(e, 'num1')}
                    />
                     <span>+</span>
                         <input type="text"
                         placeholder='enter second number...'
                         value={this.state.num2}
                         onChange={e => this.setNum(e, 'num2')} />
                         <button 
                         onClick={this.calculate}
                         >
                         Calculate
                         </button>
                         <h3>{this.state.result}</h3>
                    </div>
               </div>
          )
     }
}