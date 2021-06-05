import './WCard.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaWrench } from 'react-icons/fa';

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

    const [showUpdate, setShowUpdate] = useState(false);   //false: hide effect update card, true: show effect update card

    const flipClickHandler = (e) => {
        e.target.disabled = true;
        setFlipDisplay(!flipDisplay);
        setTimeout(() => {
            setFaceDisplay(!faceDisplay);
            e.target.disabled = false;
        }, 150)
    }

    const updateClickHandler = () => {
        setShowUpdate(!showUpdate);
    }

    return (
        <div className={showUpdate ? "SUWCard" : "SUWCard SUWCard--move"}>
            <div className="WCard scroll--custom scroll--blue">
                {faceDisplay ?
                    <div className={flipDisplay ? "WCard__FrontCard" : "WCard__FrontCard flip"}>
                        <img className="WCard__img" src={imgLink} alt="Can't load" />
                        <p className="WCard__text scroll--custom scroll--custom--blue">{frontContent}</p>
                        <div className="WCard__btnContainer">
                            <FaWrench className="WCard__UpdateIcon" onClick={updateClickHandler} />
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


            <div className={showUpdate ? "WCard WCard--update WCard__update--move hide " : "hide WCard WCard--update"}>

                <div className="WCard__FormHeader">
                    <div className="WCard__FormHeader__left">
                        <label >Word</label>
                        <input className="WCard__input" type="text" />
                    </div>
                    <div className="WCard__FormHeader__right">
                        <label>Topic</label>
                        <input className="WCard__input" type="text" />
                    </div>
                </div>

                <label >Mean</label>
                <input className="WCard__input" type="text" />
                <label >Image</label>
                <input className="WCard__input" type="text" />
                <label >Description</label>
                <textarea className="WCard__input WCard__input--textarea" type="text" />
                <div className="WCard__btnContainer WCard__btnContainer--update">
                    <button className="btn btn--secondary btn--WCardUpdate">Submit</button>
                </div>
            </div>

        </div>
    );
}

export default WCard;