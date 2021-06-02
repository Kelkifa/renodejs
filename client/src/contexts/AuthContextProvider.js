import React, { createContext, useState } from 'react';
import userApi from '../api/userApi';
// import axios from 'axios';

export const AuthContext = createContext();

const LOCAL_STORAGE_TOKEN_NAME = 'token';

// const setAuthToken = (token) => {
//     if (token) {
//         // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     }
//     else {
//         // delete axios.defaults.headers.common['Authorization']
//     }
// }

function AuthContextProvider(props) {
    const { children } = props;
    const [authState, setMyAuthState] = useState({
        isAuthenticated: false,
        user: { userToken: null },
    })

    const loginUser = async userForm => {
        try {
            const response = await userApi.login(userForm);
            if (response.success) {
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.accessToken);

                const copyAuthState = { ...authState };
                copyAuthState.isAuthenticated = true;
                copyAuthState.user.userToken = response.accessToken;
                setMyAuthState({ ...copyAuthState });
            }
            return response;

        } catch (error) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
            if (error.response.data) return error.response.data;
            else return { success: false, message: error.message }
        }
    }

    // Context data 
    const authContextData = { loginUser, authState }

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;