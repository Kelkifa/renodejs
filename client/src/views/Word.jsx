import React, { useState, useEffect } from 'react';
import wordApi from '../api/wordApi';

function Word(props) {

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const response = await wordApi.getAll({});
                console.log(response);
            } catch (error) {
                console.log(error)
            }
        }
        fetchWords();
    }, [])
    return (
        <div className="Word">
            word hello
        </div>
    );
}

export default Word;