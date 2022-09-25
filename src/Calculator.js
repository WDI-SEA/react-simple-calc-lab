import React, {Component} from 'react'

export default class Calculator extends Component{
    
    
    state = {
           num1:'',
           num2:'',
           operation:'addition',
           result:''
        }
    setNum =async (e,numType)=>{
        await this.setState({[numType] : e.target.value})
        this.solve() 
    }
    setOperation =async (e)=>{
        await this.setState({operation:e.target.value})
        this.solve() 
    }
    solve = ()=>{
        let a = Number(this.state.num1)
        let b = Number(this.state.num2)

        switch(this.state.operation){
            case 'multiplication' :  
                if(a*b){
                    this.setState({result:a*b})
                }
                else{
                    this.setState({result:'Invalid Number'})
                }
            break
            case 'subtraction':
                if(a-b)
                    this.setState({result:a-b})
                else
                    this.setState({result:'Invalid Number'})
            break
            case 'division':
                if(a/b)
                    this.setState({result:a/b})
                else{
                    this.setState({result:'Invalid Number'})
                }
            break
            case 'addition':
            let value = a+b
                if(value)
                    this.setState({result:a+b})
                else
                    this.setState({result:'Invalid Number'})
        }
    }
    
    render(){
        return(
            <div className="container">
                <h1>Calculator with React!</h1>

                <div className="add">
                    <input type="text" onChange={(e)=>this.setNum(e,'num1')} name="num1" placeholder="Enter value 1 here" value={this.state.num1} />
                    <select onChange={e=>this.setOperation(e)}>
                        <option value = "addition" >+</option>
                        <option value = "subtraction" >-</option>
                        <option value = "multiplication" >*</option>
                        <option value = "division" >/</option>


                    </select>
                    <input type="text" onChange={(e)=>this.setNum(e,'num2')} name="num2" placeholder="Enter value 2 here" value={this.state.num2} />
                    <button onClick={this.solve}>=</button>
                    <h3>{this.state.result}</h3>
                </div>
            </div>
        )}
    

}