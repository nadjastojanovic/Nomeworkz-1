import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Profile from "./components/Profile";
import Hire from "./components/Hire";
import Form from "./components/Form";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

function App() {
	console.clear();
	let dispatch = useDispatch();
	const state = useSelector(state => state);
	console.log(state);
  return (
  	<BrowserRouter>
  		<MuiThemeProvider>
		    <div className="App">
		    	<Switch>
		    		<Route exact path="/" component={() => <Home />} />
		    		<Route exact path="/signup" component={() => <Signup dispatch={dispatch}/>} />
		    		<Route exact path="/login" component={() => <Login dispatch={dispatch}/>} />
		    		<Route exact path="/reset" component={() => <Reset dispatch={dispatch}/>} />
		    		<Route exact path="/dashboard" component={() => <Dashboard dispatch={dispatch}/>} />
		    		<Route exact path="/profile" component={() => <Profile />} />
		    		<Route exact path="/hire" component={() => <Hire />} />
		    		<Route exact path="/form/:name/:description/:rating" component={() => <Form />} />
		    		<Redirect to="/"/>
		    	</Switch>
		    </div>
		</MuiThemeProvider>
    </BrowserRouter>
  );
}
 
export default App;
