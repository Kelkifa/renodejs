import React, { useState, useEffect, useContext } from 'react';
// import adminApi from '../api/adminApi';
import { AuthContext } from '../contexts/AuthContextProvider';


function Admin(props) {
    // const [access, setAccess] = useState(false);

    const { authState, loadUser } = useContext(AuthContext);

    useEffect(() => {
        loadUser();
    }, []);


    if (authState.user && authState.user.admin === false) {
        return "not allow";
    }
    return (
        <div>
            admin page hello
        </div>
    );
}

export default Admin;