import React from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard/dashboard";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={Dashboard} />
				</Switch>
			</Router>
		</>
	);
}

export default App;