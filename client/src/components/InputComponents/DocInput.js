import { useRef } from 'react';
import './input.scss';
import PropTypes from 'prop-types';
import Toolbar from '../Toolbar/Toolbar.js';
import $ from 'jquery';

DocInput.propTypes = {
    label: PropTypes.string.isRequired,
    onTextChangeHandler: PropTypes.func,
    type: PropTypes.string,         // text or textarea
    onIconClick: PropTypes.func,
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    position: PropTypes.number,
    removeIcon: PropTypes.array, //[1,2,3]
};
DocInput.defaultProps = {
    type: 'text',
    onTextChangeHandler: null,
    onIconClick: null,
    name: null,
    defaultValue: null,
    position: 0,
    removeIcon: [0],
}

function DocInput(props) {
    /** Props */
    const { onIconClick, type, label, name, defaultValue, position, removeIcon, onTextChangeHandler } = props;
    // console.log("Default value: ");
    // console.log(defaultValue)
    /** Ref */
    const iconContainer = useRef();
    /** Event Handler */
    function clickHandler(clickInfo) {      //truyền clickInfo lên component cha
        if (onIconClick) {
            onIconClick(clickInfo, position);
        }
    }
    function onMouseOverHandler() {
        $(iconContainer.current).removeClass('hide');
    }
    function onMouseOutHandler() {
        $(iconContainer.current).addClass('hide');
    }
    function onChangeHandler(e) {
        if (onTextChangeHandler)
            onTextChangeHandler(type, position, e.target.value);
    }
    /** Render */
    const inputType = (type === 'textarea') ?
        (<textarea name={name} className="CUinput__input CUinput__input--textarea" rows="7" type="text" defaultValue={defaultValue} onChange={onChangeHandler} />)
        : (<input name={name} className="CUinput__input CUinput__input--input" type="text" defaultValue={defaultValue} onChange={onChangeHandler} />);

    return (
        <>
            <div className="CUinput" onMouseOver={onMouseOverHandler}
                onMouseOut={onMouseOutHandler}>
                <div className="CUinput__content">
                    <label className="CUinput__label">{label}</label>
                    {inputType}
                </div>
                {removeIcon.length === 3 ? "" :
                    <div className="CUinput__toolbar hide" ref={iconContainer}>
                        <Toolbar onIconClick={clickHandler} removeIcon={removeIcon} />
                    </div>
                }

            </div>
        </>
    );
}

export default DocInput;