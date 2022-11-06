import React, { Component } from "react";
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  onButtonClick = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1
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
    const { good, neutral, bad } = this.state;
    console.log(Object.keys(this.state))

    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions options={Object.keys(this.state)}
            onButtonClick={this.onButtonClick}/>
        <h1>Statistics</h1>
        {this.countTotalFeedback() > 0 ? (
        <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad}  
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}/>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
};

export default App;