import DocumentChildrenContent from './DocumentChildrenContent.js';
import React, { useState } from 'react';

function DocumentCreateForm(props) {
    /** State */
    const [CpCount, setCpCount] = useState([0, 1])

    /** Event Handler */
    function parentPartIconHandler(info, ps, type) {
        if (info === 'sub') {
            var copyCpCount = [...CpCount]
            copyCpCount.splice(ps, 1);
            setCpCount(copyCpCount);
            return;
        }
        //info = addText

        var copyCpCount = [...CpCount]
        copyCpCount.splice(ps + 1, 0, Math.max(...CpCount) + 1);
        setCpCount(copyCpCount);
        console.log(CpCount);
        return;

    }

    /** Render */
    const childrenParts = CpCount.map((value, index) => {
        return (
            <DocumentChildrenContent key={value} CpCount={index} parentPartIconHandler={parentPartIconHandler} />
        );
    });
    console.log(props.type);
    return (
        <form method="POST" action="/api/document/create" className="doc__form">
            <div className="doc__form__head">
                <label className="item__label">Parent Part Title</label>
                <input name="parent_part_title" className="doc__form__input" type="text" placeholder="Enter Parent Part Title" autoComplete="off" />
            </div>
            {childrenParts}
            <div className="doc__form__btn-container doc__form__btn-container--right">
                <button name="type" value={props.type} type="submit" className="btn btn--secondary">Submit</button>
            </div>
        </form>
    )
}

export default DocumentCreateForm;