import React from 'react';
import FeedbackStats from './FeedbackOptions/FeedbackStats';
import Section from './Section/Section';
export const App = () => {
  return (
    <div
      style={{
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions />
      </Section>
      <Section title="No feedback given">
        <Statistics />
      </Section>
    </div>
  );
};

export default App;
