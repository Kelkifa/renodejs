import React from 'react';
import Navbar from './components/Navbars/Navbar';
// Views
import Home from './views/Home.js';
import Anime from './views/Anime.js';
import Document from './views/Document.js';
import Login from './views/Login.js';
import Register from './views/Register.js';
import Test from './views/Test.js';


import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App(props) {
    return (
        <div className="body">
            <Router>
                <Navbar></Navbar>
                <Switch>
                    <Route path="/document" component={Document} />
                    <Route path="/anime" component={Anime} />
                    <Route path="/test" component={Test} />
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/Register" component={Register} />
                    <Route exact path="/" component={Home} />
                    <Route>
                        <h1>Not match</h1>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;