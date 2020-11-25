import { test } from "../redux/actions";
import { useDispatch } from "react-redux";

function Home()
{
	const dispatch = useDispatch();
	return(
		<>
			Home
			<button onClick={()=>{dispatch(test)}}>test</button>
		</>
		);
}

export default Home;