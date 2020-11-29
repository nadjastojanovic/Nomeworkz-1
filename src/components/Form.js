import { Nav, Navbar } from "react-bootstrap";
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function Form()
{
	const imgStyle = {
		borderRadius : "50%"
	}

	let params = useParams();
	var temp = "";
	for(let i = 0;i<params.rating;i++)
	{
		temp += (<i className="icofont-star"></i>);
	}
	console.log(temp);

	useEffect(()=>{
		console.log(params);
	},[])

	return(
		<>
		<div className="container-fluid">
				<div className="row">
					<div className="col-lg-2 col-md-0 col-sm-0"></div>
					<div className="col-lg-8 col-md-12 col-sm-12">
						<div className="card card-inverse p-3">
							<div className="card-block">
								<div className="row p-3">
									<div className="col-md-8 col-sm-8">
										<h2 className="card-title">Name: {params.name}</h2>
										<p className="card-text"><strong>Overall Rating: </strong>
											<i className="icofont-star"></i>
										</p>
										<p><strong>Service Offered: </strong>
											<span className="badge bg-primary mx-1">Paper</span> 
											<span className="badge bg-info mx-1">PPT</span>
											<span className="badge bg-warning mx-1">Resume</span>
										</p>
										<p><strong>Info: </strong>
											{params.description}
										</p>
										<hr/>
									</div>
									<div className="col-md-4 col-sm-4 text-center">
										<img className="btn-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU" alt="" style={imgStyle}/>
									</div>

									<form className="ml-3">
										<div className="form-group">
											<label for="exampleFormControlFile1">Upload Image and Reference Files (10mb Max)</label>
											<input type="file" className="form-control-file" id="exampleFormControlFile1" />
											<p>If you have larger files then upload files on google drive and share the link in description.</p>
										</div>
										<hr/>
										<div className="form-group">
											<label for="exampleFormControlSelect1">Homework Level</label>
											<select className="form-control" id="exampleFormControlSelect1">
											<option>High School</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
											<option>5</option>
											</select>
										</div>
										<div className="form-group">
											<label for="exampleFormControlSelect1">Number of Pages (One page will have 500 words approx.)</label>
											<select className="form-control" id="exampleFormControlSelect1">
											<option>1-5</option>
											<option>5-10</option>
											<option>10-15</option>
											<option>15-20</option>
											<option>More than 20</option>
											</select>
										</div>
										<hr/>
										<div className="form-group">
											<label for="exampleFormControlTextarea1">Description about Homework</label>
											<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
										</div>
										<div className="form-group">
											<label for="exampleFormControlTextarea1">Special Notes</label>
											<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
										</div>
										<hr/>
										<div className="form-group">
											<label for="example-date-input">Choose Date</label>
											<div className="col-10">
												<input className="form-control" type="date" value="2011-08-19" id="example-date-input"/>
											</div>
										</div>
										<button type="submit" className="btn btn-primary">Calculate Price</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div> 
			</div>
		</>
	);
}

export default Form;