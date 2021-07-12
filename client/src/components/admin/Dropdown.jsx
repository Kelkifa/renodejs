import PropTypes from 'prop-types';
import { useState, useRef } from 'react';

Dropdown.propTypes = {
    showElement: PropTypes.object,
    dropdownIcon: PropTypes.object,
    hideElement: PropTypes.elementType,
};

Dropdown.defaultProps = {
    showElement: {
        element: null,
        containerClass: null,
    },
    dropdownIcon: {
        dropdownElement: null,
        nonDropdownElement: null,
    },
    hideElement: null,
}

function Dropdown(props) {
    /** Props */
    const { children, showElement, hideElement, dropdownIcon } = props;

    /** Ref */
    const hideRef = useRef();

    /** State */
    const [isShow, setIsShow] = useState(false);  //false : hide dropdow, true: show dropdown

    /** Handler Function */
    const clickHandler = () => {
        setIsShow(!isShow);
    }

    /** Render */
    return (
        <>
            <div className={showElement.containerClass} style={{ display: "flex", alignItems: "center" }} onClick={clickHandler}>
                {showElement.element}
                {isShow ? dropdownIcon.dropdownElement : dropdownIcon.nonDropdownElement}
            </div>
            {isShow ? hideElement : null}
        </>
    );
}

export default Dropdown;