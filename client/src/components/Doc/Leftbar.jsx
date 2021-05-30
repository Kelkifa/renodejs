import React from 'react';
import PropTypes from 'prop-types';
import LeftbarTitle from './LeftbarTitle';

Leftbar.propTypes = {
    data: PropTypes.array,
    type: PropTypes.string,
};

Leftbar.defaultProps = {
    data: ['du lieu 1', 'du lieu 2', 'du lieu 3'],
    type: "NodeJS",
}

function Leftbar(props) {
    /** Props */
    const { data, type } = props;

    return (
        <div className="doc__leftbar">
            <div className="doc__leftbar__item doc__leftbar__item--title">
                {type}
            </div>
            <LeftbarTitle data={data} />
        </div>
    );
}

export default Leftbar;