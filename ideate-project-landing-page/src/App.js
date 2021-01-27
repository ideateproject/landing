import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Team from './pages/Team.js';
import Signin from './pages/Signin.js';

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/team">
						<Team />
					</Route>
					<Route path="/signin">
						<Signin />
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
