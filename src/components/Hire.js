import { Nav, Navbar } from "react-bootstrap";

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
	return(
		<>
		<div className="row">
			{
				nomesArray.map(nome => {
					return(					
						<div className="text-center col-lg-3 col-md-6 col-sm-1 p-5">
							<div class="card">
								<img class="card-img-top p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU" alt="Card image cap"/>
								<div class="card-body">
								<h5 class="card-title">{nome.name}</h5>
								<p class="card-text"><strong>Overall Rating: </strong> 
									{[...Array(nome.rating)].map((x, i) =>
										<i class="icofont-star"></i>
									)}
								</p>
								<p class="card-text">{nome.description}</p>
								<a href={"/form?name="+nome.name+"&description="+nome.description+"&rating="+nome.rating} class="btn btn-primary">Check full details</a>
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