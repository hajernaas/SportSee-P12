import { Link } from "react-router-dom";
import logo from "../assets/logo-sportsee.svg";

/**
 * Render the Header with logo et and navbar
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function Header() {
	return (
		<header className="header-wrapper">
			<Link to="/" className="header-wrapper__logo">
				<img src={logo} alt="Logo SportSee " />
			</Link>
			<nav className="header-wrapper__nav">
				<ul className="header-wrapper__nav-ul">
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="#">Profil</Link>
					</li>
					<li>
						<Link to="#">Réglage</Link>
					</li>
					<li>
						<Link to="#">Communauté</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
