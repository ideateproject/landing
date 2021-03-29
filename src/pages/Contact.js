import './Contact.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import ideate_logo from '../img/vectors/ideate_logo.png';
import Header from '../components/Header'

function Contact() {
	return (
		<div className="contact">
			<div className="contact__header">
				<Header isHome={ false } />
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
