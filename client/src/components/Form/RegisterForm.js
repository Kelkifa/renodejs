import React, { useState } from 'react';
import userApi from '../../api/userApi';

function Register(props) {
    const [formData, setFormData] = useState({
        fullname: null,
        username: null,
        password: null,
    });

    const formInputChangeHandler = (e) => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    }
    const submitHandler = async () => {
        try {
            const response = await userApi.register(formData);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="form">
            <div className="form__left">
                <img className="form__left__img form__left__img--register" src="/AnimeRegister2.png" alt="can't load" />
            </div>
            <div className="form__right form__right--register">
                <h2 className="form__right__title">REGISTER</h2>
                <div className="form__right__inputs form__right__inputs--register">
                    <label className="w-full d-b">Fullname</label>
                    <input onChange={formInputChangeHandler} type="text" name="fullname" className="w-full d-b input input-form" />
                    <label className="w-full d-b">Username</label>
                    <input onChange={formInputChangeHandler} type="text" name="username" className="w-full d-b input input-form" />
                    <label className="w-full d-b">Password</label>
                    <input onChange={formInputChangeHandler} type="password" name="password" className="w-full d-b input input-form" />
                    <label className="w-full d-b">Confim Password</label>
                    <input type="password" className="w-full d-b input input-form" />
                </div>
                <button onClick={submitHandler} value="submited" type="submit" className="btn btn--submit btn--purple mr-t-20 pd-tb-10 w-full">
                    Register
                </button>
            </div>
        </div>
    );
}

export default Register;