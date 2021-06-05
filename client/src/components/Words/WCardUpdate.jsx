import React from 'react';
import './WCard.scss';
// import PropTypes from 'prop-types';

// WCardUpdate.propTypes = {

// };

function WCardUpdate(props) {
    return (
        <div className="WCard WCard--update">
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
    );
}

export default WCardUpdate;