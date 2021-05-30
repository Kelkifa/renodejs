import React from 'react';
import PropTypes from 'prop-types';

DocRightContent.propTypes = {
    doc: PropTypes.object,
    type: PropTypes.string,
    flagRightContent: PropTypes.number,  //0: null, 1: update, 2: show, 3: create
};

DocRightContent.defaultProps = {
    doc: {},
    type: null,
    flagRightContent: 0,
}

function DocRightContent(props) {
    /** Props */
    const { doc, type, flagRightContent } = props;
    // if (Object.keys(doc).length === 0) return (<div>null</div>)
    /** Render */
    if (flagRightContent === 0) return (<div>null</div>);
    return (
        <div className="doc__right">
            doc right hello
        </div>
    );
}

export default DocRightContent;