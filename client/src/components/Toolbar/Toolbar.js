import './Toolbar.scss';
import React from 'react';

import { FaRegPlusSquare } from 'react-icons/fa';
import { BsCardImage } from 'react-icons/bs';
import { IoMdRemoveCircleOutline } from 'react-icons/io';
// import $ from 'jquery';

function Toolbar(props) {


    return (
        <div className={`toolbar`}>
            <div className="toolbar__item" onClick={() => { props.clickHander('addText', props.ps) }}>
                <FaRegPlusSquare size="20px" color="rgb(32, 121, 218)" />
            </div>
            <div className="toolbar__item" onClick={() => { props.clickHander('addImage', props.ps) }}>
                <BsCardImage size="20px" color="rgb(32,121, 218)"></BsCardImage>
            </div>
            {props.childrenTitle ?
                "" :
                <div className="toolbar__item" onClick={() => { props.clickHander('sub', props.ps) }}>
                    <IoMdRemoveCircleOutline size="20px" color="rgb(32, 121, 218)" />
                </div>
            }
        </div>
    )
}

export default Toolbar;