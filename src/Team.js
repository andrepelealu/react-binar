import React,{Component} from 'react';

class Team  extends Component{
  constructor(props){
    super(props);
    this.state = {
      score:0
    }
    //https://stackoverflow.com/questions/32317154/react-uncaught-typeerror-cannot-read-property-setstate-of-undefined
    this.increaseScore = this.increaseScore.bind(this)
    this.decreaseScore = this.decreaseScore.bind(this)

    console.log(this.state)

  };
  increaseScore() {
    this.setState((state)=>({
      score: state.score + 2
    }))
  }
  decreaseScore() {
    this.setState((state)=>({
      score: state.score - 1
    }))
  }
  render(){
    return(
      <div id="score">
      <h2>{this.props.name}</h2>
      <h2>{this.state.score}</h2>
      <button onClick={this.increaseScore}>+2</button>
      <button onClick={this.decreaseScore}>-1</button>

      </div>
    );
  }

}
export default Team;
