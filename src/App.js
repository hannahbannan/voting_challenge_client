import React from "react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { VotingStats } from "./components/VotingStats/VotingStats";
import { RegisterContainer as Register } from "./components/Register/Register.container";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { logo } from './Images/logo.png';
import "./App.css";

function App() {
  return (
		<div className='App'>
			<header>
				<Nav />
			</header>
			<Switch>
				<Route path='/voting-stats' component={VotingStats} />
				<Route path='/register' component={Register} />
				<Route path='/about' component={About} />
				<Route exact path='/' component={Home} />
				<Route exact path='*'>
					<div>
						<h2>404</h2>
					</div>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
