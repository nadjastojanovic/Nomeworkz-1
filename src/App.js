import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Reset from "./components/Reset";
import Profile from "./components/Profile";
import Hire from "./components/Hire";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import './App.css';

var store = configureStore();

function App() {
  return (
  	<Provider store={store}>
	  	<BrowserRouter>
	  		<MuiThemeProvider>
			    <div className="App">
			    	<Switch>
			    		<Route exact path="/" component={() => <Home />} />
			    		<Route exact path="/signup" component={() => <Signup />} />
			    		<Route exact path="/login" component={() => <Login />} />
			    		<Route exact path="/reset" component={() => <Reset />} />
			    		<Route exact path="/profile" component={() => <Profile />} />
			    		<Route exact path="/hire" component={() => <Hire />} />
			    		<Redirect to="/"/>
			    	</Switch>
			    </div>
			</MuiThemeProvider>
	    </BrowserRouter>
	</Provider>
  );
}

export default App;
