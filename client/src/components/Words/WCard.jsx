import './WCard.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

WCard.propTypes = {
    imgLink: PropTypes.string,
    frontContent: PropTypes.string,
    backContent: PropTypes.string,
}
WCard.defaultProps = {
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSILssnCAJXtpBhS2Re9WrUy0s4s3gucoi8g&usqp=CAU",
    frontContent: "Đây là nội ung mặt trước.",
    backContent: "Đây là nội dung mặt sau.",
}

function WCard(props) {
    const { imgLink, frontContent, backContent } = props;

    const [flipDisplay, setFlipDisplay] = useState(true);     //Xoay    true: default, false: xoay.
    const [faceDisplay, setFaceDisplay] = useState(true);   // true: front, false: back

    const flipClickHandler = () => {
        setFlipDisplay(!flipDisplay);
        setTimeout(() => {
            setFaceDisplay(!faceDisplay);
        }, 150)
    }

    return (
        <div className="WCard scroll--custom scroll--blue">
            {faceDisplay ?
                <div className={flipDisplay ? "WCard__FrontCard" : "WCard__FrontCard flip"}>
                    <img className="WCard__img" src={imgLink} alt="Can't load" />
                    <p className="WCard__text scroll--custom scroll--custom--blue">{frontContent}</p>
                    <div className="WCard__btnContainer">
                        <button className="btn btn--secondary WCard__btn" onClick={flipClickHandler}>Flip</button>
                    </div>
                </div> :
                <div className={flipDisplay ? "WCard__BackCard flip " : "WCard__BackCard"}>
                    <p className="WCard__text WCard__text--back">
                        {backContent}
                    </p>
                    <div className="WCard__btnContainer">
                        <button className="btn btn--secondary WCard__btn" onClick={flipClickHandler} >Flip</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default WCard;