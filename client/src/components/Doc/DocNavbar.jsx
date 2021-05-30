import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

DocNavbar.propTypes = {
    data: PropTypes.array,
    baseLink: PropTypes.string,
};

DocNavbar.defaultProps = {
    data: [],               //['NodeJS', 'ReactJS', 'CSS', 'PHP'],
    baseLink: "#",
}
function DocNavbar(props) {
    /** Props */
    const { data, baseLink } = props;
    return (
        <div className="docNavbar">
            {data.map(value => (
                <Link key={value} className="docNavbar__item" to={baseLink + `?type=${value}`}>
                    {value}
                </Link>
            ))}
        </div>
    );
}

export default DocNavbar;