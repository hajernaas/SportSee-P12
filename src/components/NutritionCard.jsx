import PropTypes from "prop-types";

/**
 * Render a div (card) of key data containing an image , title and count( calories, lipid...)
 *
 * @category Components
 * @component
 * @param  {string} title
 * @param  {string} cover
 * @param  {string} count
 * @returns { React.Component } A React component
 */
function NutritionCard({ title, count, cover }) {
	return (
		<div className="NutritionCard">
			<img className="NutritionCard__img" src={cover} alt={`Logo ${title}`} />
			<div className="NutritionCard__infos">
				<p>{count}</p>
				<span>{title}</span>
			</div>
		</div>
	);
}

NutritionCard.propTypes = {
	title: PropTypes.string,
	count: PropTypes.string,
	cover: PropTypes.string,
};

export default NutritionCard;
