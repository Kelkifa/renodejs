import React, { createContext, useState, useEffect, useContext } from 'react';
import wordApi from '../api/wordApi';
import WCardContainer from '../components/Words/WCardContainer';
import WordHeader from '../components/Words/WordHeader';
import { AuthContext } from '../contexts/AuthContextProvider';

export const wordContext = createContext();

function Word(props) {
    const [words, setWords] = useState([]);         //store data of words
    const [toggleReload, setToggleReload] = useState(true);     // if toggleReload change => reload

    /** Auth Context */
    const { authRefeshSignal } = useContext(AuthContext);

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const response = await wordApi.getAll({});
                setWords(response.words);
            } catch (error) {
                console.log(error.message);
                setWords([]);
            }
        }

        fetchWords();
    }, [toggleReload, authRefeshSignal]);

    const reloadSignal = () => {
        setToggleReload(!toggleReload);
    }

    return (
        <div className="Word">
            <wordContext.Provider value={{ words, reloadSignal }}>
                <WordHeader />
                <WCardContainer />
            </wordContext.Provider>
        </div>
    );
}

export default Word;