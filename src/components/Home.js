import { Card } from "react-bootstrap";
import Faq from "react-faq-component";
import { Nav, Navbar } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import {React,useEffect} from 'react'
import {Modal , Button} from 'react-bootstrap'
import Home_part from './Home_part'


function Home()
{


	if(localStorage.wallet)
	{
		return(
			<Redirect to="/dashboard-user"/>
		);
	}
	else if(localStorage.email)
	{
		return(
			<Redirect to="/dashboard-nomes"/>
		);
	}
	else
	{

		return(
			<Home_part/>
		);
		
	}
}

export default Home;