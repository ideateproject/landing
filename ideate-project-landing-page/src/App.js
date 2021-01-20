import './App.css';
import tulsa_univ from './img/universities/the-university-of-tulsa-logo.png';
import penn_univ from './img/universities/the-university-of-penn-logo.png';
import princeton_univ from './img/universities/the-university-of-princeton-logo.png';
import asu_univ from './img/universities/the-arizona-state-university-logo.png';
import oklahoma_univ from './img/universities/the-university-of-oklahoma-logo.png';
import ideate_logo from './img/vectors/ideate_logo.png';
import vector_left_up from './img/vectors/Vector_1.png';
import vector_left_down from './img/vectors/Vector_2.png';
import vector_right_up from './img/vectors/Vector_3.png';
import vector_right_down from './img/vectors/Vector_4.png';
import vector_middle_left from './img/vectors/Vector_5.png';
import vector_middle_right from './img/vectors/Vector_6.png';
import jacob from './img/team/jacob_dodd.png';
import thomas from './img/team/thomas_jankowski.png';
import adam from './img/team/adam_kier.png';
import matt from './img/team/matt_liu.png';
import chandler from './img/team/chandler_malone.png';
import david from './img/team/david_stewart.png';

function App() {
	return (
		<div className="app">
			<div className="app__heading">
				<div className="app__navbar">
					<ul className="app__navbarLeft">
						<li>
							<img src={ideate_logo} alt="The Ideate Project Logo" />
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
					<ul className="app__navbarRight">
						<li>
							<a href="#">About Us</a>
						</li>
						<li>
							<a href="#">Contact Us</a>
						</li>
						<li>
							<button className="signin__button">SIGN IN</button>
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
					<p className="main__tagline">This is a nice tagline</p>
					<div className="main__button">
						<button className="app__signinButton">SIGN IN</button>
					</div>
				</div>
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
				<div className="app__contentTitle">
					<p>What we offer</p>
				</div>
				<div className="app__contentDesc">
					<p>
						Ideate <strong>connects</strong> students with the top student
						entrepreneurs, engineers, designers, and scientists across the
						country.
					</p>
				</div>
				<div className="app__contentParts">
					<div className="app__contentPartOne">
						<h2>Students</h2>
						<p>
							Students can use Ideate to connect with students across
							different disciplines to work together to build inspiring
							projects.
						</p>
					</div>
					<div className="app__contentPartTwo">
						<h2>Universities</h2>
						<p>
							Students can engage with Ideate content from industry
							leaders via articles, podcasts, and videos.
						</p>
					</div>
					<div className="app__contentPartThree">
						<h2>Employers</h2>
						<p>
							Ideate users get access to exclusive funding, mentorship,
							project, internship, and job opportunities populated by
							both Ideate and their universities.
						</p>
					</div>
				</div>
			</div>
			<div className="app__aboutUs">
				<div className="app__team">
					<div className="app__teamRowOne">
						<div className="app__memberOne">
							<img src={jacob} alt="Jacob Dodd" />
							<p>Jacob Dodd</p>
							<p>Job title</p>
						</div>
						<div className="app__memberTwo">
							<img src={thomas} alt="Thomas Jankowski" />
							<p>Thomas Jankowski</p>
							<p>Job title</p>
						</div>
						<div className="app__memberThree">
							<img src={adam} alt="Adam Kier" />
							<p>Adam Kier</p>
							<p>Job title</p>
						</div>
					</div>
					<div className="app__teamRowTwo">
						<div className="app__memberFour">
							<img src={matt} alt="Matt Liu" />
							<p>Matt Liu</p>
							<p>Job title</p>
						</div>
						<div className="app__memberFive">
							<img src={chandler} alt="Chandler Malone" />
							<p>Chandler Malone</p>
							<p>Job title</p>
						</div>
						<div className="app__memberSix">
							<img src={david} alt="David Stewart" />
							<p>David Stewart</p>
							<p>Job title</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
