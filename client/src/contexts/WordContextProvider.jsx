import React, { createContext, useState, useEffect } from 'react';
import wordApi from '../api/wordApi';

export const WordContext = createContext();

function WordContextProvider({ children }) {
    const [words, setWords] = useState([]);                 //store data of words
    const [toggleReload, setToggleReload] = useState(true); // if toggleReload change => reload

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const response = await wordApi.getAll({});
                setWords(response.words);
            } catch (error) {
                console.log(error);
            }
        }
        fetchWords();
    }, [toggleReload]);

    const updateWords = (words) => {
        setWords(words);
    }
    const reloadSignal = () => {
        setToggleReload(!toggleReload);
    }

    return (
        <WordContext.Provider value={{ words, updateWords, reloadSignal }}>
            {children}
        </WordContext.Provider>
    );
}

export default WordContextProvider;