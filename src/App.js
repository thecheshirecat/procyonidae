import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';

import Home from './pages/Home';
import NewestContainer from './containers/NewestContainer'
import GuestsContainer from './containers/GuestsContainer'
import { NotFound } from './pages/NotFound';
import { NEWEST, GUESTS } from './constants';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path={`/${NEWEST}/:page?`} component={NewestContainer} />
						<Route path={`/${GUESTS}/:page?`} component={GuestsContainer} />
						<Route component={NotFound} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
