import "./KeyTrain.scss";
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

TrainContainer.propTypes = {
    content: PropTypes.string,
    name: PropTypes.string,
};

TrainContainer.defaultProps = {
    content: "Sau khi nuôi dưỡng một tình yêu đơn phương trong nhiều năm, Naoya Mukai cuối cùng cũng được hẹn hò với người bạn thời thơ ấu của mình, Saki Saki. Tuy nhiên, ngay khi anh ấy cố gắng cam kết với mối quan hệ này, anh ấy nhận được lời thú nhận đột ngột từ Nagisa Minase.Lúc đầu, Naoya cố gắng từ chối cô ấy nhưng nhanh chóng bị khuất phục bởi cảm giác không muốn làm tổn thương Nagisa. Cố gắng tránh phản bội lòng tin của bạn gái dành cho mình, Naoya nghĩ ra một “giải pháp” để khiến cả hai cô gái đều hạnh phúc – hai người. Đương nhiên, Saki phản đối ý kiến ​​này, nhưng qua sự kiên trì của Naoya và Nagisa, cô ấy miễn cưỡng phục tùng.Với điều này, một mối tình tay ba bắt đầu giữa Naoya, bạn gái của anh ta và bạn gái khác của anh ta, khi họ phát triển một mối quan hệ lệch khỏi chuẩn mực xã hội.",
    name: null,
}

function TrainContainer(props) {
    /** Props */
    const { content, name } = props;
    // console.log(content);

    /** State */
    const [contentArr, setContentArr] = useState([]);       //Noi dung van ban nhung duoc cach ra thanh mang boi khoang trang 

    const [wordFlag, setWordFlag] = useState([]);           //Flag kiem tra go dung sai
    const [wordPosition, setWordPosition] = useState(0);    //Vi tri cua chu dang go

    const [inputValue, setInputValue] = useState("");       //Gia tri nguoi dung nhap

    const [beginPostion, setBeginPosition] = useState(0);
    const [index, setIndex] = useState(498);
    const [indexPosition, setIndexPosition] = useState(0);
    /** Ref */
    const contentElm = useRef();

    /** Effect */
    useEffect(() => {
        if (content) {

            var i = index < content.length ? index : content.length
            while (content[i] != " ") i--;
            var copyContentArr = content.substr(0, i).split(" ");
            console.log(copyContentArr);
            setIndex(i);
            setContentArr(copyContentArr);
        }
    }, [content])

    /** Handler function */
    const inputChangeHandler = (e) => {
        setInputValue(e.target.value);
        if (e.target.value.substr(e.target.value.length - 1) == ' ') {
            // console.log(contentArr, wordPosition);
            console.log(indexPosition, index);
            var copyIndexPosition = indexPosition + contentArr[wordPosition].length + 1;
            setIndexPosition(copyIndexPosition);
            if (copyIndexPosition >= index) {
                var i = index + 498 < content.length ? index + 498 : content.length
                while (content[i] != " ") i--;
                var copyContentArr = content.substr(index + 1, i).split(" ");
                setIndex(i);
                setContentArr(copyContentArr);
                setWordPosition(0);
                setInputValue("");
                setWordFlag([]);
                return;
            }
            if (wordFlag[wordPosition] === undefined) {  //kiem tra nguoi dung bam space lien tuc thi cho flag false het
                var copyWordFlag = [...wordFlag];
                copyWordFlag[wordPosition] = false;
                setWordFlag(copyWordFlag);
            }
            // setIndexPosition(indexPosition + contentArr[wordPosition].length + 1);
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
            <div className="TrainContainer__content" ref={contentElm}>
                {contentArr && contentArr.map((word, index) => {
                    var spanClass = "";
                    if (wordFlag[index] === true) {
                        spanClass = "text--green";
                    }
                    else if (wordFlag[index] === false) {
                        spanClass = "text--red";
                    }
                    return (<span key={index + word} className={spanClass}> {word}</span>)
                })}
            </div>
            <input type="text" value={inputValue} className="TrainContainer__input" onChange={inputChangeHandler} />
        </div>
    );
}

export default TrainContainer;