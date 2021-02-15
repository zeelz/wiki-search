import React, { Component, Fragment } from 'react';
import SearchBox from './components/SearchBox';

class App extends Component {
	render() {
		return (
			<Fragment>
				<div className="main">
					<SearchBox />
				</div>
				<p className="repo" style={{padding: '50px'}}>Repo <a href="https://github.com/zeelz/">/zeelz</a></p>
			</Fragment>
		);
	}
}

export default App;