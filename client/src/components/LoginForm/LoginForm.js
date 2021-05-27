import './LoginForm.scss';
import React from 'react';

function LoginForm(props) {
    return (
        <div className="login">
            <div className="login__left">
                <img className="login__left__img" src="/anime.png" alt="can't load" />
            </div>
            <div className="login__right">
                <h2 className="login__right__title">WELCOME BACK</h2>
                <div className="login__right__inputs">
                    <label className="w-full d-b">USERNAME</label>
                    <input className="w-full d-b input input-login" type="text" />
                    <label className="w-full d-b">PASSWORD</label>
                    <input className="w-full d-b input input-login" type="text" />
                </div>
                <button className="btn btn--submit btn--purple mr-t-20 pd-tb-15 w-full">
                    Login
                </button>
                <div className="login__right__notify w-full">
                    <span className="login__right__notify__item--span">Need a account?  </span>
                    <a className="login__right__notify__item--a" href="#">Register</a>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;