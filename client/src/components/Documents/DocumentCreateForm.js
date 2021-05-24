import './DocumentCreateForm.scss';
import React from 'react';

function DocumentCreateForm() {

    return (
        <form action="#" method="POST" name="create-form" class="create-form">
            <div className="doc-cre__fm-pp">
                <label>
                    Parent Part Title
                </label>
                <input className="create-form__input" name="parent_part_title" type="text" placeholder="Enter Parent Part Title" />
            </div>
            <div className="doc-cre__cp">
                <div className="doc-cre__cp__item">
                    <label htmlFor="">Chilren Part Title</label>
                    <input type="text" name="children_part_title[]" autocomplete="off" placeholder="Enter Children Part Title" />
                </div>
                <div className="doc-cre__cp__item">
                    <label htmlFor="">Chilren Part Content</label>
                    <textarea className="create-form__input" type="text" name="children_part_content[0][]" autocomplete="off" placeholder="Enter Children Part Title"></textarea>
                </div>

            </div>
        </form>
    )
}


export default DocumentCreateForm;