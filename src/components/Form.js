import { Nav, Navbar } from "react-bootstrap";

function Form()
{
	const imgStyle = {
		borderRadius : "50%"
	}
	return(
		<>
		<div class="container-fluid">
				<div class="row">
					<div className="col-lg-2 col-md-0 col-sm-0"></div>
					<div class="col-lg-8 col-md-12 col-sm-12">
						<div class="card card-inverse p-3">
							<div class="card-block">
								<div class="row p-3">
									<div class="col-md-8 col-sm-8">
										<h2 class="card-title">Name: Nome Name</h2>
										<p class="card-text"><strong>Overall Rating: </strong> 
											<i class="icofont-star"></i>
											<i class="icofont-star"></i>
											<i class="icofont-star"></i>
										</p>
										<p><strong>Service Offered: </strong>
											<span class="badge bg-primary mx-1">Paper</span> 
											<span class="badge bg-info mx-1">PPT</span>
											<span class="badge bg-warning mx-1">Resume</span>
										</p>
										<p><strong>Info: </strong>
											I am engineering student studying MnC. I am in third year.
											I am engineering student studying MnC. I am in third year.
										</p>
										<hr/>
									</div>
									<div class="col-md-4 col-sm-4 text-center">
										<img class="btn-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU" alt="" style={imgStyle}/>
									</div>

									<form class="ml-3">
										<div class="form-group">
											<label for="exampleFormControlFile1">Upload Image and Reference Files (10mb Max)</label>
											<input type="file" class="form-control-file" id="exampleFormControlFile1" />
											<p>If you have larger files then upload files on google drive and share the link in description.</p>
										</div>
										<hr/>
										<div class="form-group">
											<label for="exampleFormControlSelect1">Homework Level</label>
											<select class="form-control" id="exampleFormControlSelect1">
											<option>High School</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
											<option>5</option>
											</select>
										</div>
										<div class="form-group">
											<label for="exampleFormControlSelect1">Number of Pages (One page will have 500 words approx.)</label>
											<select class="form-control" id="exampleFormControlSelect1">
											<option>1-5</option>
											<option>5-10</option>
											<option>10-15</option>
											<option>15-20</option>
											<option>More than 20</option>
											</select>
										</div>
										<hr/>
										<div class="form-group">
											<label for="exampleFormControlTextarea1">Description about Homework</label>
											<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
										</div>
										<div class="form-group">
											<label for="exampleFormControlTextarea1">Special Notes</label>
											<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
										</div>
										<hr/>
										<div class="form-group">
											<label for="example-date-input">Choose Date</label>
											<div class="col-10">
												<input class="form-control" type="date" value="2011-08-19" id="example-date-input"/>
											</div>
										</div>
										<button type="submit" class="btn btn-primary">Calculate Price</button>
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