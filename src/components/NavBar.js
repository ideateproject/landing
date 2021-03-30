import React from 'react';
import { useHistory } from 'react-router-dom';

import './NavBar.css'
import ideate_logo from '../img/vectors/ideate_logo.png';

const NavBar = ({ isHome }) => {
    const history = useHistory();

	const loginroute = () => {
		let path = `/login`;
		history.push(path);
	};

	const homeroute = () => {
		let path = `/`;
		history.push(path);
	};

    // const teamroute = () => {
	// 	let path = `/team#nav`;
	// 	history.push(path);
	// };

    return (
        <div id="nav" className={`app__navbar ${ isHome ? 'home__nav' : '' }`}>
            <ul className="app__navbarLeft">
                <li>
                    <a href="/#">
                        <img
                            onClick={homeroute}
                            src={ideate_logo}
                            alt="The Ideate Project Logo"
                        />
                    </a>
                </li>
                <li>
                    <a href="/#descriptions">For Individuals</a>
                </li>
                <li>
                    <a href="/#descriptions">For Educators</a>
                </li>
                <li>
                    <a href="/#descriptions">For Employers</a>
                </li>
            </ul>
            <ul className="app__navbarRight">
                <li>
                    <a href="/#about">About Us</a>
                </li>
                {/*<li>
                    <a href="#contact">Contact Us</a>
                </li>*/}
                <li>
                    <button className="signin__btn" onClick={loginroute}>
                        SIGN IN
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
