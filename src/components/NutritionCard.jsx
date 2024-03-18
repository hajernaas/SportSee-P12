import PropTypes from "prop-types";

function NutritionCard({ title, count, cover }) {
	console.log("count", count);
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
