import React from 'react';
import PropTypes from 'prop-types';

DocShow.propTypes = {
    doc: PropTypes.object,
};

function DocShow(props) {
    /** Props */
    const { doc } = props;

    /** Render */
    function processTextLine(content) {
        if (content) {
            var arrContent = content.split("\n");
            return arrContent.map((value, index) => (<div className="content__line" key={value + index}>{value}</div>));
        }
        return '';
    }
    function processChildrenPartContent(childrenPart) {
        if (childrenPart) {
            return childrenPart.content.map((value, index) => {
                if (childrenPart.sort[index] === 0) {
                    return (<div key={value + index} className="DocShow__childrenPart__content__part">
                        {processTextLine(value)}
                    </div>)
                }
                return (
                    <img key={value + index} className="DocShow__childrenPart__content__img" src={value} alt="Can't load" />
                )
            })
        }
        return ''

    }


    if (!doc) {
        return (<div>there is no content</div>)
    }
    return (
        <div className="DocShow">
            <h2 className="DocShow__ParentTitle">
                {doc.parent_part ? doc.parent_part.title : ''}
            </h2>
            <div className="DocShow__childrenPart">
                {doc.children_parts
                    ? doc.children_parts.map((value, i) => (
                        <div key={value.title}>
                            <h3 className="DocShow__childrenPart__title">{i + 1}. {value.title}</h3>
                            <div className="DocShow__childrenPart__content">
                                {processChildrenPartContent(value)}
                            </div>
                        </div>
                    ))
                    : ''}
            </div>
        </div>
    );
}

export default DocShow;