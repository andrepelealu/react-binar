import React,{Component} from 'react';
import logo from './logo.svg';
import Team from './Team';

import './App.css';


class App extends Component {
  render() {
    return(
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Team name="Upin"/>
        <Team name="Ipin"/>
        <Team name="Ehsan"/>
        <Team name="Susanti"/>
        <Team name="Mei Mei"/>

        </header>

      </div>
    );
  }
}


export default App;
