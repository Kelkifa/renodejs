import React, { createContext, useState, useEffect } from 'react';
import userApi from '../api/userApi';
import authApi from '../api/authApi';
// import axios from 'axios';

export const AuthContext = createContext();

const LOCAL_STORAGE_TOKEN_NAME = 'token';


function AuthContextProvider(props) {
    /** Props */
    const { children } = props;

    /** State */
    const [authState, setMyAuthState] = useState({
        isAuthenticated: false,
        user: { fullname: null, admin: false, _id: null },
    })
    const [refesh, setRefesh] = useState(true) //Tín hiệu refesh khi login hoặc logout

    /** Effect */
    useEffect(() => {
        loadUser();
    }, [])

    /** Function Handler */
    const loadUser = async () => {
        try {
            const response = await authApi.get({});
            if (response.success) {
                const copyAuthState = { ...authState };
                copyAuthState.user = response.user;
                copyAuthState.isAuthenticated = response.success;
                setMyAuthState({ ...copyAuthState });
            }
        } catch (error) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
            const copyAuthState = { ...authState };
            copyAuthState.user = null;
            copyAuthState.isAuthenticated = false;
            setMyAuthState({ ...copyAuthState });
        }
    }

    const loginUser = async userForm => {
        try {
            const response = await userApi.login(userForm);
            if (response.success) {
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.accessToken);

                const copyAuthState = { ...authState };
                copyAuthState.isAuthenticated = true;
                setMyAuthState({ ...copyAuthState });
            }
            await loadUser();
            return response.data;

        } catch (error) {
            if (error.response.data) return error.response.data;
            else return { success: false, message: error.message }
        }
    }

    const logoutUser = () => {
        setMyAuthState({
            isAuthenticated: false,
            user: { fullname: null, admin: false, _id: null }
        })
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    }

    const authRefeshSignal = () => {
        setRefesh(!refesh);
    }

    /** Context Data */
    const authContextData = { loginUser, authState, logoutUser, loadUser, authRefeshSignal }

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;