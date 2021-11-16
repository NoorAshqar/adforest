import React from 'react';
import "./navbar-2.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fasolid } from '@fortawesome/free-solid-svg-icons'

class Navbar2 extends React.Component {
    constructor() {
        super();
    };
    render() {
        return (
            <nav className="navbar-down">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="nav-list">
                                <ul>
                                    <li><img src="https://templates.scriptsbundle.com/addforest/demos/adforest/images/logo.png"></img></li>
                                    <li className="dropdownMenu-1">
                                        <a href="#">Home</a>
                                        <ul>
                                            <li>
                                                <a href="#">English</a>
                                            </li>
                                            <li>
                                                <a href="#">Swedish</a>
                                            </li>
                                            <li>
                                                <a href="#">Arabic</a>
                                            </li>
                                            <li>
                                                <a href="#">Russian</a>
                                            </li>
                                            <li>
                                                <a href="#">chinese</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdownMenu-2">
                                        <a href="#">Listing</a>
                                        {/* <ul>
                                            <li>
                                                <a href="#">English</a>
                                            </li>
                                            <li>
                                                <a href="#">Swedish</a>
                                            </li>
                                            <li>
                                                <a href="#">Arabic</a>
                                            </li>
                                            <li>
                                                <a href="#">Russian</a>
                                            </li>
                                            <li>
                                                <a href="#">chinese</a>
                                            </li>
                                        </ul> */}
                                    </li>
                                    <li className="dropdownMenu-3">
                                        <a href="#">Categories</a>
                                        {/* <ul>
                                            <li>
                                                <a href="#">English</a>
                                            </li>
                                            <li>
                                                <a href="#">Swedish</a>
                                            </li>
                                            <li>
                                                <a href="#">Arabic</a>
                                            </li>
                                            <li>
                                                <a href="#">Russian</a>
                                            </li>
                                            <li>
                                                <a href="#">chinese</a>
                                            </li>
                                        </ul> */}
                                    </li>
                                    <li className="dropdownMenu-4">
                                        <a href="#">dashboard</a>
                                        {/* <ul>
                                            <li>
                                                <a href="#">English</a>
                                            </li>
                                            <li>
                                                <a href="#">Swedish</a>
                                            </li>
                                            <li>
                                                <a href="#">Arabic</a>
                                            </li>
                                            <li>
                                                <a href="#">Russian</a>
                                            </li>
                                            <li>
                                                <a href="#">chinese</a>
                                            </li>
                                        </ul> */}
                                    </li>
                                    <li className="dropdownMenu-5">
                                        <a href="#">pages</a>
                                        {/* <ul>
                                            <li>
                                                <a href="#">English</a>
                                            </li>
                                            <li>
                                                <a href="#">Swedish</a>
                                            </li>
                                            <li>
                                                <a href="#">Arabic</a>
                                            </li>
                                            <li>
                                                <a href="#">Russian</a>
                                            </li>
                                            <li>
                                                <a href="#">chinese</a>
                                            </li>
                                        </ul> */}
                                    </li>
                                    <li className="dropdownMenu-6">
                                        <a href="#">drop down</a>
                                        {/* <ul>
                                            <li>
                                                <a href="#">English</a>
                                            </li>
                                            <li>
                                                <a href="#">Swedish</a>
                                            </li>
                                            <li>
                                                <a href="#">Arabic</a>
                                            </li>
                                            <li>
                                                <a href="#">Russian</a>
                                            </li>
                                            <li>
                                                <a href="#">chinese</a>
                                            </li>
                                        </ul> */}
                                    </li>
                                    <li>
                                        <a href="#">contact</a>
                                    </li>
                                    <li><button>post free ad</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </nav>
        );
    }
};
export default Navbar2;
