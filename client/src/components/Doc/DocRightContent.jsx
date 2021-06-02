import React from 'react';
import PropTypes from 'prop-types';
import MultiInputContainer from '../InputComponents/MultiInputContainer';

DocRightContent.propTypes = {
    doc: PropTypes.object,
    type: PropTypes.string,
    flagRightContent: PropTypes.number,  //0: create, 1: update, 2: show, 3: null
};

DocRightContent.defaultProps = {
    doc: {},
    type: null,
    flagRightContent: 0,    //0: create, 1: update, 2: show, 3: null
}

function DocRightContent(props) {
    /** Props */
    const { doc, flagRightContent } = props;
    // if (Object.keys(doc).length === 0) return (<div>null</div>)
    /** Render */

    if (flagRightContent === 3) return (<div>null</div>);

    return (
        <div className="doc__right">
            {flagRightContent === 2 ?
                "show" :
                <MultiInputContainer data={doc}
                    updateFlag={flagRightContent === 1 ? true : false} />}
        </div>
    );
}

export default DocRightContent;