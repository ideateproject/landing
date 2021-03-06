import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
// import Team from './pages/Team.js';
import Privacy from './pages/Privacy.js';
import Terms from './pages/Terms.js';
//import Contact from './pages/Contact.js';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					{/* <Route path="/team">
						<Team />
					</Route> */}
					<Route path='/login' component={() => {
						window.location.href = 'http://student.ideateproject.com/';
						return null;
					}} />
					<Route path="/privacy">
						<Privacy />
					</Route>
					<Route path="/terms">
						<Terms />
					</Route>
					{/* <Route path="/contact">
						<Contact />
					</Route> */}
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
