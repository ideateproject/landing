import React from 'react';
import './Home.css';
import ideate_logo from '../img/vectors/ideate_logo.png';
import vector_left_up from '../img/vectors/Vector_1.png';
import vector_left_down from '../img/vectors/Vector_2.png';
import vector_right_up from '../img/vectors/Vector_3.png';
import vector_right_down from '../img/vectors/Vector_4.png';
import vector_middle_left from '../img/vectors/Vector_5.png';
import vector_middle_right from '../img/vectors/Vector_6.png';
import ellipse from '../img/vectors/Ellipse_1.png';
import expand_arrow from '../img/vectors/expand_arrow.png';
import rectangle from '../img/vectors/Rectangle.png';
import jacob from '../img/team/jacob_dodd.png';
import thomas from '../img/team/thomas_jankowski.png';
import adam from '../img/team/adam_kier.png';
import matt from '../img/team/matt_liu.png';
import chandler from '../img/team/chandler_malone.png';
import tammy from '../img/team/tammy.png';
import platform_img1 from '../img/platform/platform_img1.png';
import platform_img2 from '../img/platform/platform_img2.png';

function Home() {
	const history = useHistory();

	const loginroute = () => {
		let path = `/login`;
		history.push(path);
	};

	const teamroute = () => {
		let path = `/team#nav`;
		history.push(path);
	};

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
							<img
								onClick={homeroute}
								src={ideate_logo}
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
					<p className="top__main__tagline">Find internships & jobs in tech</p>
					<p className="middle__main__tagline"> or </p>
					<p className="bottom__main__tagline">Meet co founders, apply for funding, and launch your own startup</p>
					<div className="main__button">
						<button onClick={loginroute}>SIGN IN</button>
					</div>
				</div>
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
					<b>What we offer</b>
				</div>
				<div className="app__contentDesc">
					<p>
						Ideate <strong>connects</strong> you to the entire technology ecosystem
					</p>
				</div>
				<div className="app__contentParts">
					<div className="app__contentPartOne">
						<h2>Individuals</h2>
						<p>
							Find internships & jobs in tech or meet co founders,
							apply for funding, and launch your own startup
						</p>
					</div>
					<div className="app__contentPartTwo">
						<h2>Educators</h2>
						<p>
							Improve student success through real time analytics on your 
							students alongside a host of educational modules and internship 
							and job opportunities
						</p>
					</div>
					<div className="app__contentPartThree">
						<h2>Employers</h2>
						<p>
							Get access to diverse, pre vetted talent in tech, while decreasing 
							hiring times by 50% through our platform
						</p>
					</div>
				</div>
			</div>
			<div id="about" className="app__aboutUs">
				<div className="app__aboutUsTitle">
					<p>About Us</p>
				</div>
				<div className="app__aboutUsDescOne">
					<p>
						Ideate <strong>connects</strong> students with the top student
						entrepreneurs, engineers, designers, and scientists across the
						country.{' '}
					</p>
				</div>
				<div className="app__aboutUsDescTwo">
					<p>
						We help them <strong>maximize their potential</strong> by
						offering access to content from industry leaders,
						opportunities for funding, internships, and jobs.
					</p>
				</div>
				<div className="app__team">
					<div className="app__teamRowOne">
						<div className="app__memberOne">
							<img src={jacob} alt="Jacob Dodd" />
							<p>
								<strong>Jacob Dodd</strong>
							</p>
							<p>Head of Product</p>
						</div>
						<div className="app__memberTwo">
							<img src={thomas} alt="Thomas Jankowski" />
							<p>
								<strong>Thomas Jankowski</strong>
							</p>
							<p>Head of Digital</p>
						</div>
						<div className="app__memberThree">
							<img src={adam} alt="Adam Kier" />
							<p>
								<strong>Adam Krier</strong>
							</p>
							<p>Chief Technical Officer</p>
						</div>
					</div>
					<div className="app__teamRowTwo">
						<div className="app__memberFour">
							<img src={matt} alt="Matt Liu" />
							<p>
								<strong>Matt Liu</strong>
							</p>
							<p>Head of Business Development</p>
						</div>
						<div className="app__memberFive">
							<img src={chandler} alt="Chandler Malone" />
							<p>
								<strong>Chandler Malone</strong>
							</p>
							<p>Chief Executive Officer</p>
						</div>
						<div className="app__memberSix">
							<img src={tammy} alt="Tammy Clottey" />
							<p>
								<strong>Tammy Clottey</strong>
							</p>
							<p>Head of Special Projects</p>
						</div>
					</div>
				</div>
				<div className="app__meetTheTeamButton">
					<button onClick={teamroute}>Meet our team</button>
				</div>
			</div>
			<div className="app__rectangleSVG">
				<img src={rectangle} />
			</div>

			<div className="app__platformImages">
				<div className="app__platformimgdown">
					<img src={platform_img1} />
				</div>
				<div className="app__platformimgtop">
					<img src={platform_img2} />
				</div>
			</div>

			<div className="app__signup">
				<div className="app__signuptext">
					<p>Sign up for access to our beta.</p>
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
					<p>Support</p>
					<p>Privacy Policy</p>
					<p>Terms of Services</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
