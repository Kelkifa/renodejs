/** rsf */
import React, { useRef } from 'react';
import Toolbar from '../Toolbar/Toolbar.js';
import $ from 'jquery';

function DocumentFormInput(props) {
    /** Ref */
    const docToolbar = useRef();

    /** Event Handler */
    function clickHandler() {
        $(docToolbar.current).toggleClass('doc__toolbar--hide');
    }

    /** Render */
    const type = props.type;
    var content = (<div>Nothing</div>);
    switch (type) {
        case 'textarea':
            content = (
                <div ps={props.ps} className="doc__form__content__item" onClick={clickHandler}>
                    <label className="item__label">Children Part Content</label>
                    <input hidden name={`sort[${props.CpCount}][]`} type="text" />
                    <textarea className="doc__form__input" name={`children_part_content[${props.CpCount}][]`} rows="5" type="text" />
                    <div className="doc__toolbar doc__toolbar--hide" ref={docToolbar}>
                        <Toolbar ps={props.ps}
                            clickHander={props.clickIconHandler} />
                    </div>
                </div>
            );
            break;
        case 'image':
            content = (
                <div ps={props.ps} className="doc__form__content__item" onClick={clickHandler}>
                    <label className="item__label">Image Link</label>
                    <input hidden name={`sort[${props.CpCount}][]`} type="text" />
                    <input className="doc__form__input" name={`children_part_content[${props.CpCount}][]`} autoComplete="off" type="text" placeholder="Enter Image Link" />
                    <div className="doc__toolbar" ref={docToolbar} >
                        <Toolbar ps={props.ps}
                            clickHander={props.clickIconHandler} />
                    </div>
                </div>
            );
            break;
        case 'title':
            content = (
                <div ps={0} className="doc__form__content__item" onClick={clickHandler}>
                    <label className="item__label">Children Part Title</label>
                    <input className="doc__form__input" name="children_part_title[]" type="text" placeholder="Enter Children Part Title" />
                    <div className="doc__toolbar doc__toolbar--hide" ref={docToolbar}>
                        <Toolbar ps={0}
                            clickHander={props.clickIconHandler}
                            childrenTitle={1}
                        />
                    </div>
                </div>
            );
            break;
        default:
            content = (
                <div>Nothing</div>
            )
            break;
    }
    return (
        <>
            {content}
        </>
    );
}

export default DocumentFormInput;
