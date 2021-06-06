import React from 'react';
import WordContextProvider from '../contexts/WordContextProvider';
import WCardContainer from '../components/Words/WCardContainer';
import WordHeader from '../components/Words/WordHeader';

function Word(props) {
    return (
        <div className="Word">
            <WordContextProvider>
                <WordHeader />
                <WCardContainer />
            </WordContextProvider>
        </div>
    );
}

export default Word;