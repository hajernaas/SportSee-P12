import { Link } from "react-router-dom";

/**
 * Rendre page Home :renvoyer pour chaque route inexistante
 *
 * @category Pages
 * @component
 * @returns { React.Component } A React component
 */
function Error() {
	return (
		<section className="error">
			<h1 className="error__title">404</h1>
			<p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
			<Link className="error__link" to="/">
				Retourner sur la page d’accueil
			</Link>
		</section>
	);
}

export default Error;
