import React, { Component } from "react";
import Feedbacks from './Feedbacks/Feedbacks';

class App extends Component {
  state = {
    
  }

  handleBtnGood = () => {
    console.log('Good pressed');
  }

  handleBtnNeutral = () => {
    console.log('Neutral pressed');
  }

  handleBtnBad = () => {
    console.log('Bad pressed');
  }

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleBtnGood}>Good</button>
        <button type="button" onClick={this.handleBtnNeutral}>Neutral</button>
        <button type="button" onClick={this.handleBtnBad}>Bad</button>
        <h1>Statistics</h1>
      <Feedbacks />
      </div>
    );
  }
};

export default App;