import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import './Home.css';
import ideate_logo from '../img/vectors/ideate_logo.png';
import vector_left_up from '../img/vectors/Vector_1.png';
import vector_left_down from '../img/vectors/Vector_2.png';
import vector_right_up from '../img/vectors/Vector_3.png';
import vector_right_down from '../img/vectors/Vector_4.png';
import vector_middle_left from '../img/vectors/Vector_5.png';
import vector_middle_right from '../img/vectors/Vector_6.png';
import network from '../img/icons/network.png'
import users from '../img/icons/users.png'
import school from '../img/icons/school.png'
import ellipse from '../img/vectors/Ellipse_1.png';
import expand_arrow from '../img/vectors/expand_arrow.png';
import rectangle from '../img/vectors/Rectangle.png';
// import jacob from '../img/team/jacob_dodd.png';
// import thomas from '../img/team/thomas_jankowski.png';
// import adam from '../img/team/adam_kier.png';
// import matt from '../img/team/matt_liu.png';
// import chandler from '../img/team/chandler_malone.png';
// import tammy from '../img/team/tammy.png';
import platform_img1 from '../img/platform/platform_img1.png';
import platform_img2 from '../img/platform/platform_img2.png';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Home() {
	const history = useHistory();

	const loginroute = () => {
		let path = `/login`;
		history.push(path);
	};

	// const teamroute = () => {
	// 	let path = `/team#nav`;
	// 	history.push(path);
	// };

	const homeroute = () => {
		let path = `/`;
		history.push(path);
	};

	return (
		<div className="app">
			<div className="app__heading">
				<div id="nav" className="app__navbar">
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
							<a href="#descriptions">For Individuals</a>
						</li>
						<li>
							<a href="#descriptions">For Educators</a>
						</li>
						<li>
							<a href="#descriptions">For Employers</a>
						</li>
					</ul>
					<ul className="app__navbarRight">
						<li>
							<a href="#about">About Us</a>
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
				{/* adding vector images */}
				<img
					src={vector_left_up}
					alt="The vector on the top left"
					className="vector_left_up"
				/>{' '}
				<img
					src={vector_left_down}
					alt="The vector on the bottom left"
					className="vector_left_down"
				/>{' '}
				<img
					src={vector_right_up}
					alt="The vector on the top right"
					className="vector_right_up"
				/>{' '}
				<img
					src={vector_right_down}
					alt="The vector on the bottom right"
					className="vector_right_down"
				/>{' '}
				{/* finished adding vector images */}
				<div className="app__name">
					<p className="main__title">The Ideate Project</p>
					<p className="top__main__tagline">Ideate bridges the talent gap in the technology industry by
					 providing access to internships and jobs to underrepresented individuals in tech. </p>
					
					<div className="main__button">
						<button onClick={loginroute}>SIGN IN</button>
					</div>
				</div>
				<a href="#descriptions">
					<img src={ellipse} alt="White Circle" className="white__ellipse" />
					<img
						src={expand_arrow}
						alt="Down Arrow"
						className="expand__arrowOne"
					/>
					<img
						src={expand_arrow}
						alt="Down Arrow"
						className="expand__arrowTwo"
					/>
				</a>
			</div>
			<div className="app__about">
				<div className="app__aboutText">
					<div className="app__title">
						<p>What is it</p>
					</div>
					<div className="app__descOne">
						<p>
							Ideate <strong>connects</strong> students with the top
							student entrepreneurs, engineers, designers, and scientists
							across the country.{' '}
						</p>
					</div>
					<div className="app__descTwo">
						<p>
							We help them <strong>maximize their potential</strong> by
							offering access to content from industry leaders,
							opportunities for funding, internships, and jobs.
						</p>
					</div>
				</div>
			</div>
			<div className="app__content">
				<img
					src={vector_middle_left}
					alt="The vector on the middle left"
					className="vector_middle_left"
				/>
				<img
					src={vector_middle_right}
					className="vector_middle_right"
					alt="The vector on the middle right"
				/>
				<div id="descriptions" className="app__contentTitle">
					<b>How does Ideate work?</b>
				</div>
				<div className="app__contentDesc">
				
				</div>
				<Container>
					<Row>
						<Col>
							<div className="center_image">
								<img
									src={users}
									className="network"
									alt="Networking"
								/>
							</div>
							<div className="platform_description">
								<h2>1. Create an Ideate account</h2>
								<p>
								Complete your Ideate profile and get access to a community of fellow founders, 
								software engineers, ui/ux desigers and certifications. 
								</p>
							</div>
						</Col>
						<Col>
							<div className="center_image">
								<img
									src={school}
									className="network"
									alt="Networking"
								/>
							</div>
							<div className="platform_description">
								<h2>2. Complete Certifications</h2>
								<p>
								Complete certifications to show you’ve mastered various skills and differentiate
								 yourself from other candidates.  
								</p>
							</div>
						</Col>
						<Col>
							<div className="center_image">
								<img
									src={network}
									className="network"
									alt="Networking"
								/>
							</div>
							<div className="platform_description">
								<h2>3. Find exclusive jobs and internships</h2>
								<p>
								Apply for internships, jobs, and funding opportunities posted by
								 tech companies and investors looking to source specifically from Ideate.  
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<Helmet>
				<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=618c8400-6867-43e5-9c72-ba58648e5688"> </script>
			</Helmet>
			<div id="about" className="app__aboutUs">
				<div className="app__aboutUsTitle">
					<p>Our Mission</p>
				</div>
				<div className="app__aboutUsDescOne">
					<p>
					In the 1980’s, middle- and lower-income Americans were responsible for over 40% of the United States' GDP. Today, middle- and lower-income Americans account for less than 20% of the national GDP, while 53% of college graduates currently end up underemployed 6 months after graduation. 
					<p>Meanwhile, the technology sector is growing faster than ever, creating jobs and generational wealth at a rate we haven’t seen in our lifetimes. Unfortunately, there is currently not enough talent to support the technology industry’s growth, as we are set to have an 85 million person talent shortage by 2030.  </p>
					<p>Ideate is here to bridge this gap by providing access to the necessary credentials for individuals to get jobs in the tech industry ultimately gaining access to economic mobility and the American Dream, while helping technology companies address the ever-widening talent gap in the process.  </p>
					</p>
				</div>
				{/* <Container fluid>
					<Row className="justify-content-md-center">
						<Col>
							<div className="center_image">
								<img src={tammy} alt="Tammy Clottey" />
								<div className="team_description">
									<p>
										<strong>Tammy Clottey</strong>
									</p>
									<p>Head of Special Projects</p>
								</div>
							</div>
						</Col>
						<Col>
							<div className="center_image">
								<img src={jacob} alt="Jacob Dodd" />
								<div className="team_description">
									<p>
										<strong>Jacob Dodd</strong>
									</p>
									<p>Head of Product</p>
								</div>
							</div>
						</Col>
						<Col>
							<div className="center_image">
								<img src={thomas} alt="Thomas Jankowski" />
								<div className="team_description">
									<p>
										<strong>Thomas Jankowski</strong>
									</p>
									<p>Head of Digital</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
				<Container fluid>
					<Row className="justify-content-md-center">
						<Col>
							<div className="center_image">
								<img src={adam} alt="Adam Kier" />
								<div className="team_description">
									<p>
										<strong>Adam Krier</strong>
									</p>
									<p>Chief Technical Officer</p>
								</div>
							</div>
						</Col>
						<Col>
							<div className="center_image">
								<img src={matt} alt="Matt Liu" />
								<div className="team_description">
									<p>
										<strong>Matt Liu</strong>
									</p>
									<p>Head of Business Development</p>
								</div>
							</div>
						</Col>
						<Col>
							<div className="center_image">
								<img src={chandler} alt="Chandler Malone" />
								<div className="team_description">
									<p>
										<strong>Chandler Malone</strong>
									</p>
									<p>Chief Executive Officer</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container> */}
				{/* <div className="app__meetTheTeamButton">
					<button onClick={teamroute}>Meet our team</button>
				</div> */}
			</div>
			<div className="app__rectangleSVG">
				<img src={rectangle} alt="rectangle" />
			</div>

			<div className="app__platformImages">
				<div className="app__platformimgdown">
					<img src={platform_img1} alt="Platform 1" />
				</div>
				<div className="app__platformimgtop">
					<img src={platform_img2} alt="Platform 2" />
				</div>
			</div>

			<div className="app__signup">
				<div className="app__signuptext">
					<p>Sign up for access to Ideate.</p>
					<p>
						Share your ideas to find collaborators and comment on the
						ideas of others.
					</p>
				</div>
				<div className="app__signupbtn">
					<button onClick={loginroute}>SIGN IN</button>
				</div>
			</div>

			<div id="contact" className="app__footer">
				<div className="app__footerleft">
					<img src={ideate_logo} alt="The Ideate Project Logo" />
					<p>Copyright © 2021 Ideate Project. All rights reserved.</p>
				</div>
				<div className="app__footerright">
					{/*<Link to="/Contact">Contact Us</Link>*/}
					<Link to="/Privacy">Privacy Policy</Link>
					<Link to="/Terms">Terms of Services</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
