import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputContainer from './InputContainer';
import DocInput from './DocInput';

MultiInputContainer.propTypes = {
    data: PropTypes.object,
    updateFlag: PropTypes.bool,
};

MultiInputContainer.defaultProps = {
    data: {
        parent_part: {
            title: "Parent part title"
        },
        _id: "60af9337bc779b002232d575",
        type: "NodeJS",
        children_parts: [
            {
                content: ["content 1", "content 2", "content 3"],
                sort: [0, 0, 0],
                index: 1,
                title: "Children part title I"
            },
            {
                content: ["img2", "content 2"],
                sort: [1, 0],
                index: 2,
                title: "Children part title II"
            }
        ]
    },
    updateFlag: false,
}

function MultiInputContainer(props) {
    /** Props */
    const { data, updateFlag } = props;

    /** State */
    const [containers, setContainers] = useState([1]);
    const [addedContainers, setAddedContainers] = useState([]);

    const [formData, setFormData] = useState({
        parentPartTitle: null,
        childrenPartContent: [],
    });

    /** Effect */
    useEffect(() => {
        if (updateFlag && data.children_parts) {
            const copyContainers = data.children_parts.map((value, index) => index + 1)
            setContainers(copyContainers);
        }
        else if (!updateFlag) {
            setContainers([1]);
            setAddedContainers([]);
        }
    }, [updateFlag, data])

    /** Event Handler */
    function onContainerIconClickHandler(clickInfo, ps) {
        const copyContainers = [...containers];
        const copyAddedContainers = [...addedContainers];

        if (clickInfo === 'addT') {
            copyContainers.splice(ps + 1, 0, Math.max(...copyContainers) + 1);
            copyAddedContainers.push(ps + 1);
        }
        else if (clickInfo === 'sub') {
            copyContainers.splice(ps, 1);
            copyAddedContainers.splice(ps, 1);
        }
        setContainers(copyContainers);
        setAddedContainers(copyAddedContainers);
    }
    // Process input parent part title
    function onParentTitleInputChange(type, ps, text) {
        containerValueHandler(text, ps);
    }
    // Process data from form (InputContainers)
    function containerValueHandler(obj, ps) {
        const copyFormData = { ...formData };
        if (ps === -1) {
            copyFormData.parentPartTitle = obj;
            setFormData(copyFormData);
            return;
        }
        copyFormData.childrenPartContent[ps] = obj;
        setFormData(copyFormData);
    }
    // Process submit
    function onClickSubmitButtonHandler() {
        console.log(formData);
    }

    /** Render */
    return (
        <div>
            <div className="doc__right__ParentTitle">
                <DocInput label="Parent Part Title"
                    type="text"
                    removeIcon={[1, 2, 3]}
                    defaultValue={updateFlag && data.parent_part ? data.parent_part.title : null}
                    position={-1}
                    onTextChangeHandler={onParentTitleInputChange} />
            </div>

            {containers.map((value, i) => {
                return (
                    <InputContainer key={value}
                        position={i}
                        updateFlag={data.children_parts && !addedContainers.includes(i) ? updateFlag : false}
                        onIconParentClick={onContainerIconClickHandler}
                        defaultValue={updateFlag && data.children_parts ? data.children_parts[i] : {}}
                        containerValue={containerValueHandler} />
                )
            })
            }

            <div className="doc__right__BtnContainer">
                <button className="btn btn--secondary"
                    onClick={onClickSubmitButtonHandler} >
                    Submit
                    </button>
            </div>
        </div>
    );
}

export default MultiInputContainer;