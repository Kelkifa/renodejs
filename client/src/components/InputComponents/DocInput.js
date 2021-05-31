import { useRef } from 'react';
import './input.scss';
import PropTypes from 'prop-types';
import Toolbar from '../Toolbar/Toolbar.js';
import $ from 'jquery';

DocInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    onIconClick: PropTypes.func,
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    position: PropTypes.number,
    removeIcon: PropTypes.array, //[1,2,3]
};
DocInput.defaultProps = {
    type: 'text',
    onIconClick: null,
    name: null,
    defaultValue: null,
    position: 0,
    removeIcon: [0],
}

function DocInput(props) {
    /** Props */
    const { onIconClick, type, label, name, defaultValue, position, removeIcon } = props;
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
    /** Render */
    const inputType = (type === 'textarea') ?
        (<textarea name={name} className="CUinput__input CUinput__input--textarea" rows="7" type="text" defaultValue={defaultValue} />)
        : (<input name={name} className="CUinput__input CUinput__input--input" type="text" defaultValue={defaultValue} />);

    return (
        <>
            <div className="CUinput" onMouseOver={onMouseOverHandler}
                onMouseOut={onMouseOutHandler}>
                <div className="CUinput__content">
                    <label className="CUinput__label">{label}</label>
                    {inputType}
                </div>
                <div className="CUinput__toolbar hide" ref={iconContainer}>
                    <Toolbar onIconClick={clickHandler} removeIcon={removeIcon} />
                </div>
            </div>
        </>
    );
}

export default DocInput;