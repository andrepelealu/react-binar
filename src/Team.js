import React,{Component} from 'react';

class Team  extends Component{
  constructor(props){
    super(props);
    this.state = {
      score:0
    }
  };
  increaseScore(){
    this.setState((state)=>({
      score: state.score + 2
    }))
  }

  render(){
    return(
      <div id="score">
      <h2>{this.props.name}</h2>
      <h2>{this.state.score}</h2>
      <button>+2</button>
      </div>
    );
  }

}
export default Team;
