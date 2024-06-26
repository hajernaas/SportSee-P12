import { Link } from "react-router-dom";
import karl from "../assets/users/karl.jpg";
import cecilia from "../assets/users/cecilia.jpg";

/**
 * Rendre page Home
 *
 * @category Pages
 * @component
 * @returns { React.Component } A React component
 */

function Home() {
	return (
		<nav className="login__nav">
			<Link to="/user/12" className="login__nav--link">
				<img src={karl} alt="Karl Dovineau" />
				<p>Karl Dovineau</p>
			</Link>
			<Link to="/user/18" className="login__nav--link">
				<img src={cecilia} alt="Cecilia Ratorez" />
				<p>Cecilia Ratorez</p>
			</Link>
		</nav>
	);
}

export default Home;
