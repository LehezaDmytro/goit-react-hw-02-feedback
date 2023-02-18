import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className="buttons">
      <button className="btn" type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button className="btn" type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className="btn" type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
