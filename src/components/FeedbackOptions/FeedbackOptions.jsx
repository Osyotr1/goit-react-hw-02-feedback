const FeedbackOptions = ({ options, onButtonClick }) => {
    return(
    <div>
      {options.map(option => (
        <button type="button" key={option} onClick={() => onButtonClick(option)}>
          {option}
        </button>
      ))}
    </div>
  )};

  export default FeedbackOptions;