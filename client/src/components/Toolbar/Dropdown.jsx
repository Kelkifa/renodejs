import React from 'react';
import './Dropdown.scss';

import PropTypes from 'prop-types';

Dropdown.propTypes = {
    getValueHandler: PropTypes.func,
    selectData: PropTypes.array,            // mảng chứa các object [ { value, text },... ]     value: giá trị của option, text: nội dung hiển thị
};
Dropdown.defaultProps = {
    getValueHandler: null,
    selectData: [],
}

function Dropdown(props) {
    const { getValueHandler, selectData } = props;

    const clickHandler = (e) => {
        if (getValueHandler) {
            console.log(e.target.value);
            getValueHandler(e.target.value);
        }
    }

    return (
        <>
            {
                selectData.length ?
                    <select defaultValue={selectData[0].value} className="dropdown" onChange={clickHandler}>
                        {selectData.map(value => (<option key={value.value} className="dropdown__item" value={value.value}>{value.text}</option>))}
                    </select>
                    :
                    ""
            }
        </>

    );
}

export default Dropdown;