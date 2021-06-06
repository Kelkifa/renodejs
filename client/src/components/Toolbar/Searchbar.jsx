import './Searchbar.scss';
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

Searchbar.propTypes = {
    getValueHandler: PropTypes.func,
};
Searchbar.defaultProps = {
    getValueHandler: null,
}

function Searchbar(props) {
    const { getValueHandler } = props;

    const [toggleEffect, setToggleEffect] = useState(true);  // true: close, false open

    const inputRef = useRef();

    const mouseOverHandler = () => {     //Khi di chuột lên searchbar thì mở searchbar ra
        if (toggleEffect)
            setToggleEffect(false);
    }
    const mouseOutHandler = () => {     //Khi chuột ra khỏi searchbar nếu input không có giá trị thì sẽ đóng lại
        if (!inputRef.current.value) {
            setToggleEffect(true);
        }
    }
    const submitHandler = () => {         //Send input data to parent component
        if (inputRef.current.value && getValueHandler) {
            getValueHandler(inputRef.current.value);
        }
    }

    return (
        <div className={toggleEffect ? "searchbar open" : "searchbar"} onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler} >
            <input type="searchbar" className="searchbar__input" ref={inputRef} />
            <span className="searchbar__button" onClick={submitHandler}>
                <div className="searchbar__iconI"></div>
                <div className="searchbar__iconII"></div>
                <div className="searchbar__iconIII"></div>
            </span>
        </div>
    );
}

export default Searchbar;
