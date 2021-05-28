import React from 'react';

function Register(props) {
    return (
        <form method="POST" action="/api/user/register" name="form-register" className="form">
            <div className="form__left">
                <img className="form__left__img form__left__img--register" src="/AnimeRegister2.png" alt="can't load" />
            </div>
            <div className="form__right form__right--register">
                <h2 className="form__right__title">REGISTER</h2>
                <div className="form__right__inputs form__right__inputs--register">
                    <label className="w-full d-b">Fullname</label>
                    <input type="text" name="fullname" className="w-full d-b input input-form" />
                    <label className="w-full d-b">Username</label>
                    <input type="text" name="username" className="w-full d-b input input-form" />
                    <label className="w-full d-b">Password</label>
                    <input type="password" name="password" className="w-full d-b input input-form" />
                    <label className="w-full d-b">Confim Password</label>
                    <input type="password" className="w-full d-b input input-form" /><label htmlFor=""></label>
                </div>
                <button name="submit" value="submited" type="submit" className="btn btn--submit btn--purple mr-t-20 pd-tb-10 w-full">
                    Register
                </button>
            </div>
        </form>
    );
}

export default Register;