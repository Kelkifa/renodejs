import '../components/customScss/tests.scss';
import '../components/Doc/doc.scss';
import React from 'react';
import ErrorAlert from '../components/Alerts/ErrorAlert.jsx';

function Test(props) {
    return (
        <div>
            <ErrorAlert />
        </div>
    );
}

export default Test;