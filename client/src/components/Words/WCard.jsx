import './WCard.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaWrench, FaTrash } from 'react-icons/fa';
import wordApi from '../../api/wordApi';

WCard.propTypes = {
    word: PropTypes.object,
    DUshow: PropTypes.bool,
    reloadSignal: PropTypes.func,
}
WCard.defaultProps = {
    word: {
        _id: "",
        topic: "",
        image: "",
        mean: "",
        description: "",
        word: "",
    },
    DUshow: false,
    reloadSignal: null,
}

function WCard(props) {
    const { word, DUshow, reloadSignal } = props;

    // const { reloadSignal } = useContext(WordContext);

    const [flipDisplay, setFlipDisplay] = useState(true);     //Xoay    true: default, false: xoay.
    const [faceDisplay, setFaceDisplay] = useState(true);   // true: front, false: back
    const [showUpdate, setShowUpdate] = useState(false);   //false: hide effect update card, true: show effect update card
    const [updateData, setUpdateData] = useState(word);

    const flipClickHandler = (e) => {
        e.target.disabled = true;
        setFlipDisplay(!flipDisplay);
        setTimeout(() => {
            setFaceDisplay(!faceDisplay);
            e.target.disabled = false;
        }, 150)
    }

    const updateClickHandler = () => {      // function controll show hide effect of update card
        setShowUpdate(!showUpdate);
    }
    const changeInputValueHandler = (e) => {
        const copyUpdateData = { ...updateData };
        copyUpdateData[e.target.name] = e.target.value;
        setUpdateData(copyUpdateData);
    }
    const submitUpdateHandler = async () => {      // send update data to server
        try {
            const response = await wordApi.updateWord(updateData, word._id);
            if (response.success) {
                if (reloadSignal)
                    reloadSignal();
            }
        } catch (error) {
            console.log(error);
        }
    }
    const deleteClickHandler = async () => {       //delete a word
        try {
            const response = await wordApi.deleteWord(word._id);
            if (response.success) {
                reloadSignal();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={showUpdate ? "SUWCard" : "SUWCard SUWCard--move"}>
            <div className="WCard scroll--custom scroll--blue">
                {faceDisplay ?
                    <div className={flipDisplay ? "WCard__FrontCard" : "WCard__FrontCard flip"}>
                        <img className="WCard__img" src={word.image} alt="Can't load" />
                        <h3 className="WCard__title">{word.word}</h3>
                        <p className="WCard__text scroll--custom scroll--custom--blue">{word.description}</p>
                        <div className="WCard__btnContainer">
                            {DUshow === true ?
                                <>
                                    <FaWrench className="WCard__icon" onClick={updateClickHandler} />
                                    <FaTrash className="WCard__icon" onClick={deleteClickHandler} />
                                </> :
                                ""
                            }

                            <button className="btn btn--secondary WCard__btn" onClick={flipClickHandler}>Flip</button>
                        </div>
                    </div> :
                    <div className={flipDisplay ? "WCard__BackCard flip " : "WCard__BackCard"}>
                        <p className="WCard__text WCard__text--back">
                            {word.mean}
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
                        <input name="word" className="WCard__input" type="text" defaultValue={word.word} onChange={changeInputValueHandler} />
                    </div>
                    <div className="WCard__FormHeader__right">
                        <label>Topic</label>
                        <input name="topic" className="WCard__input" type="text" defaultValue={word.topic} onChange={changeInputValueHandler} />
                    </div>
                </div>

                <label >Mean</label>
                <input name="mean" className="WCard__input" type="text" defaultValue={word.mean} onChange={changeInputValueHandler} />
                <label >Image</label>
                <input name="image" className="WCard__input" type="text" defaultValue={word.image} onChange={changeInputValueHandler} />
                <label >Description</label>
                <textarea name="description" className="WCard__input WCard__input--textarea" type="text" defaultValue={word.description} onChange={changeInputValueHandler} />
                <div className="WCard__btnContainer WCard__btnContainer--update">
                    <button className="btn btn--secondary btn--WCardUpdate" onClick={submitUpdateHandler}>Submit</button>
                </div>
            </div>

        </div>
    );
}

export default WCard;