import './Navbar.scss';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContextProvider';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const { authState } = useContext(AuthContext);
    console.log(authState);

    var useLogined = 'Sign In';
    if (authState.user) {
        if (authState.user.fullname) useLogined = authState.user.fullname;
    }
    return (
        <div id="Navbar" className="Navbar">
            <div className="Navbar__list">
                <Link to="/home" style={{ textDecoration: "none" }}>
                    <h1 className="Navbar__list__h1">Home</h1>
                </Link>
            </div>
            <div className="Navbar__list">
                <Link to="/Test" style={{ textDecoration: "none" }}>
                    <h2 className="Navbar__list__h2">Test</h2>
                </Link>
                <Link to="/anime" style={{ textDecoration: "none" }}>
                    <h2 className="Navbar__list__h2">Animes</h2>
                </Link>
                <Link to="/document" style={{ textDecoration: "none" }}>
                    <h2 className="Navbar__list__h2">Documents</h2>
                </Link>
                <Link to="/word" style={{ textDecoration: "none" }}><h2 className="Navbar__list__h2">Words</h2>
                </Link>
                <Link to="/login" style={{ textDecoration: "none" }}>
                    <h2 className="Navbar__list__h2 Navbar__list__h2--outline">{useLogined}</h2>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;









// // class Navbar extends React.Component {


// //     clickHandler(link) {
// //         document.location = link;
// //     }
// //     render() {
// //         return (
// //             <div id="Navbar" className="Navbar">
// //                 <div className="Navbar__list">
// //                     <Link to="/home" style={{ textDecoration: "none" }}>
// //                         <h1 className="Navbar__list__h1">Home</h1>
// //                     </Link>
// //                 </div>
// //                 <div className="Navbar__list">
// //                     <Link to="/Test" style={{ textDecoration: "none" }}>
// //                         <h2 className="Navbar__list__h2">Test</h2>
// //                     </Link>
// //                     <Link to="/anime" style={{ textDecoration: "none" }}>
// //                         <h2 className="Navbar__list__h2">Animes</h2>
// //                     </Link>
// //                     <Link to="/document" style={{ textDecoration: "none" }}>
// //                         <h2 className="Navbar__list__h2">Documents</h2>
// //                     </Link>
// //                     <Link to="/word" style={{ textDecoration: "none" }}><h2 className="Navbar__list__h2">Words</h2>
// //                     </Link>
// //                     <Link to="/login" style={{ textDecoration: "none" }}>
// //                         <h2 className="Navbar__list__h2 Navbar__list__h2--outline">Sign in</h2>
// //                     </Link>
// //                 </div>
// //             </div>
// //         )
// //     }
// // }

// export default Navbar;