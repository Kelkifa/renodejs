import './Navbar.scss';
import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContextProvider';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaWindowClose } from "react-icons/fa";

// import PropTypes from 'prop-types';

// Navbar.propTypes = {

// };

function Navbar(props) {
    const [showBtn, setShowBtn] = useState(window.innerWidth <= 420 ? true : false);      //false: show right content + hide icon button 
    const [showRight, setShowRight] = useState(false);
    const [toggleBtn, setToggleBtn] = useState(false);      //false: 3 lines and hide right content, true: [x] and show right content

    useEffect(() => {
        if (window.innerWidth <= 540) {
            setShowBtn(true);
            setShowRight(true);
        }
        else setShowBtn(false);
    }, [])

    const handlerShowBtnARight = () => {
        if (window.innerWidth <= 540) {
            setShowBtn(true);
            setToggleBtn(false);
        }
        else {
            setShowBtn(false);
            setToggleBtn(true);
        };
    }
    const HandlerClickMenuIcon = () => {
        setToggleBtn(!toggleBtn);
    }

    window.addEventListener('resize', handlerShowBtnARight);

    return (
        <div className="navbar">
            <div className="navbar__left">
                <Link to="/home" style={{ textDecoration: "none" }} className="navbar__link" >
                    <h2 className="navbar__item">HOME</h2>
                </Link>
                {showBtn ?
                    <div className="navbar__item__MenuIcon">
                        {toggleBtn ?
                            <FaWindowClose className="navbar__item__icon" onClick={HandlerClickMenuIcon} color="white" size="27px"></FaWindowClose> :
                            <FiMenu className="navbar__item__icon" onClick={HandlerClickMenuIcon} color="white" size="30px"></FiMenu>
                        }


                    </div> : ""}
            </div>

            {toggleBtn ?
                <div className="navbar__right">
                    <Link to='/Test' style={{ textDecoration: "none" }} className="navbar__link">
                        <h3 className="navbar__item">
                            Test
                            </h3>
                    </Link >
                    <Link to='/Anime' style={{ textDecoration: "none" }} className="navbar__link">
                        <h3 className="navbar__item">
                            Anime
                            </h3>
                    </Link>
                    <Link to='/document' style={{ textDecoration: "none" }} className="navbar__link" >
                        <h3 className="navbar__item">
                            Document
                            </h3>
                    </Link>
                    <Link to='/word' style={{ textDecoration: "none" }} className="navbar__link" >
                        <h3 className="navbar__item">
                            Word
                            </h3>
                    </Link>
                    <Link to='/login' style={{ textDecoration: "none" }} className="navbar__link" >
                        <h3 className="navbar__item navbar__item--login">
                            Sign In
                            </h3>
                    </Link>
                </div> :
                ""
            }
        </div >
    );
}

export default Navbar;









// function Navbar(props) {
//     const { authState } = useContext(AuthContext);

//     var useLogined = 'Sign In';
//     if (authState.user) {
//         if (authState.user.fullname) useLogined = authState.user.fullname;
//     }
//     return (
//         <div id="Navbar" className="Navbar">
//             <div className="Navbar__list">
//                 <Link to="/home" style={{ textDecoration: "none" }}>
//                     <h1 className="Navbar__list__h1"><i class="fa-solid fa-kiwi-bird"></i>Home</h1>
//                 </Link>
//             </div>
//             <div className="Navbar__list">
//                 <Link to="/Test" style={{ textDecoration: "none" }}>
//                     <h2 className="Navbar__list__h2">Test</h2>
//                 </Link>
//                 <Link to="/anime" style={{ textDecoration: "none" }}>
//                     <h2 className="Navbar__list__h2">Animes</h2>
//                 </Link>
//                 <Link to="/document" style={{ textDecoration: "none" }}>
//                     <h2 className="Navbar__list__h2">Documents</h2>
//                 </Link>
//                 <Link to="/word" style={{ textDecoration: "none" }}><h2 className="Navbar__list__h2">Words</h2>
//                 </Link>
//                 <Link to="/login" style={{ textDecoration: "none" }}>
//                     <h2 className="Navbar__list__h2 Navbar__list__h2--outline">{useLogined}</h2>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default Navbar;
