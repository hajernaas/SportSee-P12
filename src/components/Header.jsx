import { Link } from "react-router-dom";
import logo from "../assets/logo-sportsee.svg";

function Header() {
	return (
		<header className="nav-wrapper">
			<Link to="/">
				<img src={logo} alt="Logo SportSee " className="nav-logo vertical-center" />
			</Link>
			<nav className="nav vertical-center">
				<Link to="/">Accueil</Link>
				<Link to="/">Profil</Link>
				<Link to="/">Réglage</Link>
				<Link to="/">Communauté</Link>
			</nav>
		</header>
	);
}

export default Header;
