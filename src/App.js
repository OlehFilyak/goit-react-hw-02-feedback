import "./App.css";
import React from "react";
import Statistics from "./Components/Statistics/Statistics";
import Section from "./Components/Section/Section";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Notification from "./Components/Notification/Notification";

const good = "good";
const neutral = "neutral";
const bad = "bad";

const feedbacks = [good, neutral, bad];

class App extends React.Component {
  state = {
    [good]: 0,
    [neutral]: 0,
    [bad]: 0,
  };

  onFeedbackBtnClick = (feedback) => {
    this.setState((prevState) => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };

  calculateTotalCount = () => {
    let totalCountFeddbacks = 0;
    Object.values(this.state).reduce(
      (acc, count) => (totalCountFeddbacks = acc + count),
      0
    );
    return totalCountFeddbacks;
  };

  renderStatisticsItem = () => {
    return feedbacks.map((feedback) => (
      <li key={feedback} className="statistic-item">
        <p className="feedback-name">
          {feedback}: {this.state[feedback]}
        </p>
      </li>
    ));
  };

  render() {
    return (
      <div className="wrapper">
        <Section title="Залиште, будь ласка, свій feedback">
          <FeedbackOptions
            options={feedbacks}
            onFeedbackBtnClick={this.onFeedbackBtnClick}
          />
        </Section>

        <Section title="Статистика">
          {this.state.good > 0 || this.state.neutral || this.state.bad ? (
            <Statistics
              good={this.state.good}
              renderStatisticsItem={this.renderStatisticsItem}
              calculateTotalCount={this.calculateTotalCount}
            />
          ) : (
            <Notification message="Not feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
