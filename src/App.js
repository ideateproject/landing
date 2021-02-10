import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Team from './pages/Team.js';
import Login from './pages/Login.js';

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/team">
						<Team />
					</Route>
					<Route path="/login">
						<Login />
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
