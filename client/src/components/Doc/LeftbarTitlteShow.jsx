import { useRef } from 'react';
import PropTypes from 'prop-types';
import ToolbarDU from '../Toolbar/ToolbarDU.js';
import { Link } from 'react-router-dom';

LeftbarTitlteShow.propTypes = {
    data: PropTypes.string,
    id: PropTypes.string,
    baseLink: PropTypes.string,
};
LeftbarTitlteShow.defaultProps = {
    data: null,
    id: null,
    baseLink: '#',
}

function LeftbarTitlteShow(props) {
    /** Props */
    const { data, baseLink, id } = props;
    /** Ref */
    const iconContainer = useRef();
    /** Event Handler */
    function onMouseOverHandler() {
        iconContainer.current.classList.remove('hide')
    }
    function onMouseOutHandler() {
        iconContainer.current.classList.add('hide')
    }
    return (
        <div className="doc__leftbar__item"
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOutHandler}>
            <Link to={baseLink + `&id=${id}`} style={{ textDecoration: "none", color: "black" }}>
                <div className="doc__leftbar__item__title">
                    {data}
                </div>
            </Link>
            <div className="doc__Leftbar__item__toolbar hide" ref={iconContainer}>
                <ToolbarDU updateLink={baseLink + `&update=${id}`} />
            </div>
        </div>
    );
}

export default LeftbarTitlteShow;