import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'
import { MdSystemUpdateAlt } from 'react-icons/md'


function ToolbarDU(props) {

    /** Render */
    return (
        <div className="toolbar toolbar--column">
            <div className="toolbar__item" onClick={() => props.clickHandler('update')}>
                <MdSystemUpdateAlt color="rgb(32,121, 218)" />
            </div>
            <div className="toolbar__item" onClick={() => props.clickHandler('delete')}>
                <FaTrashAlt color="rgb(32,121, 218)" />
            </div>
        </div>
    );
}

export default ToolbarDU;