import React, { useState, useEffect, useContext } from 'react';
// import adminApi from '../api/adminApi';
import { AuthContext } from '../contexts/AuthContextProvider';
import adminApi from '../api/adminApi';
import AdminLeftbar from '../components/admin/AdminLeftbar';


function Admin(props) {

    const { authState, loadUser } = useContext(AuthContext);
    /** State */
    const [isAlow, setIsAlow] = useState(false);

    useEffect(() => {
        async function fetchCheckAdmin() {

            try {
                var response = await adminApi.accessCheck();
                if (response.success === true) {
                    if (response.message === "Allow") setIsAlow(true);
                    console.log("alow");
                }
            } catch (error) {
                setIsAlow(false);
                console.log(error);
                console.log("loi roi");
            }
        }

        fetchCheckAdmin();
    }, []);

    if (isAlow === true && authState.user) {
        if (authState.user.admin === true)
            return (
                <div>
                    <AdminLeftbar></AdminLeftbar>
                </div>
            );
    }

    return "Not Access";
}

export default Admin;