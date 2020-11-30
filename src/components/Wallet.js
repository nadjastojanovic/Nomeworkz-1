function Wallet()
{
	return(
		<div class="card p-5 m-5">
		  <div class="card-body">
		    <h5 class="card-title">Wallet</h5>
		    <p class="card-text">Here you can view your balance.</p>
		  </div>
		  <ul class="list-group list-group-flush">
		    <li class="list-group-item">Current Balance :- {localStorage.wallet}</li>
		  </ul>
		  <div class="card-body">
		    <a href="#" class="btn btn-primary card-link">Add money</a>
		  </div>
		</div>
		);
}

export default Wallet;