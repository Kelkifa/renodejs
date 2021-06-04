import React from 'react';
import PropTypes from 'prop-types';
import MultiInputContainer from '../InputComponents/MultiInputContainer';
import DocShow from './DocShow';

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
    const { doc, flagRightContent, type } = props;

    /** Render */
    if (flagRightContent === 3) return (<div>null</div>);

    return (
        <div className="doc__right">
            {flagRightContent === 2 ?
                <DocShow doc={doc} /> :
                <MultiInputContainer data={doc}
                    updateFlag={flagRightContent === 1 ? true : false}
                    type={type} />}
        </div>
    );
}

export default DocRightContent;