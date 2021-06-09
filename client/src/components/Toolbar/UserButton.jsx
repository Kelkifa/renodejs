import './UserButton.scss'
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../../contexts/AuthContextProvider'

UserButton.propTypes = {
    authData: PropTypes.object,
};
UserButton.defaultProps = {
    authData: {}
}

function UserButton(props) {
    const { authData } = props;

    const { logoutUser } = useContext(AuthContext);

    const logOutHandler = () => {
        logoutUser();
    }

    return (
        <div className="UserBtn">
            <h3 className="UserBtn__show">
                {authData.user ? authData.user.fullname : "empty"}
            </h3>
            <div className="UserBtn__hide">
                {authData.user && authData.user.admin ?
                    <Link to="/admin" className="UserBtn__hide__item">
                        admin
                    </Link> :
                    ""
                }
                <div className="UserBtn__hide__item" onClick={logOutHandler}>Log out</div>
            </div>
        </div>
    );
}

export default UserButton;