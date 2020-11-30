import { useState, useEffect } from "react"
import db from "./Database";

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

	return(
		<>
		<div className="row">
			{
				nomesArray.map(nome => {
					return(					
						<div className="text-center offset-sm-2 col-sm-8 col-12 p-5">
							<div class="card">
								<div className="w-25 mx-auto">
									<img class="card-img-top p-2" src={nome.pic} alt="Card cap"/>
								</div>
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