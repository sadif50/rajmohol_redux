import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {Route} from 'react-router-dom';

const Boody = () => {
    return(
        <div>
            <Route path='/' exact component={Home}/>
            <Route path='/menu' exact component={Menu}/>
            <Route path='/about' exact component={About}/>
            <Route path='/contact' exact component={Contact}/>
        </div>
    );
}

export default Boody;