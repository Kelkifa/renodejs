import './Navbar.scss';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaWindowClose } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthContextProvider';
import UserButton from '../Toolbar/UserButton';
// import PropTypes from 'prop-types';

// Navbar.propTypes = {

// };

function Navbar(props) {
    const [showBtn, setShowBtn] = useState(window.innerWidth <= 420 ? true : false);      //false: show right content + hide icon button 
    const [toggleBtnDisplay, setToggleBtnDisplay] = useState(false);      //false: 3 lines, true: [x]
    const [showRight, setShowRight] = useState(window.innerWidth <= 420 ? false : true)   //true: show, false: hide

    const { authState } = useContext(AuthContext);

    useEffect(() => {
        if (window.innerWidth <= 540) {
            setShowBtn(true);
            setShowRight(false);
            // setToggleBtnDisplay(false);
        }
        else {
            setShowRight(true)
            setShowBtn(false);
            // setToggleBtnDisplay(true);
        }
    }, [])

    const handlerShowBtnARight = () => {
        if (window.innerWidth <= 540) {
            setShowBtn(true);
            // setToggleBtnDisplay(false);
            setShowRight(false);
        }
        else {
            setShowBtn(false);
            // setToggleBtnDisplay(true);
            setShowRight(true);
        };
    }
    const handlerClickMenuIcon = () => {
        if (window.innerWidth <= 540) {
            setShowRight(!showRight);
        }
        setToggleBtnDisplay(!toggleBtnDisplay);
    }

    window.addEventListener('resize', handlerShowBtnARight);

    return (
        <div className="navbar">
            <div className="navbar__left">
                <Link to="/home" style={{ textDecoration: "none" }} onClick={handlerClickMenuIcon} className="navbar__link" >
                    <h2 className="navbar__item">HOME</h2>
                </Link>
                {showBtn ?
                    <div className="navbar__item__MenuIcon">
                        {toggleBtnDisplay ?
                            <FaWindowClose className="navbar__item__icon" onClick={handlerClickMenuIcon} color="white" size="27px"></FaWindowClose> :
                            <FiMenu className="navbar__item__icon" onClick={handlerClickMenuIcon} color="white" size="30px"></FiMenu>
                        }


                    </div> : ""}
            </div>
            {showRight ?
                <div className="navbar__right">
                    <Link to='/Test' style={{ textDecoration: "none" }} onClick={handlerClickMenuIcon} className="navbar__link">
                        <h3 className="navbar__item">
                            Test
                                     </h3>
                    </Link >
                    <Link to='/Anime' style={{ textDecoration: "none" }} onClick={handlerClickMenuIcon} className="navbar__link">
                        <h3 className="navbar__item">
                            Anime
                                     </h3>
                    </Link>
                    <Link to='/document' style={{ textDecoration: "none" }} onClick={handlerClickMenuIcon} className="navbar__link" >
                        <h3 className="navbar__item">
                            Document
                                     </h3>
                    </Link>
                    <Link to='/word' style={{ textDecoration: "none" }} onClick={handlerClickMenuIcon} className="navbar__link" >
                        <h3 className="navbar__item">
                            Word
                                     </h3>
                    </Link>

                    {authState.isAuthenticated ?
                        <div className="navbar__item">
                            <UserButton authData={authState} />
                        </div> :
                        <Link to='/login' style={{ textDecoration: "none" }} onClick={handlerClickMenuIcon} className="navbar__link" >
                            <h3 className="navbar__item navbar__item--login">
                                Sign In
                                  </h3>
                        </Link>
                    }

                </div> : ""
            }

        </div >
    );
}

export default Navbar;