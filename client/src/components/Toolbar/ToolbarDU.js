import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'
import { MdSystemUpdateAlt } from 'react-icons/md'
import { Link } from 'react-router-dom';
import './Toolbar.scss';
import PropTypes from 'prop-types';

ToolbarDU.propTypes = {
    updateLink: PropTypes.string,
};

ToolbarDU.defaultProps = {
    updateLink: '#',
}

function ToolbarDU(props) {
    /** Props */
    const { updateLink } = props;

    /** Render */
    return (
        <div className="toolbar toolbar--column">
            <Link to={updateLink}>
                <div className="toolbar__item" >
                    <MdSystemUpdateAlt color="rgb(32,121, 218)" />
                </div>
            </Link>
            <Link to={'#'}>
                <div className="toolbar__item" >
                    <FaTrashAlt color="rgb(32,121, 218)" />
                </div>
            </Link>
        </div>
    );
}

export default ToolbarDU;