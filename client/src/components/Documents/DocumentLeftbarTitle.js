import React, { useRef } from 'react';
import ToolbarDU from '../Toolbar/ToolbarDU.js';
import $ from 'jquery';
import { Link } from 'react-router-dom';

function DocumentLeftbarTitle(props) {
    /** Ref */
    const iconContainer = useRef();
    /** props */
    const { id, type } = props;

    /** Event Handler */
    function mouseOverHandler() {
        $(iconContainer.current).removeClass('hide');
    }
    function mouseOutHandler() {
        $(iconContainer.current).addClass('hide');
    }

    /** Render */
    return (
        <div className="doc__content__leftbar__item"
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}>
            <Link to={`/document?type=${type}&id=${id}`} style={{ textDecoration: "none", color: "black" }} >
                <div>
                    {props.title}
                </div>
            </Link>
            <div className="doc__content__leftbar__item__toolbar hide" ref={iconContainer}>
                <ToolbarDU id={id} type={type} />
            </div>
        </div>
    );
}

export default DocumentLeftbarTitle;