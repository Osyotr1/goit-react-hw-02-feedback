import React, { Component } from "react";
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';

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

    return (
      <>
        <Section title="Please leave feedback">
        <FeedbackOptions 
          options={Object.keys(this.state)}
          onButtonClick={this.onButtonClick}
          />
        </Section>

        <Section title="Statistics">
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
        </Section>
      </>
    );
  }
};

export default App;