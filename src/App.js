import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';

import Home from './pages/Home';
import NewestContainer from './containers/NewestContainer'
import GuestsContainer from './containers/GuestsContainer'
import { NotFound } from './pages/NotFound';
import BugForm from './pages/BugForm';
import { NEWEST_URL_, GUESTS_URL_, SHARE_ART_URL_, DETAIL_URL_, POPULAR, USER_AREA_URL_ } from './constants';
import ShareArtContainer from './containers/ShareArtContainer';
import ImageDetailContainer from './containers/ImageDetailContainer';
import Popular from './pages/Popular';
import UserAreaContainer from './containers/UserAreaContainer';

class App extends Component {
	state = {
		showForm: false
	}
	showForm = () => {
		this.setState({
			showForm: true
		})
	}
	closeBugForm = () => {
		this.setState({
			showForm: false
		})
	}
	render() {
		return (
			<div className="App">
				<Header />
				<main>
					<Switch>
						<Route exact path={`/`} component={Home} />
						<Route path={`/${NEWEST_URL_}/:page?`} component={NewestContainer} />
						<Route path={`/${POPULAR}`} component={Popular} />
						<Route path={`/${USER_AREA_URL_}`} component={UserAreaContainer} />
						<Route path={`/${GUESTS_URL_}/:page?`} component={GuestsContainer} />
						<Route path={`/${SHARE_ART_URL_}/:page?`} component={ShareArtContainer} />
						<Route path={`/${DETAIL_URL_}/:id/:title?`} component={ImageDetailContainer} />
						<Route component={NotFound} />
					</Switch>
				</main>
				{
					this.state.showForm
					? <BugForm closeBugForm={this.closeBugForm}/>
					: null
				}
				<div className="bug" onClick={this.showForm}>
					<div className="bugImage">
						<img src="/images/bug.png" alt="Found a bug?"/>
					</div>
					<div className="bugInfo">
						Did you found a bug or something to improve?
						<br />
						Click here to tell me.
					</div>
				</div>
			</div>
		);
	}
}

export default App;
