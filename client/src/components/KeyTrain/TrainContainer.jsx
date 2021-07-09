import "./KeyTrain.scss";
import { useState } from 'react';
import PropTypes from 'prop-types';

TrainContainer.propTypes = {
    content: PropTypes.string,
    name: PropTypes.string,
};

TrainContainer.defaultProps = {
    content: null,
    name: null,
}

function TrainContainer(props) {
    /** Props */
    const { content, name } = props;

    /** State */
    const [wordFlag, setWordFlag] = useState([]);
    const [wordPosition, setWordPosition] = useState(0);

    const [inputValue, setInputValue] = useState("");


    const contentArr = content && content.split(" ");  //Cach chuoi content thanh mang tu cac khoang trang

    /** Handler function */
    const inputChangeHandler = (e) => {
        setInputValue(e.target.value);
        if (e.target.value.substr(e.target.value.length - 1) == ' ') {
            if (wordFlag[wordPosition] == undefined) {
                var copyWordFlag = [...wordFlag];
                copyWordFlag[wordPosition] = false;
                setWordFlag(copyWordFlag);
            }
            setWordPosition(wordPosition + 1);
            setInputValue("");
            return;
        }
        var copyWordFlag = [...wordFlag];
        if (e.target.value == contentArr[wordPosition]) {
            copyWordFlag[wordPosition] = true;
            setWordFlag(copyWordFlag);
        }
        else {
            if (e.target.value.length >= contentArr[wordPosition].length) {
                copyWordFlag[wordPosition] = false;
                setWordFlag(copyWordFlag);
            }
        }
    }

    return (
        <div className="TrainContainer">
            <div className="TrainContainer__content">
                {contentArr && contentArr.map((word, index) => {
                    var spanClass = "";
                    if (wordFlag[index] === true) {
                        spanClass = "text--green";
                    }
                    else if (wordFlag[index] === false) {
                        spanClass = "text--red";
                    }
                    return (<span key={word + index} className={spanClass}> {word}</span>)
                })}
            </div>
            <input type="text" value={inputValue} className="TrainContainer__input" onChange={inputChangeHandler} />
        </div>
    );
}

export default TrainContainer;