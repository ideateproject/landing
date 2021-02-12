import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Team from './pages/Team.js';
import Privacy from './pages/Privacy.js';

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/team">
						<Team />
					</Route>
					<Route path='/login' component={() => {
						window.location.href = 'https://staging.ideateproject.org/';
						return null;
					}} />
					<Route path="/privacy">
						<Privacy />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
