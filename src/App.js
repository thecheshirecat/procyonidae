import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';

import Home from './pages/Home';
import NewestContainer from './containers/NewestContainer'
import GuestsContainer from './containers/GuestsContainer'
import { NotFound } from './pages/NotFound';
import { NEWEST_URL_, GUESTS_URL_, SHARE_ART_URL_ } from './constants';
import ShareArtContainer from './containers/ShareArtContainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path={`/${NEWEST_URL_}/:page?`} component={NewestContainer} />
						<Route path={`/${GUESTS_URL_}/:page?`} component={GuestsContainer} />
						<Route path={`/${SHARE_ART_URL_}/:page?`} component={ShareArtContainer} />
						<Route component={NotFound} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
