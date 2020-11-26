import { test } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import firebase from 'firebase';
import { Image,Card } from "react-bootstrap";
import Faq from "react-faq-component";
import { Nav, Navbar } from "react-bootstrap";


const conf = {
    apiKey: "AIzaSyC0EcNFCIfy_R7sZQoAqvzdjyV-WMWf_QA",
    authDomain: "noreply@nomeworkz1.firebaseapp.com",
    databaseURL: "https://fun-food-friends-eeec7.firebaseio.com",
    projectId: "nomeworkz1",
    storageBucket: "fun-food-friends-eeec7.appspot.com",
    messagingSenderId: "609449515870"
};

firebase.initializeApp(conf);

var db = firebase.firestore();

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

function Home()
{
	const state = useSelector(state => state);
	const dispatch = useDispatch();
	return(
		<>
		<div>
			<Navbar className="w-100 px-5 bg-info" expand="lg" static>
			  <Navbar.Brand className="" href="/"><img width="180" alt="logo" src="logo.webp"/></Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="ml-auto">
				  {/* <Nav.Link className="px-5" href="/about" active>Home</Nav.Link> */}
			      <Nav.Link className="px-5 justify-content-center align-self-center" href="#about" active>About us</Nav.Link>
			      <Nav.Link className="px-5 justify-content-center align-self-center" href="#services" active>Services</Nav.Link>
			      <Nav.Link className="px-5 justify-content-center align-self-center" href="#faq" active>FAQ's</Nav.Link>
			      <Nav.Link className="px-5 justify-content-center align-self-center" href="#contact" active>Contact us</Nav.Link>
			      <Nav.Link className="px-5 justify-content-center align-self-center" href="/signup" active>Signup</Nav.Link>
			      <Nav.Link className="px-5 justify-content-center align-self-center" href="/login" active>Login</Nav.Link>
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
		</div>
		<div className="row w-100 m-0">
			<div className="back w-100" style={{backgroundImage : `url("back.webp")`}}>
			<image className="image-fluid" src="main.webp"/>
			</div>
			<div className="row w-100">
				<div className="col-lg-2 col-md-1 col-sm-0"></div>
				<div className="col-lg-8 col-md-10 col-sm-12 text-center px-5">
					<div className = "py-4" id="about">
						<h1>The Essay Writing You Can Trust</h1>
						<br/>
						<p>
							We all know that life doesn't always go as planned and that at times, we've struggled to hit deadlines. Whether you are a student athlete, working to put yourself through college, have a presentation at your office, or are a parent that simply wants to give their child a little added support, we sometimes could use a little help. Nomeworkz online writing service was created as a tool to help students with their academic performance! We have some of the most skilled writers to assist in creating original, custom papers for any educational level.
						</p>
					</div>
					<div className = "py-4">
						<h1>What is NomeWorkz?</h1>
						<div className="videoDiv py-4">
							<video className="video" controls>
								<source src="https://video.wixstatic.com/video/c3a0d6_3432ad8f474e4909ba2b52dd4bb2072d/480p/mp4/file.mp4" type="video/mp4"/>
							</video>
						</div>
					</div>
					<div className = "py-4">
						<h1>How it Works?</h1>
						<div className="row mt-5">
							<div className="col-lg-3 col-md-6 col-sm-12 px-0">
								<Card className="Card">
									<Card.Img className="px-4" variant="top" src="https://static.wixstatic.com/media/c3a0d6_a676b1694cf14d8cb5b29318c62f2508~mv2.png/v1/fill/w_190,h_203,al_c,q_85,usm_0.66_1.00_0.01/Nome%20Vector.webp" />
									<Card.Body>
										<Card.Text>
											Browse through hundreds of Nomes
										</Card.Text>
									</Card.Body>
								</Card>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-12 px-0">
								<Card className="pt-5 Card">
									<Card.Img className="px-5" variant="top" src="https://static.wixstatic.com/media/c3a0d6_07eec9072880491fa44916f0efec7b97~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01/img_77504.webp" />
									<Card.Body>
										<Card.Text>
											Tell us about your essay: Instructions, requirements and deadline.
										</Card.Text>
									</Card.Body>
								</Card>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-12 px-0">
								<Card className="Card">
									<Card.Img className="px-4" variant="top" src="https://static.wixstatic.com/media/c3a0d6_3559127850c84b44af90f00271b799b8~mv2.png/v1/fill/w_165,h_165,al_c,q_85,usm_0.66_1.00_0.01/dollar%252Bfunds%252Bhand%252Bpayment%252Bicon%252.webp" />
									<Card.Body>
										<Card.Text>
											Make aPayment and your Nome will start working on your paper.
										</Card.Text>
									</Card.Body>
								</Card>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-12 px-0">
								<Card className="pt-5 Card">
									<Card.Img className="px-5" variant="top" src="https://static.wixstatic.com/media/c3a0d6_809b16b97eda4d90aa14a0e57b03922b~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01/12413502551547544983-512.webp" />
									<Card.Body>
										<Card.Text>
											Release money to the Nome ONLY if you’re satisfied with the outcome
										</Card.Text>
									</Card.Body>
								</Card>
							</div>
						</div>
					</div>
					<div id="services">
						<h1>Services</h1>
						<p>Our professional team of experts in various subjects can handle any academic essay including, but not limited to:</p>
					</div>
					<div id="faq">
						<h1>FAQs</h1>
						<div className="faq">
							<Faq data={data} styles={styles} config={config} />
						</div>
					</div>
					<div id="contact">
						<h1>Contact Us</h1>
						<div className="row">
							<div className="col-6">
								<h2>NomeWorkz</h2>
								<p>Email : NomeWorkz@gmail.com</p>
								<p>Phone : 9988776655, 9988475757</p>
								<a href="">
									<i class="icofont-facebook"></i>
								</a>
								<a href="">
									<i class="icofont-instagram"></i>
								</a>
								<a href="">
									<i class="icofont-whatsapp"></i>
								</a>
								<a href="">
									<i class="icofont-google-plus"></i>
								</a>
							</div>
							<div className="col-6">
								<h3>Useful Links</h3>
								<a href="">Home</a>
								<br/>
								<a href="">About Us</a>
								<br/>
								<a href="">Services</a>
								<br/>
								<a href="">Nomes</a>
								<br/>
								<a href="">FAQs</a>
								<br/>
								<a href="">Hire</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-2 col-md-1 col-sm-0"></div>
			</div>
		</div>
		</>
		);
}

export default Home;