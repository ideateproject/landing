import React from 'react';

class navBar extends React.Component{
    render () {
       return (<div id="nav" className="app__navbar">
            <ul className="app__navbarLeft">
                <li>
                    <img
                        onClick={this.props.homeroute}
                        src={this.props.ideate_logo}
                        alt="The Ideate Project Logo"
                    />
                </li>
                <li>
                    <a href="#descriptions">For Students</a>
                </li>
                <li>
                    <a href="#descriptions">For Universities</a>
                </li>
                <li>
                    <a href="#descriptions">For Employers</a>
                </li>
            </ul>
            <ul className="app__navbarRight">
                <li>
                    <a href="#about">About Us</a>
                </li>
                <li>
                    <a href="#contact">Contact Us</a>
                </li>
                <li>
                    <button className="signin__btn">
                        <a href="https://staging.ideateproject.org">SIGN IN</a>
                    </button>
                </li>
            </ul>
        </div>
        );
    }
}

export default navBar;