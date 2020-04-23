import React from 'react';
import {Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import Navigation from "./components/common/Navigation";
import Community from "./components/pages/Community";
import Portfolio from "./components/pages/Portfolio";
import Profile from "./components/pages/Profile";

import 'semantic-ui-css/semantic.min.css';

function App() {
    return (
        <div className="App">
            <Navigation />
            <main>
                <Route exact path="/" component={Home}/>
                <Route exact path="/community" component={Community}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Route exact path="/profile" component={Profile}/>
            </main>
        </div>
    );
}

export default App;
