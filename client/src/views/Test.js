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

    useEffect(() => {
        async function getContent() {
            try {
                const getContent = await keytrainApi.getContent("story");
                setContent(getContent.content);
                setSuccess(getContent.success);
            } catch (error) {
                console.log(error);
            }
        }
        getContent();
    }, [])


    return (
        <div className="test">
            <KeyTrain content={content.content} name={content.name}></KeyTrain>
        </div>
    );
}

export default Test;


/* <video className="BgVideo" src="/animeBackground.mp4" autoPlay loop muted ></video> */

// const data = ["top", "15", "ban", "nhac", "nghe", "mai", "khong", "chan"];
//     const [count, setCount] = useState(0);
//     const [flag, setFlag] = useState(false);
//     const [inputValue, setInputValue] = useState("");

// const changeHandler = (e) => {
//     if (e.target.value.indexOf(" ") === -1) {
//         setInputValue(e.target.value);
//     }
//     if (e.key === " ") {
//         setCount(count + 1);
//         setFlag(false);
//         setInputValue("");
//         console.log(`""${inputValue}""`)
//         return;
//     }
//     if (e.target.value === data[count]) {
//         setFlag(true);
//     }
//     else {
//         setFlag(false);
//     }

// }

{/* <div className='test'>
            <div>
                {data.map(value => (" " + value))}
            </div>
            <input style={{ width: "100%" }} onChange={changeHandler} onKeyPress={changeHandler} type="text" value={inputValue} />
            <div>{flag ? "OK" : "FAIL"}</div>
        </div> */}