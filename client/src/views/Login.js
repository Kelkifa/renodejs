import React, { useEffect } from 'react';
import LoginForm from '../components/Form/LoginForm.js';
import $ from 'jquery';

function Login(props) {
    useEffect(() => {
        $('html').css('background', "url('https://i.pinimg.com/originals/a0/d8/5c/a0d85cedce9d92515f1e91c1860d40d0.jpg' no-repeat center center fixed");
        $('html').css('-webkit-background-size', "cover");
        $('html').css('-moz-background-size', "cover");
        $('html').css('-o-background-size', "cover");
        $('html').css('background-size', "cover");
    }, [])
    return (
        <>
            <div className="views-form">
                <LoginForm />
            </div>
        </>
    );
}

export default Login;