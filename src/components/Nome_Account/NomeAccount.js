import { Card } from "react-bootstrap";
import Faq from "react-faq-component";
import { Nav, Navbar,NavDropdown , Jumbotron,Container ,Form,Button,Col,Image} from "react-bootstrap";
import {  Redirect } from "react-router-dom";
import Icofont from "react-icofont"
import { useState, useEffect } from "react"
import Pending from "./NomePending"
import Completed from "./NomeCompleted"
import db from "../Database";

function signout()
{
	localStorage.removeItem("email");
	localStorage.removeItem("wallet");
	window.location.replace("/");
}



function NomeAccount()
{
    var [orderArray,setorder] = useState([]);

    var [orderArray1,setorder1] = useState([]);
    
    var [check,setcheck] = useState(1);

    var temp = [];
    var temp1 = [];
    var nome="";

	useEffect(()=>{
		db.collection("homeworks").get().then((querySnapshot)=>{
		 	querySnapshot.docs.map((doc) => {
                 if(localStorage.id===doc.data().gnomeid){ 
                    nome=doc.data().gnomeNickName
                    if(doc.data().completed===true){
                        temp.push({
                            completed:doc.data().completed,
                            
                            username:doc.data().username,
                            price:doc.data().price,
                            description : doc.data().description,
                            date:doc.data().date,
                            homeworkLevel:doc.data().homeworkLevel
        
                        });
                    }
                    else{
                        temp1.push({
                            completed:doc.data().completed,
                            
                            username:doc.data().username,
                            price:doc.data().price,
                            description : doc.data().description,
                            date:doc.data().date,
                            homeworkLevel:doc.data().homeworkLevel
        
                        });

                    }

		       
            
            }
		      });
		}).then(()=>{
            setorder(temp);
            setorder1(temp1);
		});
    },[]);
    
    
    function Details(){

        return (
            <>
            
            <div><h1>My Account</h1></div>
                View and edit your personal info below.

                <hr></hr>
                <div>Login Email:</div>
                {localStorage.email}
                    <div></div>
                    <br></br>
                 <Form>
                <Form.Row>
                    <Form.Group as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="name" placeholder="First name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="Last Name" placeholder="Last Name" />
                    </Form.Group>
                </Form.Row>

                

                <Form.Row>
                    <Form.Group as={Col} controlId="formHorizontalEmail">
                    <Form.Label>Contact Email</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="name"  />
                    </Form.Group>

                </Form.Row>

                

                <Button variant="primary" type="submit">
                    Update Info
                </Button>
                </Form> 
            </>
        )

    }


		return(
			<>


<div>
			<Navbar className="w-100 px-5 navigation shadow-lg" expand="lg" static>
			  <Navbar.Brand className="ml-5" href="/"><img width="180" alt="logo" src="logo.webp"/></Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="ml-auto">
				  {/* <Nav.Link className="px-5" href="/about" active>Home</Nav.Link> */}
				  <Nav.Link className="mx-4 justify-content-center align-self-center" href="/dashboard-nome" active><b>Home</b></Nav.Link>
			      <Nav.Link className="mx-4 justify-content-center align-self-center" href="/dashboard-nome" active><b>About us</b></Nav.Link>
			      <Nav.Link className="mx-4 justify-content-center align-self-center" href="/dashboard-nome" active><b>Services</b></Nav.Link>
			      <Nav.Link className="mx-4 justify-content-center align-self-center" href="/dashboard-nome" active><b>FAQ's</b></Nav.Link>
			      <Nav.Link className="mx-4 justify-content-center align-self-center" href="/dashboard-nome" active><b>Contact us</b></Nav.Link>
			      <Nav.Link className="mx-4 justify-content-center align-self-center" href="/hire" active><b>Hire</b></Nav.Link>
			      {/* <Nav.Link className="mx-4 justify-content-center align-self-center" href="/wallet" active><b>Wallet</b></Nav.Link> */}
				  
                  <NavDropdown title={ <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png' lenght = {20}width = {40} roundedCircle />} id="basic-nav-dropdown">
					
					<NavDropdown.Item href="/nomeaccount">Account</NavDropdown.Item>
					<NavDropdown.Item href="/wallet">Wallet</NavDropdown.Item>
					
					<NavDropdown.Divider />
					<NavDropdown.Item  onClick={signout} href="#" >Signout</NavDropdown.Item>
				</NavDropdown>
			      
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
		</div>
                <Container>
                    <Jumbotron fluid className="white bgcolor" style={{borderRadius: '0 0 50px 50px'}}>
                        <Container style={{padding : '50px 0 0 50px'}}>
                        
                            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png' width = {120} roundedCircle />
                            
                            <h1 class="text-white text-center" style={{width: '120px'}}>{localStorage.name}</h1>
                            
                        </Container>
                    </Jumbotron>
                </Container>

                <Container className='w-100'>   
                    <Button style={{borderRadius: '5px 5px 0 0'}} variant="outline-primary" onClick = {()=>{setcheck(1)}} active = {check===1} >Account</Button>{' '}
                    <Button style={{borderRadius: '5px 5px 0 0'}} variant="outline-secondary" onClick = {()=>{setcheck(2)}} active = {check===2} >Incomplete Tasks</Button>{' '}
                    <Button style={{borderRadius: '5px 5px 0 0'}} variant="outline-success" onClick = {()=>{setcheck(3)}} active = {check===3} >Completed Tasks</Button>{' '}
                </Container>

                <Container style={{borderRadius: '10px 10px 0 0'}} className="white p-5 w-100">
                
                {check===1? Details() : null}
                
                {check===2? <Pending orderArray = {orderArray1} /> : null}

                {check===3? <Completed orderArray = {orderArray} /> : null}
           
                </Container>

			</>
			);
	
}

export default NomeAccount;