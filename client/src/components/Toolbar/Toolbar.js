import './Toolbar.scss';
import React from 'react';

import { FaRegPlusSquare } from 'react-icons/fa';
import { BsCardImage } from 'react-icons/bs';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
import PropTypes from 'prop-types';

Toolbar.propTypes = {
    onIconClick: PropTypes.func,
    removeIcon: PropTypes.array,
}
Toolbar.defaultProps = {
    onIconClick: null,
    removeIcon: [],
}

function Toolbar(props) {
    /** Props */
    const { onIconClick, removeIcon } = props;
    /** Event Handler */
    function clickHandler(clickInfo) {
        if (onIconClick)
            onIconClick(clickInfo);
    }
    /** Render */
    return (
        <div className='toolbar'>
            <button className={removeIcon.includes(1) ? "toolbar__item--btn hide" : "toolbar__item--btn"}
                onClick={() => { clickHandler('addT') }} >
                <FaRegPlusSquare size="20px" color="rgb(32, 121, 218)" />
            </button>
            <button className={removeIcon.includes(2) ? "toolbar__item--btn hide" : "toolbar__item--btn"}
                onClick={() => { clickHandler('addI') }} >
                <BsCardImage size="20px" color="rgb(32,121, 218)"></BsCardImage>
            </button>
            <button className={removeIcon.includes(3) ? "toolbar__item--btn hide" : "toolbar__item--btn"}
                onClick={() => { clickHandler('sub') }} >
                <IoMdRemoveCircleOutline size="20px" color="rgb(32, 121, 218)" />
            </button>
        </div>
    )
}

export default Toolbar;