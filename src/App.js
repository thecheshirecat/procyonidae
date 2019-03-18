import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';

import Home from './pages/Home';
import Newest from './pages/Newest';
import { NotFound } from './pages/NotFound';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/newest/:page?" component={Newest} />
						<Route component={NotFound} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
