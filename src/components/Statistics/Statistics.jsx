import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics  = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
        <ul className={style.statList}>
        <li className={style.statItem}>Good:<span className={style.statText}> {good}</span></li>
        <li className={style.statItem}>Neutral:<span className={style.statText}> {neutral}</span></li>
        <li className={style.statItem}>Bad:<span className={style.statText}> {bad}</span></li>
        <li className={style.statItem}>Total:<span className={style.statText}> {total}</span></li>
        <li className={style.statItem}>Positive feedback:<span className={style.statText}> {positivePercentage}%</span></li>
        </ul>
        </>
    )
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };