import React from 'react';
function DocumentUpdateForm(props) {

    /** Props */
    const { data } = props;

    console.log(data);
    /** Render */

    return (
        <form action="#" method="POST">
            <div className="doc__form__head">
                <label>Parent Part Title</label>
                <input name="parent_part_title" className="doc__form__input" type="text" placeholder="Update Parent Part Title" />
            </div>

            <div className="doc__form__btn-container doc__form__btn-container--right">
                <button name="type" value={data.type} type="submit" className="btn btn--secondary">Submit</button>
            </div>
        </form>
    );
}

export default DocumentUpdateForm;