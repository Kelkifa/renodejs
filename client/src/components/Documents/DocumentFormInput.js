/** rsf */
import React, { useRef } from 'react';
import Toolbar from '../Toolbar/Toolbar.js';
import $ from 'jquery';

function DocumentFormInput(props) {
    /** Props */
    const { data } = props;
    /** Ref */
    const docToolbar = useRef();

    /** Event Handler */
    function clickHandler() {
        $(docToolbar.current).toggleClass('hide');
    }

    /** Render */
    const type = props.type;
    var content = (<div>Nothing</div>);
    switch (type) {
        case 'textarea':
            content = (
                <div ps={props.ps} className="doc__form__content__item" onClick={clickHandler}>
                    <label className="item__label">Children Part Content</label>
                    <input hidden name={`sort[${props.CpCount}][]`} type="text" defaultValue={0} />
                    <textarea className="doc__form__input"
                        name={`children_part_content[${props.CpCount}][]`} rows="5"
                        type="text"
                        defaultValue={data ? data : ""} />
                    <div className="doc__toolbar hide" ref={docToolbar}>
                        <Toolbar ps={props.ps}
                            clickHandler={props.clickIconHandler} />
                    </div>
                </div>
            );
            break;
        case 'image':
            content = (
                <div ps={props.ps} className="doc__form__content__item" onClick={clickHandler}>
                    <label className="item__label">Image Link</label>
                    <input hidden name={`sort[${props.CpCount}][]`} type="text" defaultValue={1} />
                    <input className="doc__form__input"
                        name={`children_part_content[${props.CpCount}][]`}
                        autoComplete="off" type="text"
                        placeholder="Enter Image Link"
                        defaultValue={data ? data : ""} />
                    <div className="doc__toolbar" ref={docToolbar} >
                        <Toolbar ps={props.ps}
                            clickHandler={props.clickIconHandler} />
                    </div>
                </div>
            );
            break;
        case 'title':
            content = (
                <div ps={0} className="doc__form__content__item" onClick={clickHandler}>
                    <label className="item__label">Children Part Title</label>
                    <input className="doc__form__input"
                        name="children_part_title[]" type="text"
                        placeholder="Enter Children Part Title"
                        defaultValue={data ? data : ""} />
                    <div className="doc__toolbar hide" ref={docToolbar}>
                        <Toolbar ps={0}
                            clickHandler={props.clickIconHandler}
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
