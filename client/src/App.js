import React from 'react';
import AuthContextProvider from './contexts/AuthContextProvider';

// Views
import Navbar from './components/Navbars/Navbar';
import Home from './views/Home.js';
import Anime from './views/Anime';
import Document from './views/Document.js';
import Login from './views/Login.js';
import Register from './views/Register.js';
import Test from './views/Test.js';
import Word from './views/Word.jsx';



import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App(props) {
    return (
        <div className="body">
            <AuthContextProvider>
                <Router>
                    <Navbar></Navbar>
                    <Switch>
                        <Route path="/document" component={Document} />
                        <Route path="/anime" component={Anime} />
                        <Route path="/test" component={Test} />
                        <Route path="/home" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/Register" component={Register} />
                        <Route path="/word" component={Word} />
                        <Route exact path="/" component={Home} />
                        <Route>
                            <h1>Not match</h1>
                        </Route>
                    </Switch>
                </Router>
            </AuthContextProvider>
        </div>
    );
}

export default App;