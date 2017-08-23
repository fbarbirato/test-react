import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = { counter: 0 }

  incrementCounter = (incrementValue) => {
  	this.setState((prevState) => (
      {
        counter: prevState.counter + incrementValue
      }));
  };

  render(){
    return (
      <div>
        <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickFunction={this.incrementCounter} />
        <Button incrementValue={100} onClickFunction={this.incrementCounter} />
        <Result total={this.state.counter} />
      </div>
    );
  }
}

class Button extends React.Component {
  render(){
    return (
      <button onClick={()=>this.props.onClickFunction(this.props.incrementValue)}>
        +{this.props.incrementValue}
      </button>
    );
  }
}

const Result = (props) => {
  return (
    <div>{props.total}</div>
  );
};

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
