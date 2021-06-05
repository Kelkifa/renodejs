import React, { createContext, useState, useEffect } from 'react';
import wordApi from '../api/wordApi';

export const WordContext = createContext();

function WordContextProvider({ children }) {
    const [words, setWords] = useState([]);

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
    }, []);

    return (
        <WordContext.Provider value={words}>
            {children}
        </WordContext.Provider>
    );
}

export default WordContextProvider;