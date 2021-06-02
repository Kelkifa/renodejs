import React from 'react';
import PropTypes from 'prop-types';

DocShow.propTypes = {
    doc: PropTypes.object,
};

function DocShow(props) {
    /** Props */
    const { doc } = props;
    console.log(doc);

    /** Render */
    function processTextLine(content) {
        if (content) {
            var arrContent = content.split("\n");
            return arrContent.map(value => (<div className="content__line" key={value}>{value}</div>))
        }
        return '';
    }
    function processChildrenPartContent(childrenPart) {
        if (childrenPart) {
            return childrenPart.content.map((value, index) => {
                if (childrenPart.sort[index] === 0) {
                    return (<div key={value} className="DocShow__childrenPart__content__part">
                        {processTextLine(value)}
                    </div>)
                }
                return (
                    <img className="DocShow__childrenPart__content__img" src={value} alt="Can't load" />
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
                        <>
                            <h3 className="DocShow__childrenPart__title">{i + 1}. {value.title}</h3>
                            <div className="DocShow__childrenPart__content">
                                {processChildrenPartContent(value)}
                            </div>
                        </>
                    ))
                    : ''}
            </div>
        </div>
    );
}

export default DocShow;