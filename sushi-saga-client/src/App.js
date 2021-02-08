import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!

const API = "http://localhost:3000/sushis"


class App extends Component {
  
  state = {
    sushis: [],
    eaten: [], 
    money: 100,
    index: 0
  }
  
  more = (event) => {
    let newIndex = this.state.index + 4 
    this.setState({
        index: newIndex 
      }) 
    }

  componentDidMount(){
    fetch(API)
      .then(res => res.json())
      .then(sushis => {
        this.setState({
          sushis: sushis }) 
      } )  
  }

  remainingSushi = () => {
    let remaining = this.state.sushis.filter(notEaten => {
      return !this.state.eaten.find(eaten => {
        return notEaten.id === eaten.id 
      })
      
    }) 
    return remaining 
  }

  eat = (sushi) => {
    this.setState(previousState => {
      return {
        eaten: previousState.money - sushi.price >= 0 ? [...previousState.eaten, sushi] : previousState.eaten,
        money: previousState.money - sushi.price >= 0 ? previousState.money - sushi.price : previousState.money
      }
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.remainingSushi()} index={this.state.index} more={this.more} eaten={this.eat}/>
        <Table budget={this.state.money} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;