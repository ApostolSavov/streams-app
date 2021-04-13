import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate.js';
import StreamEdit from './streams/StreamEdit.js';
import StreamDelete from './streams/StreamDelete.js';
import StreamList from './streams/StreamList.js';
import StreamShow from './streams/StreamShow.js';
import Header from './Header.js';

function App(props) {
	return (
		<div className="ui container">
			<BrowserRouter>
				<div>
					<Header></Header>
					<Route path="/" exact component={StreamList}></Route>
					<Route
						path="/streams/new"
						exact
						component={StreamCreate}
					></Route>
					<Route
						path="/streams/edit"
						exact
						component={StreamEdit}
					></Route>
					<Route
						path="/streams/delete"
						exact
						component={StreamDelete}
					></Route>
					<Route
						path="/streams/show"
						exact
						component={StreamShow}
					></Route>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
