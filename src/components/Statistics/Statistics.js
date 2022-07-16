import PropTypes from 'prop-types';
import s from './Statistics.module.css';



function Section({ title, children }) {
    return (
  <ul className={s.statistics__list}>
    <li>
      <p className={s.statistics__text}>Good: {good}</p>
    </li>
    <li>
      <p className={s.statistics__text}>Neutral: {neutral}</p>
    </li>
    <li>
      <p className={s.statistics__text}>Bad: {bad}</p>
    </li>
    <li>
      <p className={s.statistics__text}>total: {total}</p>
    </li>
    <li>
      <p className={s.statistics__text}>
        Positive feedback: {positiveFeedback}%
      </p>
    </li>
  </ul>)
}
