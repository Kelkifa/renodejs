import React, { useRef } from 'react';
import ToolbarDU from '../Toolbar/ToolbarDU.js';
import $ from 'jquery';
import { Link } from 'react-router-dom';

function DocumentLeftbarTitle(props) {
    /** Ref */
    const iconContainer = useRef();
    const formDeleteRef = useRef();
    /** props */
    const { id, type } = props;

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
        console.log(clickInfo);
        if (clickInfo === 'update') {
            document.location = `/document?type=${type}&update=${id}`;
            return;
        }
        if (clickInfo === 'delete') {
            $(formDeleteRef.current).submit();
            return;
        }
    }

    /** Render */
    return (
        <Link to={`/document?type=${type}&id=${id}`} style={{ textDecoration: "none", color: "black" }} >
            <div className="doc__content__leftbar__item"
                onMouseOver={mouseOverHandler}
                onMouseOut={mouseOutHandler}>
                <div>
                    {props.title}
                </div>
                <div className="doc__content__leftbar__item__toolbar hide" ref={iconContainer}>
                    <form method="POST" action={`/api/document/${id}/delete?_method=DELETE`} ref={formDeleteRef}></form>
                    <ToolbarDU clickHandler={iconClickHandler} />
                </div>
            </div>
        </Link>
    );
}

export default DocumentLeftbarTitle;