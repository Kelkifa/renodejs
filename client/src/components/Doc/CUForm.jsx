import PropTypes from 'prop-types';
import DocInput from '../InputComponents/DocInput';
import InputContainer from '../InputComponents/InputContainer';
import { useState, useEffect } from 'react';

CUForm.propTypes = {
    flagRightContent: PropTypes.number,
    data: PropTypes.object,
}
CUForm.defaultProps = {
    flagRightContent: 0,    //0: create, 1: update, 2: show, 3: null
    data: {}
}

function CUForm(props) {
    /** Props */
    const { flagRightContent, data } = props;
    /** State */
    const [containers, setContainers] = useState([0]);
    const [addedContainers, setAddedContainers] = useState([]); // Lưu position của các containers đã được thêm vào

    // Cờ trả về true nếu cần update và có dữ liệu
    const updateFlag = flagRightContent === 1 ? true : false;
    /** Effect */
    useEffect(() => {
        if (updateFlag) {
            var arr = data.children_parts.map((value, i) => i)
            setContainers([...arr]);
        }
    }, [updateFlag, data]);
    /** Event Handler */
    function onIconParentClickHandler(clickInfo, position) {
        const copyContainers = [...containers];
        const copyAddedContainers = [...addedContainers];

        if (clickInfo === 'addT') {
            copyContainers.splice(position + 1, 0, Math.max(...copyContainers) + 1);
            copyAddedContainers.push(position + 1);
        }
        else if (clickInfo === 'sub') {
            copyContainers.splice(position, 1);
            copyAddedContainers.splice(position, 1);
        }
        setAddedContainers([...copyAddedContainers]);
        setContainers([...copyContainers]);
    }
    /** Render */
    return (
        <form action="#" className="docForm">
            <div className="docForm__title">
                <div className="CUinput__content">
                    <label className="CUinput__label">Parent Part Title</label>
                    <input className="CUinput__input CUinput__input--input"
                        type="text"
                        defaultValue={updateFlag && data && data.parent_part ? data.parent_part.title : ""} />
                </div>
            </div>
            <div className="docForm__ChildrenPart">
                {containers.map((value, i) => (
                    <InputContainer key={value} position={i}
                        onIconParentClick={onIconParentClickHandler}
                        defaultValue={updateFlag
                            ? data.children_parts[i]
                            : {}}
                        updateFlag={updateFlag} />
                ))}
            </div>
        </form>
    );
}

export default CUForm;