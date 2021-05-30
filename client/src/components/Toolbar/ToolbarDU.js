import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'
import { MdSystemUpdateAlt } from 'react-icons/md'
import { Link } from 'react-router-dom';
import './Toolbar.scss';
import PropTypes from 'prop-types';

ToolbarDU.propTypes = {
    firstIconLink: PropTypes.string,
    secondIconLink: PropTypes.string,
};

ToolbarDU.defaultProps = {
    firstIconLink: '#',
    secondIconLink: '#',
}

function ToolbarDU(props) {
    /** Props */
    const { firstIconLink, secondIconLink } = props;

    /** Render */
    return (
        <div className="toolbar toolbar--column">
            <Link to={firstIconLink}>
                <div className="toolbar__item" >
                    <MdSystemUpdateAlt color="rgb(32,121, 218)" />
                </div>
            </Link>
            <Link to={secondIconLink}>
                <div className="toolbar__item" >
                    <FaTrashAlt color="rgb(32,121, 218)" />
                </div>
            </Link>
        </div>
    );
}

export default ToolbarDU;