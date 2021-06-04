import PropTypes from 'prop-types';
import LeftbarTitleShow from './LeftbarTitlteShow';

LeftbarTitle.propTypes = {
    data: PropTypes.array,
    baseLink: PropTypes.string,
};

LeftbarTitle.defaultProps = {
    data: [],
    baseLink: '#',
}
function LeftbarTitle(props) {
    /** Props */
    const { data, baseLink, type } = props;
    /** Render */
    return (
        <>
            {data.map((value, i) => (
                <LeftbarTitleShow key={value._id}
                    baseLink={baseLink}
                    data={value.parent_part.title}
                    id={value._id} />
            ))}
        </>
    );
}

export default LeftbarTitle;