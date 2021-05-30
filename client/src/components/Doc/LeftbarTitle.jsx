import PropTypes from 'prop-types';
import LeftbarTitleShow from './LeftbarTitlteShow';

LeftbarTitle.propTypes = {
    data: PropTypes.array,
    titleLink: PropTypes.string,
};

LeftbarTitle.defaultProps = {
    data: [],
    titleLink: '#',
}
function LeftbarTitle(props) {
    /** Props */
    const { data, titleLink } = props;
    /** Render */
    return (
        <>

            {data.map(value => (
                <LeftbarTitleShow key={value}
                    link={titleLink}
                    data={value} />
            ))}
        </>
    );
}

export default LeftbarTitle;