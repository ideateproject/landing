import './Team.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ideate_logo from '../img/vectors/ideate_logo.png';
import jacob from '../img/team/jacob_dodd.png';
import thomas from '../img/team/thomas_jankowski.png';
import adam from '../img/team/adam_kier.png';
import matt from '../img/team/matt_liu.png';
import chandler from '../img/team/chandler_malone.png';
import tammy from '../img/team/tammy.png';
import vector_left from '../img/vectors/vector_team.png';

function Team() {
	const history = useHistory();

	const loginroute = () => {
		let path = `/login`;
		history.push(path);
	};

	const homeroute = () => {
		let path = `/`;
		history.push(path);
	};

	window.scrollTo(0, 0);

	return (
		<div className="team">
			<div className="team__header">
				<div id="nav" className="team__navbar">
					<ul className="team__navbarLeft">
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
					<ul className="team__navbarRight">
						<li>
							<a href="/#about">About Us</a>
						</li>
						<li>
							<a href="/#contact">Contact Us</a>
						</li>
						<li>
							<button className="team__signinbtn" onClick={loginroute}>
								SIGN IN
							</button>
						</li>
					</ul>
				</div>
				<div className="team__title">
					<p>Meet our team</p>
				</div>
			</div>
			<img className="vector_left" src={vector_left} alt="A Vector" />
			<div className="team__main">
				<div className="team__descOne">
					<div className="team__descimg">
						<img src={jacob} alt="Jacob Dodd" />
						<p>Jacob Dodd</p>
					</div>
					<p>
						Jacob Dodd is native of Kansas City, MO and is the Technical
						Lead and Co-Founder of Ideate. Jacob has been making software
						for 6 years. Previously, he lead a team of engineers to
						construct a fully functional research satellite and
						subsequently spent the summer studying astrophysics at MIT.
						With a passion for service, Jacob has been named an Aspen
						Institute Young Leaders Fellow where he worked to provide
						resources to underfunded primary schools in St. Louis during
						the Covid-19 Pandemic of 2020. Jacob is a member of the
						prestigious John B. Ervin and Jackie Robinson Foundation
						Scholarships.
					</p>
				</div>
				<div className="team__descTwo">
					<div className="team__descimg">
						<img src={thomas} alt="Thomas Jankowski" />
						<p>Thomas Jankowski</p>
					</div>
					<p>
						Thomas originally hails from Southern California but has lived
						and worked throughout the world, including serving refugees
						through the Red Cross in Spain, consulting for a climate
						finance company in South Africa, developing digital tools for
						a mayoral campaign, and working for a venture capital firm in
						Tulsa, Oklahoma. In his spare time, Thomas does product
						management work, collects sneakers, and reads novels.
					</p>
				</div>
				<div className="team__descThree">
					<div className="team__descimg">
						<img src={adam} alt="Adam Krier" />
						<p>Adam Krier</p>
					</div>
					<p>
						As a seasoned Solutions Architect, Digital Transformation,
						Data Strategist and now, CTO with almost 20 years of
						experience, Adam has helped increase profits through
						productivity improvements leveraging knowledge transfer
						including Systems Analysis and Design, Database
						Design/Implementation, and Systems Engineering strategies.
						<br />
						Outside of work, I invest time with family and friends. You'll
						find me enjoying nature during downtime and watching college
						sports (GO POKES).
					</p>
				</div>
				<div className="team__descFour">
					<div className="team__descimg">
						<img src={matt} alt="Matt Liu" />
						<p>Matt Liu</p>
					</div>
					<p>
						Matt joined Ideate in 2020 and is the Head of Business
						Development. Matt is primarily focused on creating
						partnerships and bringing new companies to the platform to
						engage with our talent. <br />
						Prior to joining Ideate, Matt worked in finance at Citibank
						before moving into the startup space and gaining experience at
						accelerators in both St. Louis and Seattle, respectively.{' '}
						<br />
						Matt graduated from Washington University in St. Louis with a
						double major in Finance and Healthcare Management and was a
						member of the varsity swim team.
					</p>
				</div>
				<div className="team__descFive">
					<div className="team__descimg">
						<img src={chandler} alt="Chandler Malone" />
						<p>Chandler Malone</p>
					</div>
					<p>
						Chandler is a 3 time entrepreneur who built and sold two
						businesses that he started in college before working full time
						as an investor in the venture capital space. Chandler
						currently serves as an Investor in Residence at Washington
						University in St. Louis, a Venture Partner at Atento Capital,
						and board member at Urban Coders Guild.
					</p>
				</div>
				<div className="team__descSix">
					<div className="team__descimg">
						<img src={tammy} alt="Tammy Clottey" />
						<p>Tammy Clottey</p>
					</div>
					<p>
						Tammy is a multi-faceted professional with a background in leadership, 
						strategic planning and problem solving. As a proven change agent with 
						a diverse set of experiences, Tammy possesses the ability to engage in 
						detail while maintaining big-picture objectives. Also known to be 
						proactive and results-oriented, Tammy has been consistently recognized for 
						affecting positive change and enhancing the projects, programs and organizations 
						she's affiliated with.	
					</p>
				</div>
			</div>
			<div className="team__footer">
				<div className="team__footerleft">
					<img src={ideate_logo} alt="The Ideate Project Logo" />
					<p>Copyright © 2021 Ideate Project. All rights reserved.</p>
				</div>
				<div className="team__footerright">
					<p>Support</p>
					<p onClick={privacyroute}>Privacy Policy</p>
					<p>Terms of Services</p>
				</div>
			</div>
		</div>
	);
}

export default Team;
