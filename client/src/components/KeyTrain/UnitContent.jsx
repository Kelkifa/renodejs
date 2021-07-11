import { useRef } from 'react';
import PropTypes from 'prop-types';

UnitContent.propTypes = {
    word: PropTypes.string,
};
UnitContent.defaultProps = {
    word: null,
}

function UnitContent(props) {
    /** Props */
    const { word } = props;
    /** Ref */
    const spanRef = useRef();
    /** Handler function */
    const clickHandler = (e) => {
        console.log(e.target.offset);
    }
    return (
        <span onClick={clickHandler} ref={spanRef}> {word}</span>
    );
}

export default UnitContent;