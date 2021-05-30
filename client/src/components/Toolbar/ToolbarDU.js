import React, { useRef } from 'react';
import { FaTrashAlt } from 'react-icons/fa'
import { MdSystemUpdateAlt } from 'react-icons/md'
import { Link } from 'react-router-dom';
import $ from 'jquery';

function ToolbarDU(props) {
    /** Ref */
    const formDeleteRef = useRef();
    /** Props */
    // const { id, type } = props;
    /** Event Handler */
    function clickHandler() {
        $(formDeleteRef).submit();
    }
    /** Render */
    return (
        <div className="toolbar toolbar--column">
            <Link to={`#`}>
                <div className="toolbar__item" >
                    <MdSystemUpdateAlt color="rgb(32,121, 218)" />
                </div>
            </Link>
            <div className="toolbar__item" onClick={clickHandler}>
                <FaTrashAlt color="rgb(32,121, 218)" />
            </div>
        </div>
    );
}

export default ToolbarDU;