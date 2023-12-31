import { Link } from "react-router-dom";

function Header() {
	return (
		<>
			<div className="header mt-2">
				<h2>TodoList</h2>
				<Link to="/new">
					<span className="add-new">
						<i class="fa fa-plus" aria-hidden="true"></i>{" "}
						<span> </span>
						Add Task
					</span>
				</Link>
			</div>
		</>
	);
}

export default Header;
