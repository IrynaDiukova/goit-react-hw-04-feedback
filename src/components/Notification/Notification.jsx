import PropTypes from 'prop-types';

const Notification = ({message}) => {
    return (
        <div>
            <span>{message}</span>
        </div>
    )
}

Notification.propType={
    message: PropTypes.string.isRequired,
}

export default Notification