import './Contact.css';
import React from 'react';
import { Helmet } from "react-helmet";
import NavBar from '../components/NavBar';

function Contact() {
	return (
		<div className="contact">
			<div className="contact__header">
				<NavBar isHome={ false } />
				<div className="contact__title">
					<p>Contact Us</p>
				</div>
			</div>
			<div className="contact__main">
				<Helmet>
					<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=618c8400-6867-43e5-9c72-ba58648e5688"> </script>
				</Helmet>
			</div>
		</div>
	);
}

export default Contact;
