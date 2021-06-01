import { data } from 'jquery';
import React, { createContext, useState } from 'react';
import userApi from '../api/userApi';

export const AuthContext = createContext();

function AuthContextProvider(props) {
    const { children } = props;
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
    })

    const loginUser = async userForm => {
        try {
            const response = await userApi.login(userForm);
            if (response.success) {
                setAuthState({
                    isAuthenticated: true,
                    user: response.accessToken,
                })
            }
            console.log(response);
            return response;

        } catch (error) {
            console.log(error);
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