import { useState, useEffect } from "react"
import db from "./Database";
import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
import { Nav, Navbar, NavDropdown, Jumbotron, Container, Form, Button, Col, Image, Row} from "react-bootstrap";
function Hire()
{
	var [nomesArray,setNomes] = useState([]);

	var temp = [];

	useEffect(()=>{
		db.collection("gnomz").get().then((querySnapshot)=>{
		 	querySnapshot.docs.map((doc) => {
		        temp.push({
		        	id:doc.id,
		        	name:doc.data().name,
		        	phone:doc.data().phone,
		        	rating:doc.data().rating,
		        	pic:doc.data()["gnomi_pic_url"],
		        	description : doc.data().info
		        });
		      });
		}).then(()=>{
			setNomes(temp);
		});
	},[]);
	const ratingChanged = (newRating) => {
		console.log(newRating);
	  };
	

	return(
		<>
		<div  >
            <Navbar className="w-100 px-5 navigation shadow-lg" expand="lg" static>
              <Navbar.Brand className="ml-5  d-inline-block align-top" ><img width="180" alt="logo" src="logo.webp"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav backcolor" />
              <Navbar.Collapse id="basic-navbar-nav backcolor">
                <Nav className="ml-auto backcolor">
                  {/* <Nav.Link className="px-5" href="/about" active>Home</Nav.Link> */}
                  <Nav.Link className="mx-4  align-self-center " href="/" ><b >Home</b></Nav.Link>
                  <Nav.Link className="mx-4  align-self-center px-3" href="#about" ><b>About us</b></Nav.Link>
                  <Nav.Link className="mx-4  align-self-center px-3" href="#services" ><b>Services</b></Nav.Link>
                  <Nav.Link className="mx-4  align-self-center px-3" href="#faq" ><b>FAQ's</b></Nav.Link>
                  <Nav.Link className="mx-4  align-self-center pr-5 mr-5" href="#contact" ><b>Contact us</b></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
       </div>
		<Container class="p-5 mb-2">
		<Row   >
			{
				nomesArray.map(nome => {
					return(	
						
						<Col style={{marginTop : '30px'}}  xs={6} md={4} className="text-center">
							<br/>
							<br/>
							<div class="card">
								<div class="card-body">
									<h5 class="card-title">{nome.name}</h5>
									<p class="card-text text-align">
										<span className="badge bg-primary mx-1">Paper</span> 
										<span className="badge bg-info mx-1">PPT</span>
										<span className="badge bg-warning mx-1">Resume</span>
									</p>
									<hr/>
									
									<div className="mb-3 mx-auto">
										<img class="card-img-top" src={nome.pic} alt="Card cap"/>
									</div>
									
									<p class="card-text text-align">									
										<i class="icofont-star" style={{color: '#ffd700'}}></i>
										<i class="icofont-star" style={{color: '#ffd700'}}></i>
										<i class="icofont-star" style={{color: '#ffd700'}}></i>
										<i class="icofont-star" style={{color: '#ffd700'}}></i>
										<i class="icofont-star" style={{color: '#ffd700'}}></i>
										{/* {[...Array(nome.rating)].map((x, i) =>
											<i class="icofont-star"></i>
										)} */}
									</p>
									<hr/>
									<p class="card-text">{nome.description}</p>

									<a href={"/form/"+nome.id+"/"+nome.name+"/"+nome.description+"/"+nome.rating+"/"+nome.pic} class="btn btn-primary hire-btn">Hire</a>
								</div>
							</div>
						</Col>
							
					)					
				})
			}
		</Row>	
		</Container>
	
		</>
		);
}

export default Hire;