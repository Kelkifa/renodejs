import './Toolbar.scss';
import React from 'react';

import { FaRegPlusSquare } from 'react-icons/fa';
import { BsCardImage } from 'react-icons/bs';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
// import $ from 'jquery';

function Toolbar(props) {

    var type = 'cp';
    if (props.type === 'pp') {
        type = 'pp';
    }
    return (
        <div className="toolbar">
            <div className="toolbar__item" onClick={() => { props.clickHandler('addText', props.ps, type) }}>
                <FaRegPlusSquare size="20px" color="rgb(32, 121, 218)" />
            </div>
            {props.childrenPart ?
                "" :
                <div className="toolbar__item" onClick={() => { props.clickHandler('addImage', props.ps, type) }}>
                    <BsCardImage size="20px" color="rgb(32,121, 218)"></BsCardImage>
                </div>
            }
            {props.childrenTitle ?
                "" :
                <div className="toolbar__item" onClick={() => { props.clickHandler('sub', props.ps, type) }}>
                    <IoMdRemoveCircleOutline size="20px" color="rgb(32, 121, 218)" />
                </div>
            }
        </div>
    )
}

export default Toolbar;