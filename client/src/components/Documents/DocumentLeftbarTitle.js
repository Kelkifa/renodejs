import React, { useRef } from 'react';
import ToolbarDU from '../Toolbar/ToolbarDU.js';
import $ from 'jquery';

function DocumentLeftbarTitle(props) {
    /** Ref */
    const iconContainer = useRef();
    /** props */
    const id = props.id;
    const type = props.type;

    /** Event Handler */
    function clickHandler() {
        document.location = `?type=${type}&id=${id}`;
    }
    function mouseOverHandler() {
        $(iconContainer.current).removeClass('hide');
    }
    function mouseOutHandler() {
        $(iconContainer.current).addClass('hide');
    }
    function iconClickHandler(clickInfo) {
        document.location = `/document?type=${type}&update=${id}`
    }

    /** Render */
    return (
        <div className="doc__content__leftbar__item"
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}>
            <div onClick={clickHandler}>
                {props.title}
            </div>
            <div className="doc__content__leftbar__item__toolbar hide" ref={iconContainer}>
                <ToolbarDU clickHandler={iconClickHandler} />
            </div>
        </div>
    );
}

export default DocumentLeftbarTitle;