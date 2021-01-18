import './App.css';
import tulsa_univ from './img/the-university-of-tulsa-logo.png';
import penn_univ from './img/the-university-of-penn-logo.png';
import princeton_univ from './img/the-university-of-princeton-logo.png';
import asu_univ from './img/the-arizona-state-university-logo.png';
import oklahoma_univ from './img/the-university-of-oklahoma-logo.png';
import ideate_logo from './img/ideate_logo.png';
import vector_left_up from './img/Vector_1.png';
import vector_left_down from './img/Vector_2.png';
import vector_right_up from './img/Vector_3.png';
import vector_right_down from './img/Vector_4.png';
import ellipse from './img/Ellipse_1.png';

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
				<img src={ellipse} />
			</div>
			<div className="app__universities">
				<img
					src={tulsa_univ}
					alt="Tulsa_univ_logo"
					className="tulsa_univ"
				/>
				<img src={penn_univ} alt="Penn_univ_logo" className="penn_univ" />
				<img
					src={princeton_univ}
					alt="Princeton_univ_logo"
					className="princeton_univ"
				/>
				<img src={asu_univ} alt="ASU_univ_logo" className="asu_univ" />
				<img
					src={oklahoma_univ}
					alt="Oklahoma_univ_logo"
					className="oklahoma_univ"
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
		</div>
	);
}

export default App;
