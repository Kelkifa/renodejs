import React from 'react';
import DocInput from '../InputComponents/DocInput';
import PropTypes from 'prop-types';


CUForm.propTypes = {
    contentPart: PropTypes.number,
    data: PropTypes.array,
};
CUForm.defaultProps = {
    contentPart: 1,
    data: [],
}

function CUForm(props) {
    return (
        <form action="#" className="docForm">
            <DocInput label="Parent Part Title" type="input" />
        </form>
    );
}

export default CUForm;