import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackStats.module.css';

class FeedbackStats extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };
  handleIncrement = e => {
    const name = e.target.name;
    console.log([name]);
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
      total: prevState.total + 1,
      positiveFeedback: prevState.good * 100,
    }));
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positiveFeedback: (prevState.good / prevState.total) * 100,
    }));
  };
  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;
    return (
        <div className={s.feedback__block}>
          <h1 className={s.title}>Please leave feedbacks</h1>
          <ul className={s.feedback__list}>
            <li>
              <button
                className={s.feedback__btn}
                type="button"
                name="good"
                onClick={this.handleIncrement}
              >
                Good
              </button>
            </li>
            <li>
              <button
                className={s.feedback__btn}
                type="button"
                name="neutral"
                onClick={this.handleIncrement}
              >
                Neutral
              </button>
            </li>
            <li>
              <button
                className={s.feedback__btn}
                type="button"
                name="bad"
                onClick={this.handleIncrement}
              >
                Bad
              </button>
            </li>
          </ul>
        </div>

    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),

  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
