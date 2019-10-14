import React,{Component} from 'react';
import logo from './logo.svg';
import Team from './Team';

import './App.css';




function App() {
  return (
    <div className="App">
      <Team name="Andre"/>
      <Team name="Susi"/>
      <button onClick={this.increaseScore}>+2</button>
    </div>
  );
}

export default App;
