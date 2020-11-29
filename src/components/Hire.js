import { Nav, Navbar } from "react-bootstrap";
import { useEffect } from "react"
import db from "./Database";

function Hire()
{
	var data = [];
	useEffect(()=>{
		db.collection("gnomz").doc("SF").get().then((doc)=>{
			if (!doc.exists) {
			  console.log('No such document!');
			} else {
			  console.log('Document data:', doc.data());
			}
		});
	},[]);

	return(
		<>
		<div className="row">
			<div className="text-center col-12 p-5">
				<div class="card">
					<img class="card-img-top p-2" src="cardback.jpeg" alt="Card image cap"/>
					<div class="card-body">
					<h5 class="card-title">Nome Name</h5>
					<p class="card-text"><strong>Overall Rating: </strong> 
						<i class="icofont-star"></i>
						<i class="icofont-star"></i>
						<i class="icofont-star"></i>
					</p>
					<p class="card-text">Some brief details abot the nome. Some brief details abot the nome. Some brief details abot the nome.</p>
					<a href="/form" class="btn btn-primary">Check full details</a>
					</div>
				</div>
			</div>
			<div className="text-center col-12 p-5">
				<div class="card">
					<img class="card-img-top p-2" src="cardback.jpeg" alt="Card image cap"/>
					<div class="card-body">
					<h5 class="card-title">Nome Name</h5>
					<p class="card-text"><strong>Overall Rating: </strong> 
						<i class="icofont-star"></i>
						<i class="icofont-star"></i>
						<i class="icofont-star"></i>
					</p>
					<p class="card-text">Some brief details abot the nome. Some brief details abot the nome. Some brief details abot the nome.</p>
					<a href="/form" class="btn btn-primary">Check full details</a>
					</div>
				</div>
			</div>
			<div className="text-center col-12 p-5">
				<div class="card">
					<img class="card-img-top p-2" src="cardback.jpeg" alt="Card image cap"/>
					<div class="card-body">
					<h5 class="card-title">Nome Name</h5>
					<p class="card-text"><strong>Overall Rating: </strong> 
						<i class="icofont-star"></i>
						<i class="icofont-star"></i>
						<i class="icofont-star"></i>
					</p>
					<p class="card-text">Some brief details abot the nome. Some brief details abot the nome. Some brief details abot the nome.</p>
					<a href="/form" class="btn btn-primary">Check full details</a>
					</div>
				</div>
			</div>
			<div className="text-center col-12 p-5">
				<div class="card">
					<img class="card-img-top p-2" src="cardback.jpeg" alt="Card image cap"/>
					<div class="card-body">
					<h5 class="card-title">Nome Name</h5>
					<p class="card-text"><strong>Overall Rating: </strong> 
						<i class="icofont-star"></i>
						<i class="icofont-star"></i>
						<i class="icofont-star"></i>
					</p>
					<p class="card-text">Some brief details abot the nome. Some brief details abot the nome. Some brief details abot the nome.</p>
					<a href="/form" class="btn btn-primary">Check full details</a>
					</div>
				</div>
			</div>
		</div>	
		</>
		);
}

export default Hire;