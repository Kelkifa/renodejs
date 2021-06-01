import React from 'react';
import PropTypes from 'prop-types';
import LeftbarTitle from './LeftbarTitle';
import { Link } from 'react-router-dom';

Leftbar.propTypes = {
    data: PropTypes.array,
    type: PropTypes.string,
    baseLink: PropTypes.string,
};

Leftbar.defaultProps = {
    data: [],
    type: null,
    baseLink: '#',
}

function Leftbar(props) {
    /** Props */
    const { data, type, baseLink } = props;
    /** Rennder */
    if (!type) {
        return null;
    }
    return (
        <div className="doc__leftbar">
            <Link to={baseLink + `?type=${type}`} style={{ textDecoration: "none" }}>
                <div className="doc__leftbar__item doc__leftbar__item--title">
                    {type}
                </div>
            </Link>
            <LeftbarTitle data={data} baseLink={baseLink + `?type=${type}`} />
        </div>
    );
}

export default Leftbar;