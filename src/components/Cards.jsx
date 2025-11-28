export const Cards = () => (

	<div className="card  m-3" style={{ width: "18rem" }}>
		<div className="card-body  p-2 bg-dark bg-gradient bg-opacity-75 text-white rounded"   >
			<h5 className="card-title">Card title</h5>
			<p className="card-text">Gender:</p>
			<p className="card-text">Hair:</p>
			<p className="card-text">Eye-color:</p>
			<div className="d-flex justify-content-between align-items-center mt-auto" >
				<a href="#" className="btn btn-primary">Learn more</a>
				<a href="#">
					<i className="fa-solid fa-heart" style={{color:"white"}}></i>
				</a>
			</div>

		</div>
	</div>
); 