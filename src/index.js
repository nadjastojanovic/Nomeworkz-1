import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import firebase from 'firebase';

var store = configureStore();

const conf = {
    apiKey: "AIzaSyC0EcNFCIfy_R7sZQoAqvzdjyV-WMWf_QA",
    authDomain: "noreply@nomeworkz1.firebaseapp.com",
    databaseURL: "https://fun-food-friends-eeec7.firebaseio.com",
    projectId: "nomeworkz1",
    storageBucket: "fun-food-friends-eeec7.appspot.com",
    messagingSenderId: "609449515870"
}; 

firebase.initializeApp(conf);

ReactDOM.render(
  <React.StrictMode>
	  <Provider store={store}>
	  	<App />
	  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

