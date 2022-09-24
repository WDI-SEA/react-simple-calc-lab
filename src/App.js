import { Component } from 'react';
import './App.css';
import Calculator from './Calculator';

class App extends Component {
  render(){
    return (
      <div className="container">
          <h1>Add with React!</h1>

          <Calculator />
      </div>
      )
    }
}


export default App;
