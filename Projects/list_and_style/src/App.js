import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from "./Validation/Validation";
import Output from "./Output/Output";

class App extends Component {
  state={
    userName:"Himanshu"
  }
  handleChange=function(event){
    this.setState({
      userName:event.target.value
    });
  }
  handleClick=function(index){
    let userName=this.state.userName;
    userName=userName.split('')
    userName.splice(index,1);
    userName = userName.join('');
    this.setState({
      userName:userName
    });
  }
  render() {
    const userName=this.state.userName;
    const length=userName.length;
    return (
      <div className="App">
        <Validation length={length}/>
        <input type="text" value={userName} onChange={this.handleChange.bind(this)}/>
        <Output click={this.handleClick.bind(this)} value={userName}/>
      </div>
    );
  }
}

export default App;
