import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Profile from "./components/Profile";
import Hire from "./components/Hire";
import Form from "./components/Form";
import Home from "./components/Home";
import SignupUser from "./components/SignupUser";
import SignupNome from "./components/SignupNome";
import LoginUser from "./components/LoginUser";
import LoginNome from "./components/LoginNome";
import IntermediateSignup from "./components/IntermediateSignup";
import IntermediateLogin from "./components/IntermediateLogin";
import Reset from "./components/Reset";
import Wallet from "./components/Wallet"
import DashboardUser from "./components/DashboardUser";
import DashboardNome from "./components/DashboardNome";
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
		    		<Route exact path="/signup-user" component={() => <SignupUser dispatch={dispatch}/>} />
		    		<Route exact path="/signup-nome" component={() => <SignupNome dispatch={dispatch}/>} />
		    		<Route exact path="/login-user" component={() => <LoginUser dispatch={dispatch}/>} />
		    		<Route exact path="/login-nome" component={() => <LoginNome dispatch={dispatch}/>} />
		    		<Route exact path="/reset" component={() => <Reset dispatch={dispatch}/>} />
		    		<Route exact path="/dashboard-user" component={() => <DashboardUser dispatch={dispatch}/>} />
		    		<Route exact path="/dashboard-nome" component={() => <DashboardNome dispatch={dispatch}/>} />
		    		<Route exact path="/profile" component={() => <Profile />} />
		    		<Route exact path="/wallet" component={() => <Wallet />} />
		    		<Route exact path="/hire" component={() => <Hire />} />
		    		<Route exact path="/intermediate-signup" component={() => <IntermediateSignup />} />
		    		<Route exact path="/intermediate-login" component={() => <IntermediateLogin />} />
		    		<Route path="/form/:id/:name/:description/:rating/:pic" component={() => <Form />} />
		    		<Redirect to="/"/>
		    	</Switch>
		    </div>
		</MuiThemeProvider>
    </BrowserRouter>
  );
}
 
export default App;
