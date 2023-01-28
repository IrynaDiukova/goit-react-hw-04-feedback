import {useState} from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  
  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = (button) => {
    switch (button) {
      case 'good':
        setGood(prState => prState + 1);
        break;
      case 'neutral':
        setNeutral(prState => prState + 1);
        break;
      case 'bad':
        setBad(prState => prState + 1);
        break;
      default:
        console.log(`Error in type ${button}`);
    }
  };

  const countTotalFeedback = () => {
  return [good, neutral, bad].reduce((total, val) => total + val, 0);
};

  const countPositiveFeedbackPercentage = () => {
    return Number.parseInt(good / (good + neutral + bad) * 100);
  };

    const totalFeedback = countTotalFeedback();
  
    
    const positivePercentage = countPositiveFeedbackPercentage();

      return(
      <>
          <Section title='Please leave feedback'>
          <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}/>
          </Section>
          <Section title='Statistics'>
              {totalFeedback ?
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={totalFeedback}
                  positivePercentage={positivePercentage}/> :
                <Notification message='There is no feedback'/>}
            </Section>
      </>
      )   
};

export default App;