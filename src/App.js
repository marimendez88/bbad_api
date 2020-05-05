import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import "./App.css";

function App() {
	return (
		<Fragment>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					{/* <Route path="/episodes" exact component={Episodes} /> */}
				</Switch>
			</BrowserRouter>
		</Fragment>
	);
}

export default App;
