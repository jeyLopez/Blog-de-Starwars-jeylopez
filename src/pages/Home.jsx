import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="m-3" style={{color:"#a1a1a1"}} >
			<h2>Characters</h2>
			
		</div>
	);
}; 