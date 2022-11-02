import React, { Component } from "react";
import Feedbacks from './Feedbacks/Feedbacks';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  handleBtnGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1
      }
    });
  }

  handleBtnNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1
      }
    });
  }

  handleBtnBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1
      }
    });
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / total);
  };


 
  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleBtnGood}>Good</button>
        <button type="button" onClick={this.handleBtnNeutral}>Neutral</button>
        <button type="button" onClick={this.handleBtnBad}>Bad</button>
        <h1>Statistics</h1>
        <span>Good: {this.state.good}<br></br></span>
        <span>Neutral: {this.state.neutral}<br></br></span>
        <span>Bad: {this.state.bad}<br></br></span>
        <span>Total: {this.countTotalFeedback()}<br></br></span>
        <span>Positive feedback: {this.countPositiveFeedbackPercentage()}%</span>
      <Feedbacks />
      </div>
    );
  }
};

export default App;