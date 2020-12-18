import StripeCheckout from "react-stripe-checkout";
import { useState } from "react"

const stripe = require("stripe")("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");

async function handleToken(token,amount)
{
	console.log(token);
	let status;
	try{
		console.log(token.email,token.id);
		let customer = await stripe.customers.create({
			email: token.email,
			source: token.id
		});
		console.log("here1");
		const idempotency_key = 123;
		const charge = await stripe.charges.create(
			{
				amount: amount,
				currency: "usd",
				customer: customer.id,
				receipt_email: token.email,
				description: `Paid an amount of ${amount}.`,
			},
			{
				idempotency_key
			}
		);
		console.log("here2");
		status = "success";
		console.log(status);
	} 
	catch(error){
		console.log(`error : ${error}`);
		status = "failure";
	}
}


function Wallet()
{
	const [amount, setAmount] = useState(-1);
	const [error, setError] = useState(1);

	const submitHandler = (e) => {
		e.preventDefault();
		let tmp = e.target.amountAdded.value;
		tmp*=100;
		console.log(tmp);
		if(tmp>0){
			setAmount(tmp);
			setError(0);
		}
		else{
			setAmount(-1);
			setError(1);
		}
	}
	let payDiv = "";
	if(error===1){
		payDiv = <></>
	}
	else{
		payDiv = 
		<>
		  <div class="card-body">
		    <StripeCheckout 
		    	stripeKey="pk_live_XaGBwvF5ibvmEAEIuK4z7aKj0033HZWVB0"
		    	token={handleToken}
		    	email={localStorage.email}
		    	allowRememberMe={false}
		    	amount={amount}
		    />
		  </div>
		</>
	}
	return(

		<div class="card p-5 m-5">
			<div class="row">
				<div class="col-6">
					<div class="card-body">
						<h5 class="card-title">Wallet</h5>
						<p class="card-text">Here you can view your balance.</p>
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">Current Balance :- {localStorage.wallet}</li>
					</ul>
					<div class="card-body">
						<h5 class="card-title">Add amount</h5>
						<form onSubmit={(e) => submitHandler(e)}>
							<label for="amountAdded">Enter the amount to be added to wallet.</label>
							<input name="amountAdded" type="number" className="amountAdded mx-2" id="amountAdded"/>
							<button action = "submit" className="btn btn-primary">Proceed</button>
						</form>
					</div>
					{payDiv}
				</div>
				<div class="col-6">
					<img class="w-100" src="https://i.ibb.co/4Wyp62f/wallet-img.png"/>
				</div>
			</div>
		</div>
		);
}

export default Wallet;