import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'


const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={css.feedback}>
            {options.map(option => (
                <button 
                    className={css.feedback__btn}
                    key={option}
                    type="button" 
                    onClick={() => onLeaveFeedback(option)}>
                    {option}
                </button>
            ))}
        </div>    
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;