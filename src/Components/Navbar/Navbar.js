import React from "react";
import "./Navbar.css";
function Navbar() {
    return (
        <div className="navbar">
            <img
                className="logo"
                src="https://raw.githubusercontent.com/debschaan/netflix-clone/37669424c8c0173f10c1f3cd619d49d21e2bfb6b/assets/img/Vector__3_.svg"
                alt="logo"
            />
            <ul class="primary-menu--list">
                <li className="primary-menu--item">
                    <a href="#">Home</a>
                </li>
                <li className="primary-menu--item">
                    <a href="#">Series</a>
                </li>
                <li className="primary-menu--item">
                    <a href="#">Movies</a>
                </li>
                <li className="primary-menu--item">
                    <a href="#">Trending</a>
                </li>
                <li className="primary-menu--item">
                    <a href="#">My list</a>
                </li>
            </ul>
            <ul className="secondary-menu--list">
                <li className="secondary-menu--item">
                    <a href="#">
                        <i className="fa-solid fa-search"></i>
                    </a>
                </li>
                <li className="secondary-menu--item">
                    <a href="#">
                        <i className="fa-solid fa-bell"></i>
                    </a>
                </li>
                <li className="secondary-menu--item user">
                    <span className="secondary-menu--user-icon" data-user="User's icon">
                        <a href="#"></a>
                    </span>
                    <a href="#">
                        <i className="fa-solid fa-caret-down"></i>
                    </a>
                </li>
            </ul>
               </div>
    );
}

export default Navbar;
