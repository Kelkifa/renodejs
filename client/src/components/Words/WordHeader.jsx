import './WordHeader.scss';
import { FaRegFileWord } from 'react-icons/fa';
import { useState } from 'react';
import wordApi from '../../api/wordApi';
// import PropTypes from 'prop-types';

// WordHeader.propTypes = {

// };

function WordHeader(props) {
    const [toggleCreateCard, setToggleCreateCard] = useState(false); //false: hide, true: show

    const [createCardData, setCreateCardData] = useState({
        word: "",
        topic: "",
        mean: "",
        description: "",
        image: "",
        description: "",
    })

    const ClickCreateBtnHandler = () => {           //toggle hide and show create card
        setToggleCreateCard(!toggleCreateCard);
    }
    const createCardInputChangeHandler = (e) => {   // store date from input when change
        const copyCreateCardData = { ...createCardData };
        copyCreateCardData[e.target.name] = e.target.value;

        setCreateCardData(copyCreateCardData);
    }
    const submitCreateCardHandler = async () => {       // when submit button is clicked, send data to server
        try {
            const response = await wordApi.store(createCardData);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="WHeader">
            <div className="WHeader__create">

                <FaRegFileWord className="WHeader__create__icon" onClick={ClickCreateBtnHandler} />
                <h3 className="WHeader__create__CreateTitle" onClick={ClickCreateBtnHandler}>New Word</h3>

                {toggleCreateCard ?
                    <div className="WHeader__create__card WCard__update">
                        <div className="WCard__FormHeader">
                            <div className="WCard__FormHeader__left">
                                <label >Word</label>
                                <input name="word" className="WCard__input" type="text" onChange={createCardInputChangeHandler} />
                            </div>
                            <div className="WCard__FormHeader__right">
                                <label>Topic</label>
                                <input name="topic" className="WCard__input" type="text" onChange={createCardInputChangeHandler} />
                            </div>
                        </div>
                        <label >Mean</label>
                        <input name="mean" className="WCard__input" type="text" onChange={createCardInputChangeHandler} />
                        <label >Image</label>
                        <input name="image" className="WCard__input" type="text" onChange={createCardInputChangeHandler} />
                        <label>Description</label>
                        <textarea name="description" className="WCard__input WCard__input--textarea" onChange={createCardInputChangeHandler} type="text" />
                        <div className="WCard__btnContainer WCard__btnContainer--update">
                            <button className="btn btn--secondary btn--WCardUpdate" onClick={submitCreateCardHandler}>Submit</button>
                        </div>
                    </div> :
                    ""
                }

            </div>

        </div>
    );
}

export default WordHeader;