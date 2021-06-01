import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DocInput from './DocInput';
import Toolbar from '../Toolbar/Toolbar.js';

InputContainer.propTypes = {
    defaultValue: PropTypes.object, //children part
    position: PropTypes.number,
    onIconParentClick: PropTypes.func,
    updateFlag: PropTypes.bool,
    containerValue: PropTypes.func,     //function for send to MultiInputContainer
};

InputContainer.defaultProps = {
    defaultValue: {},
    position: 0,            // Input Container thứ mấy 
    onIconParentClick: null,
    updateFlag: false,
    containerValue: null,
}

function InputContainer(props) {
    /** Props */
    const { defaultValue, position, onIconParentClick, updateFlag, containerValue } = props;

    /** State */
    const [inputs, setInputs] = useState([1, 0]); //[input, textarea]
    const [keys, setKeys] = useState([1, 2]);
    const [addedInputs, setAddedInputs] = useState([]);

    const [inputValues, setInputValues] = useState({
        content: [],
        sort: [1, 0],
    });

    /** Effect */
    useEffect(() => {
        if (updateFlag === true && defaultValue.sort) {
            const copyKeys = defaultValue.sort.map((value, index) => index + 2);
            const copyInputs = [1, ...defaultValue.sort];
            setInputs(copyInputs);
            setKeys([1, ...copyKeys]);
        }
    }, [updateFlag]);
    /** Event Handler */
    function onParentIconClickHandler(clickInfo) {
        if (onIconParentClick)
            onIconParentClick(clickInfo, position);
    }
    function onChildrenIconClickHandler(clickInfo, ps) {
        const copyInputs = [...inputs];
        const copyKeys = [...keys];
        const copyAddedInputs = [...addedInputs];

        const copyInputValue = { ...inputValues };

        if (clickInfo === 'addT') {
            copyInputs.splice(ps + 1, 0, 0);
            copyKeys.splice(ps + 1, 0, Math.max(...copyKeys) + 1);
            copyAddedInputs.push(ps + 1);
        }
        else if (clickInfo === 'addI') {
            copyInputs.splice(ps + 1, 0, 1);
            copyKeys.splice(ps + 1, 0, Math.max(...copyKeys) + 1);
            copyAddedInputs.push(ps + 1);
        }
        else if (clickInfo === 'sub') {
            copyInputs.splice(ps, 1);
            copyKeys.splice(ps, 1);
            copyAddedInputs.splice(ps, 1)
        }

        setInputs([...copyInputs]);
        setKeys([...copyKeys]);
        setAddedInputs(copyAddedInputs);

        copyInputValue.sort = [...copyInputs];
        setInputValues(copyInputValue);
    }
    function onTextChangeHandler(type, ps, text) {
        const copyInputValues = { ...inputValues };
        copyInputValues.content[ps] = text;
        //send to multiInputContainer ...
        if (containerValue);
        containerValue(copyInputValues, position);

        setInputValues(copyInputValues);
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
                                    removeIcon={[3]}
                                    defaultValue={updateFlag && !addedInputs.includes(i) && defaultValue ? defaultValue.title : ""}
                                    onTextChangeHandler={onTextChangeHandler} />
                            )
                        }
                        if (value === 0) {
                            return (
                                <DocInput key={keys[i]} label="Content"
                                    onIconClick={onChildrenIconClickHandler}
                                    position={i}
                                    type="textarea"
                                    defaultValue={updateFlag && !addedInputs.includes(i) && defaultValue.content ? defaultValue.content[i - 1] : ""}
                                    onTextChangeHandler={onTextChangeHandler} />
                            )
                        }
                        if (value === 1) {
                            return (
                                <DocInput key={keys[i]} label="Image Link"
                                    onIconClick={onChildrenIconClickHandler}
                                    position={i}
                                    type="input"
                                    defaultValue={updateFlag && !addedInputs.includes(i) && defaultValue.content ? defaultValue.content[i - 1] : ""}
                                    onTextChangeHandler={onTextChangeHandler} />
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