import './Contact.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import ideate_logo from '../img/vectors/ideate_logo.png';

function Contact() {
	const history = useHistory();

	const loginroute = () => {
		let path = `/login`;
		history.push(path);
	};

	const homeroute = () => {
		let path = `/`;
		history.push(path);
	};

	return (
		<div className="contact">
			<div className="contact__header">
				<div id="nav" className="contact__navbar">
					<ul className="contact__navbarLeft">
						<li>
							<img
								onClick={homeroute}
								src={ideate_logo}
								alt="The Ideate Project Logo"
							/>
						</li>
						<li>
							<a href="/#descriptions">For Students</a>
						</li>
						<li>
							<a href="/#descriptions">For Universities</a>
						</li>
						<li>
							<a href="/#descriptions">For Employers</a>
						</li>
					</ul>
					<ul className="contact__navbarRight">
						<li>
							<a href="/#about">About Us</a>
						</li>
						<li>
							<a href="/#contact">Contact Us</a>
						</li>
						<li>
							<button className="contact__signinbtn" onClick={loginroute}>
								SIGN IN
							</button>
						</li>
					</ul>
				</div>
				<div className="contact__title">
					<p>Contact Us</p>
				</div>
			</div>
			<div className="contact__main">
				<Helmet>
					<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=618c8400-6867-43e5-9c72-ba58648e5688"> </script>
				</Helmet>
			</div>
				
			<div className="contact__footer">
				<div className="contact__footerleft">
					<img src={ideate_logo} alt="The Ideate Project Logo" />
					<p>Copyright © 2021 Ideate Project. All rights reserved.</p>
				</div>
				<div className="contact__footerright">
					{/*<Link to="/Contact">Contact Us</Link>*/}
					<Link to="/Privacy">Privacy Policy</Link>
					<Link to="/Terms">Terms of Services</Link>
				</div>
			</div>
		</div>
	);
}

export default Contact;
