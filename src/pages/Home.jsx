//import ActivityChart from "../components/Activity";
import { Link } from "react-router-dom";

function Home() {
	return (
		<main>
			<section className="home">
				<div className="home__users">
					<p className="home__users-txt">Profils Utilisateurs</p>
					<ul className="home__users-profile">
						<li>
							<Link to="/user/12">
								<p>Karl Dovineau</p>
							</Link>
						</li>
						<li>
							<Link to="/user/18">
								<p>Cécilia Ratorez</p>
							</Link>
						</li>
					</ul>
				</div>
			</section>
		</main>
	);
}

export default Home;
