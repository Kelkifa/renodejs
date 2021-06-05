import React, { useState, useEffect } from 'react';
import WordContextProvider from '../contexts/WordContextProvider';
import WCardContainer from '../components/Words/WCardContainer';
function Word(props) {
    const [data, setData] = useState([]);

    return (
        <div className="Word">
            <WordContextProvider>
                <WCardContainer />
            </WordContextProvider>
        </div>
    );
}

export default Word;