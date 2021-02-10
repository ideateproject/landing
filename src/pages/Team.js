import './Team.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ideate_logo from '../img/vectors/ideate_logo.png';
import jacob from '../img/team_page/jacob_dodd_yl.png';
import thomas from '../img/team_page/thomas_jankowski_yl.png';
import adam from '../img/team_page/adam_kier_yl.png';
import matt from '../img/team_page/matt_liu_yl.png';
import chandler from '../img/team_page/chandler_malone_yl.png';
import david from '../img/team_page/david_stewart_yl.png';
import vector_left from '../img/vectors/vector_team.png';

function Team() {
	const history = useHistory();

	const loginroute = () => {
		let path = `/signin`;
		history.push(path);
	};

	const homeroute = () => {
		let path = `/`;
		history.push(path);
	};

	return (
		<div className="team">
			<div className="team__header">
				<div className="team__navbar">
					<ul className="team__navbarLeft">
						<li>
							<img
								onClick={homeroute}
								src={ideate_logo}
								alt="The Ideate Project Logo"
							/>
						</li>
						<li>
							<a href="#">For Students</a>
						</li>
						<li>
							<a href="#">For Universities</a>
						</li>
						<li>
							<a href="#">For Employers</a>
						</li>
					</ul>
					<ul className="team__navbarRight">
						<li>
							<a href="#">About Us</a>
						</li>
						<li>
							<a href="#">Contact Us</a>
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
						<img src={adam} alt="Adam Kier" />
						<p>Adam Kier</p>
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
						<img src={david} alt="David Stewart" />
						<p>David Stewart</p>
					</div>
					<p>
						David is a lifelong Oklahoman and the middle child of 5
						siblings. He graduated from OSU with a degree in accounting,
						but soon after discovered a love of coding and has been doing
						front-end web development for almost 6 years. When David isn't
						not coding he enjoys hiking, traveling, video games, and
						exploring new hobbies.
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
					<p>Privacy Policy</p>
					<p>Terms of Services</p>
				</div>
			</div>
		</div>
	);
}

export default Team;
