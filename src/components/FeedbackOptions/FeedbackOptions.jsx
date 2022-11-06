import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onButtonClick }) => {
    return(
    <div>
      {options.map(option => (
        <button className={style.button} type="button" key={option} onClick={() => onButtonClick(option)}>
          {option}
        </button>
      ))}
    </div>
  )};

  export default FeedbackOptions;

  FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onBtnClick: PropTypes.func.isRequired,
  };