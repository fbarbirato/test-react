import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  state = {
    cards: [
      {
        name: "Felipe Barbirato",
        avatar_url: "https://avatars0.githubusercontent.com/u/3997584?v=4",
        company:"Albelli"
      },
      {
        name: "Felipe Barbirato",
        avatar_url: "https://avatars0.githubusercontent.com/u/3997584?v=4",
        company:"Albelli"
      }
    ]
  };
  render(){
    return (
      <div>
        <Form />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

const CardList = (props) => {
  return (
    <div>
      <div>
        {props.cards.map(card => <Card {...card} />)}
      </div>
    </div>
  );
}

const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
      <img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
  );
}

class Form extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Github username" />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

export default App;
