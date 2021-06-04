import '../components/customScss/tests.scss';
import React from 'react';
import ErrorAlert from '../components/Alerts/ErrorAlert.jsx';

function Test(props) {
    return (
        <div className='test'>
            <video className="BgVideo" src="/animeBackground.mp4" autoPlay loop muted ></video>
        </div>
    );
}

export default Test;