import React, { useState } from 'react';
import Toolbar from '../Toolbar/Toolbar.js';
import $ from 'jquery';

function DocumentChildrenContent(props) {
    //state
    const [keys, setKeys] = useState([0, 1])
    const [itemArr, setItemArr] = useState([0, 0]);  //0: textarea, 1: image
    //Children content thứ mấy
    const CpCount = props.CpCount;



    function clickIconHandler(info, ps, toggle) {
        console.log(toggle)
        const copyItemArr = [...itemArr];
        const copyKeys = [...keys];
        if (info === 'addText') {       //textarea
            copyItemArr.splice(ps, 0, 0);
            copyKeys.splice(ps, 0, { k: Math.max(...keys) + 1, toggle: false });
            setItemArr(copyItemArr);
            setKeys(copyKeys);
        }
        else if (info === 'addImage') {
            copyItemArr.splice(ps, 0, 1);    //image
            copyKeys.splice(ps, 0, { k: Math.max(...keys) + 1, toggle: false });
            setItemArr(copyItemArr);
            setKeys(copyKeys);
        }
        else if (info === 'sub') {
            copyItemArr.splice(ps - 1, 1);
            setItemArr(copyItemArr);
        }
        console.log(keys)
    }

    function toggleHandler(e) {
        // console.log(iconContainer.current)
    }

    /** Render */

    var cntItem = itemArr.map((value, index) => {
        if (value === 0) { //textarea
            return (
                <div key={keys[index].k} ps={index + 1} className="doc__form__content__item" onClick={() => toggleHandler()}>
                    <label className="item__label">Children Part Content</label>
                    <input hidden name={`sort[${CpCount}][]`} type="text" value={0} />
                    <textarea className="doc__form__input" name={`children_part_content[${CpCount}][]`} rows="5" type="tex" />
                    <div className="doc__toolbar">
                        <Toolbar ps={index + 1}
                            clickHander={clickIconHandler} />
                    </div>
                </div>
            )
        }
        if (value === 1) {  //image
            return (
                <div key={keys[index].k} ps={index + 1} className="doc__form__content__item" onClick={() => toggleHandler()}>
                    <label className="item__label">Image Link</label>
                    <input hidden name="sort[${index}][]" value={1} type="text" />
                    <input className="doc__form__input" name={`children_part_content[${index}][]`} autoComplete="off" type="text" placeholder="Enter Image Link" />
                    <div className="doc__toolbar" >
                        <Toolbar ps={index + 1}
                            clickHander={clickIconHandler} />
                    </div>

                </div>
            )
        }
    })

    return (
        <div className="doc__form__content" >
            <div ps={0} className="doc__form__content__item" onClick={() => toggleHandler()}>
                <label className="item__label">Children Part Title</label>
                <input className="doc__form__input" name="children_part_title[]" type="text" placeholder="Enter Children Part Title" />
                <div className="doc__toolbar">
                    <Toolbar ps={0} clickHander={clickIconHandler}
                        childrenTitle={1} />
                </div>
            </div>

            {cntItem}
        </div>
    )
}

export default DocumentChildrenContent;




