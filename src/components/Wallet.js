import StripeCheckout from "react-stripe-checkout";

function handleToken(token)
{
	console.log(token);
}

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
		    <StripeCheckout 
		    	stripeKey="pk_test_51HrQ9WISRuDB0X7oHBljiIAhHuJvnYU1lj1oVtbFxpUiQhEmWWaID1eGVi0jbvkVIWpse7D9cVk7Kdk4McfyvtD300sSnLCMU6"
		    	token={handleToken}
		    	email={localStorage.email}
		    	allowRememberMe={false}
		    	amount={20}
		    />
		  </div>
		</div>
		);
}

export default Wallet;