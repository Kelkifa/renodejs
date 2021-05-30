import { useState } from 'react';
import PropTypes from 'prop-types';
import DocInput from './DocInput';
import Toolbar from '../Toolbar/Toolbar.js';

InputContainer.propTypes = {
    data: PropTypes.array,
    position: PropTypes.number,
    onIconParentClick: PropTypes.func,
};

InputContainer.defaultProps = {
    data: [],
    position: 0,
    onIconParentClick: null,
}

function InputContainer(props) {
    /** Props */
    const { data, position, onIconParentClick } = props;
    /** State */
    const [inputs, setInputs] = useState([1, 0]); //[text]
    const [keys, setKeys] = useState([1, 2]);

    /** Event Handler */
    function onParentIconClickHandler(clickInfo) {
        if (onIconParentClick)
            onIconParentClick(clickInfo, position);
    }
    function onChildrenIconClickHandler(clickInfo, ps) {
        const copyInputs = [...inputs];
        const copyKeys = [...keys];
        if (clickInfo === 'addT') {
            copyInputs.splice(ps + 1, 0, 0);
            copyKeys.splice(ps + 1, 0, Math.max(...copyKeys) + 1);
        }
        else if (clickInfo === 'addI') {
            copyInputs.splice(ps + 1, 0, 1);
            copyKeys.splice(ps + 1, 0, Math.max(...copyKeys) + 1);
        }
        else if (clickInfo === 'sub') {
            copyInputs.splice(ps, 1);
            copyKeys.splice(ps, 1);
        }
        setInputs([...copyInputs]);
        setKeys([...copyKeys]);
    }
    /** Render */

    return (
        <div className="iContainer" >
            <div className="iContainer__input">
                {
                    inputs.map((value, i) => {
                        if (i === 0) {    //children part title
                            return (
                                <DocInput key={keys[i]} label="Children Part Title"
                                    onIconClick={onChildrenIconClickHandler}
                                    position={i}
                                    removeIcon={[3]} />
                            )
                        }
                        if (value === 0)
                            return (
                                <DocInput key={keys[i]} label="Content"
                                    onIconClick={onChildrenIconClickHandler}
                                    position={i}
                                    type="textarea" />
                            )
                        if (value === 1) {
                            return (
                                <DocInput key={keys[i]} label="Image Link"
                                    onIconClick={onChildrenIconClickHandler}
                                    position={i}
                                    type="input" />
                            )
                        }
                        return ("")
                    })
                }
            </div>

            <div className="iContainer__toolbar">
                <Toolbar removeIcon={[2]}
                    onIconClick={onParentIconClickHandler}
                />
            </div>

        </div>
    );
}

export default InputContainer;

{/* <DocInput label="Children Part Content"
                onIconClick={onClickHandler}
                position={1}
                type="textarea" /> */}