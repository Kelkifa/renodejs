import '../components/customScss/tests.scss';
import React, { useState, useEffect } from 'react';
// import ErrorAlert from '../components/Alerts/ErrorAlert.jsx';
// import WCard from '../components/Words/WCard.jsx'
// import Searchbar from '../components/Toolbar/Searchbar';
import KeyTrain from '../components/KeyTrain/TrainContainer.jsx';

import keytrainApi from '../api/keytrainApi';

function Test(props) {
    const [content, setContent] = useState({});
    const [success, setSuccess] = useState(false);

    return (
        <KeyTrain>
        </KeyTrain>
    );
}

export default Test;