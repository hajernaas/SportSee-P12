import { Link, NavLink } from "react-router-dom";
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
		<header className="nav-wrapper">
			<Link to="/">
				<img src={logo} alt="Logo SportSee " className="nav-logo vertical-center" />
			</Link>
			<nav className="nav vertical-center">
				<NavLink to="/">Accueil</NavLink>
				<NavLink to="#">Profil</NavLink>
				<NavLink to="#">Réglage</NavLink>
				<NavLink to="#">Communauté</NavLink>
			</nav>
		</header>
	);
}

export default Header;
