import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render () {
		return (
			<div className="App">
			<div className="App-Header">
				<h1>Header</h1>
			</div>
			<div className="App-Profile">
				<h2>Profile</h2>
			</div>
			<div className="App-Trends">
				<h2>Trends</h2>
			</div>
			<div className="App-NewCard">
				<h2>NewCard</h2>
			</div>
			<div className="App-Card">
				<h2>Card</h2>
			</div>
			<div className="App-Follow">
				<h2>Follow</h2>
			</div>
			</div>
		);
	}
}

export default App;
