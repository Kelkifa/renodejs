import DocumentChildrenContent from './DocumentChildrenContent.js';
import React from 'react';

function DocumentCreateForm(props) {
    const CpCount = 0;

    return (
        <form action="POST" className="doc__form">
            <div className="doc__form__head">
                <label className="item__label">Parent Part Title</label>
                <input name="parent_part_title" className="doc__form__input" type="text" placeholder="Enter Parent Part Title" autoComplete="off" />
            </div>
            <DocumentChildrenContent CpCount={CpCount} />
            {/* <DocumentChildrenContent CpCount={CpCount} /> */}
            <div className="doc__form__btn-container doc__form__btn-container--right">
                <button className="btn btn--secondary">Submit</button>
            </div>
        </form>
    )
}

export default DocumentCreateForm;