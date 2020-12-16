import { Card } from "react-bootstrap";
import Faq from "react-faq-component";
import { Nav, Navbar ,NavDropdown,Image} from "react-bootstrap";
import {  Redirect } from "react-router-dom";


const data = {
    rows: [
        {
            title: 
				<p className="text-center px-3">
					Lorem ipsum dolor sit amet 
					<hr/>
				</p>,
            content:
				<p className="text-center px-3">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
					ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
					In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
					Fusce sed commodo purus, at tempus turpis.
					<hr/>
				</p>
				,
        }
    ],
};
 
const styles = {
	bgColor: "#add8e6"
};

const config = {};

function signout()
{

	localStorage.removeItem("email");
	localStorage.removeItem("wallet");
	window.location.reload();
}

function Dashboard()
{
	if(localStorage.email)
	{
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
			      <Nav.Link className="mx-4 justify-content-center align-self-center" href="#about" active><b>About us</b></Nav.Link>
			      <Nav.Link className="mx-4 justify-content-center align-self-center" href="#services" active><b>Services</b></Nav.Link>
			      <Nav.Link className="mx-4 justify-content-center align-self-center" href="#faq" active><b>FAQ's</b></Nav.Link>
			      <Nav.Link className="mx-4 justify-content-center align-self-center" href="#contact" active><b>Contact us</b></Nav.Link>
			      <Nav.Link className="mx-4 justify-content-center align-self-center" href="/hire" active><b>Hire</b></Nav.Link>
			      {/* <Nav.Link className="mx-4 justify-content-center align-self-center" href="/wallet" active><b>Wallet</b></Nav.Link> */}
				  
					<NavDropdown title={ <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png' lenght = {20}width = {40} roundedCircle />} id="basic-nav-dropdown">
					
					<NavDropdown.Item href="/nomeaccount">Account</NavDropdown.Item>
					<NavDropdown.Item href="/wallet">Wallet</NavDropdown.Item>
					
					<NavDropdown.Divider />
					<NavDropdown.Item  onClick={()=> signout()} href="#" >Signout</NavDropdown.Item>
				</NavDropdown>
			      
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
		</div>
		<div className="" >
            <div className="row back m-0 w-100" style={{backgroundImage : `url("back.webp")`}}>
                <div className="col-6 d-flex align-self-center">                    
                    <p class="header p-sm-5"><b>The professional essay writing service for students who can't even.</b></p>
                </div>
                <div className="col-6 d-flex align-self-center">
                    <img className="image p-sm-5" src="main.webp" alt="main"/>
                </div>
            </div>
            <div  className="row " >
                <div className="col-lg-2 col-md-1 col-sm-0"></div>
                <div className="col-lg-8 col-md-10 col-sm-12 text-center px-5">
                    <div className = "py-4" id="about">
                        <h1><b>The Essay Writing You Can Trust</b></h1>
                        <br/>
                        <p>
                            We all know that life doesn't always go as planned and that at times, we've struggled to hit deadlines. Whether you are a student athlete, working to put yourself through college, have a presentation at your office, or are a parent that simply wants to give their child a little added support, we sometimes could use a little help. Nomeworkz online writing service was created as a tool to help students with their academic performance! We have some of the most skilled writers to assist in creating original, custom papers for any educational level.
                        </p>
                    </div>
                    <div className = "py-4">
                        <h1><b>What is NomeWorkz?</b></h1>
                        <div className="videoDiv py-4">
                            <video className="video" controls>
                                <source src="https://video.wixstatic.com/video/c3a0d6_3432ad8f474e4909ba2b52dd4bb2072d/480p/mp4/file.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                   

                    <h1><b>How does it work?</b></h1>
                        <div className="row mt-5 mx-auto">
                            <div class="col-md-2 px-0">
                                <Card className="Card bg-transparent">
                                    <Card.Img class="pt-2 features-img" variant="top" src="https://static.wixstatic.com/media/c3a0d6_a676b1694cf14d8cb5b29318c62f2508~mv2.png/v1/fill/w_190,h_203,al_c,q_85,usm_0.66_1.00_0.01/Nome%20Vector.webp" />
                                    
                                    <Card.Body>
                                        <Card.Text>
                                            Browse through hundreds of Nomes 
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div class="col-md-1 px-0">
                                <Card className="Card bg-transparent">
                                    <Card.Img   src="" />
                                    
                                    <Card.Body style={{marginTop : '50px'}}>
                                        <Card.Text>
                                        <p> <i class="arrow right"></i></p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>                            
                            <div class="col-md-2 px-0">
                                <Card className="Card bg-transparent">
                                    <Card.Img class="pt-2 features-img" variant="top" src="https://static.wixstatic.com/media/c3a0d6_07eec9072880491fa44916f0efec7b97~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01/img_77504.webp" />
                                    <Card.Body>
                                        <Card.Text>
                                            Tell us about your essay
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div class="col-md-1 px-0">
                                <Card className="Card bg-transparent">
                                    <Card.Img   src="" />
                                    
                                    <Card.Body style={{marginTop : '50px'}}>
                                        <Card.Text>
                                        <p> <i class="arrow right"></i></p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div class="col-md-2 px-0">
                                <Card className="Card bg-transparent">
                                    <Card.Img class="pt-2 features-img" variant="top" src="https://static.wixstatic.com/media/c3a0d6_3559127850c84b44af90f00271b799b8~mv2.png/v1/fill/w_165,h_165,al_c,q_85,usm_0.66_1.00_0.01/dollar%252Bfunds%252Bhand%252Bpayment%252Bicon%252.webp" />
                                    <Card.Body>
                                        <Card.Text>
                                            Make a Payment
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div class="col-md-1 px-0">
                                <Card className="Card bg-transparent">
                                    <Card.Img   src="" />
                                    
                                    <Card.Body style={{marginTop : '50px'}}>
                                        <Card.Text>
                                        <p> <i class="arrow right"></i></p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div class="col-md-2 px-0">
                                <Card className=" Card bg-transparent">
                                    <Card.Img class="pt-2 features-img" variant="top" src="https://static.wixstatic.com/media/c3a0d6_809b16b97eda4d90aa14a0e57b03922b~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01/12413502551547544983-512.webp" />
                                    <Card.Body>
                                        <Card.Text>
                                            Release money to the Nome ONLY if you’re satisfied with the outcome
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    


                    <div id="services" className = "py-4">
                        <h1><b>Services</b></h1>
                        <p>Our professional team of experts in various subjects can handle any academic essay including, but not limited to:</p>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <Card className="Card bg-transparent pl-5 py-3 m-1">
                                    <Card.Img className="" variant="top" style={{width : '70%'}} src="https://static.wixstatic.com/media/c3a0d6_600b03ec5f2c4dd992bc09ed4f5bf0ab~mv2.png/v1/fill/w_135,h_135,al_c,q_85,usm_0.66_1.00_0.01/Geography%20Icon.webp" />
                                    <Card.Text>
                                        <p className="m-2">
                                            <b>
                                                Geography
                                            </b>
                                        </p>
                                    </Card.Text>
                                   
                                </Card>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <Card className="Card bg-transparent pl-3 pr-3 py-3 m-1">
                                    <Card.Img className="" variant="top" style={{width : '70%'}}src="https://static.wixstatic.com/media/c3a0d6_daa740c22f124bbe916e8623ff1b1cc6~mv2.png/v1/fill/w_134,h_134,al_c,q_85,usm_0.66_1.00_0.01/Icon%202.webp" />
                                    <Card.Text>
                                        <p className="m-2">
                                            <b>
                                                Biology
                                            </b>
                                        </p>
                                    </Card.Text>
                                </Card>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <Card className="Card bg-transparent pr-5 py-3 m-1">
                                    <Card.Img className="" variant="top" style={{width : '70%'}}src="https://static.wixstatic.com/media/c3a0d6_17dfa5d66e464b9e85addf88f9f4fd61~mv2.png/v1/fill/w_135,h_135,al_c,q_85,usm_0.66_1.00_0.01/Icon%204.webp" />
                                    <Card.Text>
                                        <p className="m-2">
                                            <b>
                                                Sociology
                                            </b>
                                        </p>										
                                    </Card.Text>
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <Card className="Card bg-transparent m-1">
                                    <Card.Img className="" variant="top" style={{width : '70%'}}src="https://static.wixstatic.com/media/c3a0d6_098843255c2a4cd9b2565c6d408b86cf~mv2.png/v1/fill/w_138,h_138,al_c,q_85,usm_0.66_1.00_0.01/Icon%206.webp" />
                                    <Card.Text>
                                        <p className="m-2">
                                            <b>
                                                Nursing
                                            </b>
                                        </p>
                                    </Card.Text>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <Card className="Card bg-transparent m-1">
                                    <Card.Img className="" variant="top" style={{width : '70%'}}src="https://static.wixstatic.com/media/c3a0d6_a48aa399716f44ec9f1068673ce5180a~mv2.png/v1/fill/w_138,h_138,al_c,q_85,usm_0.66_1.00_0.01/Icon%203.webp" />
                                    <Card.Text>
                                        <p className="m-2">
                                            <b>
                                                Chemistry
                                            </b>
                                        </p>
                                    </Card.Text>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <Card className="Card bg-transparent m-1">
                                    <Card.Img className="" variant="top"style={{width : '70%'}} src="https://static.wixstatic.com/media/c3a0d6_4e876ff152ca4e7b9fe9e25a3a3bf1b0~mv2.png/v1/fill/w_139,h_139,al_c,q_85,usm_0.66_1.00_0.01/Icon%205.webp" />
                                    <Card.Text>
                                        <p className="m-2">
                                            <b>
                                                Music
                                            </b>
                                        </p>
                                    </Card.Text>
                                </Card>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <Card className="Card bg-transparent m-1">
                                    <Card.Img className="" variant="top" style={{width : '70%'}}src="https://static.wixstatic.com/media/c3a0d6_f528bd846b9a4471be5c22f56499206e~mv2.png/v1/fill/w_138,h_138,al_c,q_85,usm_0.66_1.00_0.01/Icon%207.webp" />
                                    <Card.Text>
                                        <p className="m-2">
                                            <b>
                                                International Law
                                            </b>
                                        </p>
                                    </Card.Text>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div id="faq">
                        <h1>FAQs</h1>
                        <div className="faq m-3">
                            <Faq data={data} styles={styles} config={config} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-0"></div>
            </div>
        </div>
            <div id="contact" className="mt-5 px-5 p-5 text-center">
				<h1 className="text-center">Contact Us</h1>
				<div className="row px-5">
					<div className="text-left offset-2 col-4">
						<img className="m-1" width="180" alt="logo" src="logo.webp"/>
						<p><b>Email</b> : NomeWorkz@gmail.com</p>
						<p className="text-left"><b>Phone</b> : 9988776655, 9988475757</p>
						<p className="ml-1">
							<a href="#" class="px-2">
								<i className="icofont-facebook p-1 icofont-2x" style={{color : "white"}}></i>
							</a>
							<a href="#" class="px-2">
								<i className="icofont-google-plus p-1 icofont-2x" style={{color : "white"}}></i>
							</a>
							<a href="#" class="px-2">
								<i className="icofont-instagram p-1 icofont-2x" style={{color : "white"}}></i>
							</a>
							<a href="#" class="px-2">
								<i className="icofont-whatsapp p-1 icofont-2x" style={{color : "white"}}></i>
							</a>
						</p>
					</div>
					<div className="col-4 offset-2 text-left">
						<h3>Useful Links</h3>
						<i className="icofont-caret-right"></i><a href="#">Home</a>
						<br/>
						<i className="icofont-caret-right"></i><a href="#about">About Us</a>
						<br/>
						<i className="icofont-caret-right"></i><a href="#services">Services</a>
						<br/>
						<i className="icofont-caret-right"></i><a href="#faq">Faq</a>
						<br/>
					</div>
				</div>
			</div>
		</>
		);	
	}
	else
	{
		return(
			<>
				<Redirect to="/"/>
			</>
			);
	}
}

export default Dashboard;