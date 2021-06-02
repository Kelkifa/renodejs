import React from 'react';
import PropTypes from 'prop-types';
import './Alert.scss';
import { MdError } from "react-icons/md";

ErrorAlert.propTypes = {
    errorTitle: PropTypes.string,
    content: PropTypes.string,
    actionContent: PropTypes.string,
}
ErrorAlert.defaultProps = {
    errorTitle: 'Error!',
    content: 'Please enter a valid value in all the required fields before proceeding. If you need any help just place the mouse pointer above info icon next to the form field.',
    actionContent: "Once you have all the details, click on the 'Next' button to continue.",
}

function ErrorAlert(props) {
    const { content, actionContent, errorTitle, children } = props

    return (
        <div className='alert__background'>
            <div className="alert__container">
                <div className="alert__container__background alert__container__background--error">
                    <h1 className="alert__container__title">
                        <MdError color="#bb5250" className="alert__container__title__icon" />
                        <span className="alert__container__title__content alert__container__title__content--error">{errorTitle}</span>
                    </h1>
                    <p className="alert__container__content">{content}</p>
                    <div className="alert__container__content alert__container__content--action">{children ? children : actionContent}</div>
                </div>
            </div>
        </div>
    );
}

export default ErrorAlert;