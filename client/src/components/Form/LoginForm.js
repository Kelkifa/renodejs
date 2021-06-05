import './Form.scss';
import { Link } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { AuthContext } from '../../contexts/AuthContextProvider';

function LoginForm(props) {
    /** Ref */
    const usernameRef = useRef();
    const passwordRef = useRef();

    /** Context */
    const userContext = useContext(AuthContext);


    /** Event Handler */
    async function handlerSubmit() {
        const [username, password] = [usernameRef.current.value, passwordRef.current.value]
        try {
            const response = await userContext.loginUser({ username, password });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    /** Render */

    return (
        <div className="form">
            <div className="form__left">
                <img className="form__left__img form__left__img--login" src="/anime.png" alt="can't load" />
            </div>
            <div className="form__right form__right--login">
                <h2 className="form__right__title">WELCOME BACK</h2>
                <div className="form__right__inputs form__right__inputs--login">
                    <label className="w-full d-b">USERNAME</label>
                    <input name="username" className="w-full d-b input input-form"
                        type="text" ref={usernameRef} />
                    <label className="w-full d-b">PASSWORD</label>
                    <input name="password" className="w-full d-b input input-form"
                        type="password" ref={passwordRef} />
                </div>
                <button className="btn btn--submit btn--purple mr-t-20 pd-tb-15 w-full"
                    name="submit" value="submited"
                    onClick={handlerSubmit} >
                    Login
                </button>
                <div className="form__right__notify w-full">
                    <span className="form__right__notify__item--span">Need a account?  </span>
                    <Link to="/register" style={{ textDecorationColor: "white" }}>
                        <span className="form__right__notify__item--a">Register</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;