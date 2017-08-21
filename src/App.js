import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div>
        <Button />
        <Result />
      </div>
    );
  }
}

class Button extends React.Component {
	state = { counter: 0 }
  
  handleClick = () => {
  	this.setState((prevState) => (
      {
        counter: prevState.counter + 1
      }
    ));
  };
  
  render(){
    return (
      <button onClick={this.handleClick}>
        {this.state.counter}
      </button>
    );
  }
}

const Result = (props) => {
  return (
    <div>...</div>
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
