import React, { Component } from 'react';
import axios, { AxiosResponse, AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import './App.css';

class App extends React.Component {
  state = { cards: [] };
  addNewCard = (cardInfo) => {
    this.setState((prevState) => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  }
  render(){
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

const CardList = (props) => {
  return (
    <div>
      <div>
        {props.cards.map(card => <Card key={card.id} {...card} />)}
      </div>
    </div>
  );
}

const Card = (props) => {
  return (
    <div style={{margin: '1em'}}>
      <img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', verticalAlign: 'top', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.name}
        </div>
        <div>{props.company}</div>
        <div><a href={props.html_url}>{props.html_url}</a></div>
      </div>
    </div>
  );
}

class Form extends React.Component {
  state = { username: ''}
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event: Form Submit', this.state.username);
    axios.get(`https://api.github.com/users/${this.state.username}`)
         .then(response => {
            this.props.onSubmit(response.data)
            this.setState({ username: '' })
          });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          value={this.state.username}
          onChange={(event) => this.setState({ username: event.target.value })}
          placeholder="Github username" required />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

export default App;
