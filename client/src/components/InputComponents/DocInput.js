import { useRef, useEffect } from 'react';
import './input.scss';
import PropTypes from 'prop-types';
import Toolbar from '../Toolbar/Toolbar.js';
import $ from 'jquery';

DocInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,         // text or textarea
    onIconClick: PropTypes.func,
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    position: PropTypes.number,
    removeIcon: PropTypes.array, //[1,2,3]

    submitSignal: PropTypes.bool,       // Có tín hiệu submit từ trên xuống
    onSubmitHandler: PropTypes.func,
};
DocInput.defaultProps = {
    type: 'text',
    onIconClick: null,
    name: null,
    defaultValue: null,
    position: 0,
    removeIcon: [0],

    submitSignal: false,
    onSubmitHandler: null,
}

function DocInput(props) {
    /** Props */
    const { onIconClick, type, label, name, defaultValue, position, removeIcon, submitSignal, onSubmitHandler } = props;

    /** Ref */
    const iconContainer = useRef();
    const textareaRef = useRef();
    const inputRef = useRef();

    /** Effect */
    useEffect(() => {
        if (submitSignal === true) {
            if (onSubmitHandler) {
                const value = textareaRef.current ? textareaRef.current.value : inputRef.current.value;
                onSubmitHandler(position, value);
            }

        }
    }, [submitSignal])

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
        (<textarea name={name} className="CUinput__input CUinput__input--textarea" rows="7" type="text" defaultValue={defaultValue} ref={textareaRef} />)
        : (<input name={name} className="CUinput__input CUinput__input--input" type="text" defaultValue={defaultValue} ref={inputRef} />);

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