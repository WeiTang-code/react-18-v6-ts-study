import React from "react";
import {Routes, Route} from "react-router-dom";
import routes from './router'
import {NavLink} from "react-router-dom";
import './index.css'
import Login from "./views/login";

export default function App(){
    return (
        <div>
            <h1>App...</h1>
            <NavLink to="login" className={({isActive}) => {return isActive? "nav-link": void 0}}>login</NavLink>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </div>
    )
}
