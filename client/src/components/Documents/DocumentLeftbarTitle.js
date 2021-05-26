import React from 'react';

function DocumentLeftbarTitle(props) {

    /** Event Handler */
    function clickHandler() {
        document.location = `?type=${props.type}&id=${props.id}`;
    }

    /** Render */
    return (
        <div className="doc__content__leftbar__item" onClick={clickHandler}>
            {props.title}
        </div>
    );
}

export default DocumentLeftbarTitle;