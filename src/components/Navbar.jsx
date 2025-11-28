import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar bg-body-tertiary" style={{background:"black"}}>
			<div class="container-fluid">
				<a class="navbar-brand">
					<img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/StarWarsLogo.jpeg" alt=""
						style={{ height: "100px" }}
						className="d-block mx-auto mt-3"
					/>
				</a>
				<form class="d-flex" role="search">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</nav>
	);
};