import "./Sidebar.css";
import logo from "../../assets/logo.png";
import React from "react";
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="" id="sidebar">

            <div className="sidebar_title">
                <div className="sidebar_img">
                    <img src={logo} alt="logo" />
                </div>
            </div>

            <div className="sidebar_menu">

                <div className="sidebar_link">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <Link to="/">Dashboard</Link>
                </div>
                
                <div className="sidebar_link">
                    <i className="fa fa-money" aria-hidden="true"></i>
                    <Link to="/detalhes">Detalhes</Link>
                </div>
                
                <div className="sidebar_link">
                    <i className="fa fa-user"></i>
                    <Link to="/account">Account</Link>
                </div>
               

                <div className="sidebar_link">
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Log out</a>
                </div>

            </div>

        </div>
    ) 
}

export default Sidebar;