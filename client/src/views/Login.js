import React, { useContext } from 'react';
import LoginForm from '../components/Form/LoginForm.js';
import { AuthContext } from '../contexts/AuthContextProvider';

function Login(props) {
    const userContext = useContext(AuthContext);

    function handlerClick() {
        userContext.loginUser({ username: 'huan', password: 'Kelkifa123' });
        console.log(userContext.authState);
    }
    return (
        <>
            <div className="views-form">
                <LoginForm />
                <button onClick={handlerClick}>
                    test button
                </button>
            </div>
        </>
    );
}

export default Login;