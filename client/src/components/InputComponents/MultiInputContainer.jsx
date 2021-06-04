import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputContainer from './InputContainer';
import DocInput from './DocInput';
import documentApi from '../../api/documentApi'

MultiInputContainer.propTypes = {
    data: PropTypes.object,
    updateFlag: PropTypes.bool,
    type: PropTypes.string,
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
    type: null,
}

function MultiInputContainer(props) {
    /** Props */
    const { data, updateFlag, type } = props;

    /** State */
    const [containers, setContainers] = useState([1]);
    const [addedContainers, setAddedContainers] = useState([]);

    const [formData, setFormData] = useState({
        parentPartTitle: { title: "" },
        childrenPartContent: [],
        type,
    });
    const [submitSignal, setSubmitSignal] = useState(false);

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
            /** Xử lý dữ liệu khi xoá  input container */
            const copyFormData = { ...formData };
            copyFormData.childrenPartContent.splice(ps, 1);
            setFormData(copyFormData);
        }
        setContainers(copyContainers);
        setAddedContainers(copyAddedContainers);
    }
    // Process submit
    async function onClickSubmitButtonHandler() {
        setSubmitSignal(true);
        setTimeout(async () => {
            try {
                if (updateFlag) {
                    const response = await documentApi.submitUpdateDocForm(formData, data._id);
                    console.log(response);
                }
                else {
                    const response = await documentApi.submitCreateDocForm(formData);
                    console.log(response);
                }
            } catch (error) {
                console.log(error)
            }
        }, 2000)
    }
    function submitedHandler(ps, obj) {
        const copyFormData = { ...formData };

        /** Xử lý thêm dữ liệu */
        if (ps === -1) {
            copyFormData.parentPartTitle.title = obj;
        }
        else {
            copyFormData.childrenPartContent[ps] = obj;
        }
        setFormData({ ...copyFormData });
        setTimeout(() => {
            setSubmitSignal(false);
        }, 3000)

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
                    submitSignal={submitSignal}
                    onSubmitHandler={submitedHandler} />
            </div>

            {containers.map((value, i) => {
                return (
                    <InputContainer key={value}
                        position={i}
                        updateFlag={data.children_parts && !addedContainers.includes(i) ? updateFlag : false}
                        onIconParentClick={onContainerIconClickHandler}
                        defaultValue={updateFlag && data.children_parts ? data.children_parts[i] : {}}
                        submitSignal={submitSignal}
                        sendBackValue={submitedHandler} />
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