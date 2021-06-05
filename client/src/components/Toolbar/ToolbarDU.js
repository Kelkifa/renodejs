import React, { useRef } from 'react';
import { FaTrashAlt } from 'react-icons/fa'
import { MdSystemUpdateAlt } from 'react-icons/md'
import { Link } from 'react-router-dom';
import './Toolbar.scss';
import PropTypes from 'prop-types';

ToolbarDU.propTypes = {
    updateLink: PropTypes.string,
    id: PropTypes.string,
};

ToolbarDU.defaultProps = {
    updateLink: '#',
    id: null,
}

function ToolbarDU(props) {
    /** Props */
    const { updateLink, id } = props;

    const formRef = useRef();

    const deleteClickHandler = () => {
        formRef.current.submit();
    }
    /** Render */
    return (
        <div className="toolbar toolbar--column">
            <Link to={updateLink}>
                <div className="toolbar__item">
                    <MdSystemUpdateAlt color="rgb(32,121, 218)" />
                </div>
            </Link>

            <div onClick={deleteClickHandler} className="toolbar__item" >
                <form action={`/api/document/${id}/delete?_method=DELETE`} method="POST" ref={formRef}></form>
                <FaTrashAlt color="rgb(32,121, 218)" />
            </div>
        </div>
    );
}

export default ToolbarDU;