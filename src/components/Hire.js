import { Nav, Navbar } from "react-bootstrap";
import { useEffect } from "react"
import db from "./Database";

const nomesArray = [
	{
		id : 1,
		name : "Bill Gates",
		rating : 1,
		description : "Some brief details abot the nome. Some brief details abot the nome. Some brief details abot the nome."
	},
	{
		id : 2,
		name : "Bill Gates",
		rating : 2,
		description : "Some brief details abot the nome. Some brief details abot the nome. Some brief details abot the nome."
	},
	{
		id : 3,
		name : "Bill Gates",
		rating : 3,
		description : "Some brief details abot the nome. Some brief details abot the nome. Some brief details abot the nome."
	},
	{
		id : 4,
		name : "Bill Gates",
		rating : 4,
		description : "Some brief details abot the nome. Some brief details abot the nome. Some brief details abot the nome."
	}
]

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
			{
				nomesArray.map(nome => {
					return(					
						<div className="text-center offset-sm-2 col-sm-8 col-12 p-5">
							<div class="card">
								<img class="card-img-top p-2" src="cardback.jpeg" alt="Card image cap"/>
								<div class="card-body">
								<h5 class="card-title">{nome.name}</h5>
								<p class="card-text"><strong>Overall Rating: </strong> 
									{[...Array(nome.rating)].map((x, i) =>
										<i class="icofont-star"></i>
									)}
								</p>
								<p class="card-text">{nome.description}</p>
								<a href={"/form/"+nome.name+"/"+nome.description+"/"+nome.rating} class="btn btn-primary">Check full details</a>
								</div>
							</div>
						</div>
					)					
				})
			}
		</div>	
		</>
		);
}

export default Hire;