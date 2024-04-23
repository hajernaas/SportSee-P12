import PropTypes from "prop-types";
import NutritionCard from "./NutritionCard";
import calorieIcon from "../assets/calorie-icon.svg";
import proteineIcon from "../assets/proteine-icon.svg";
import glucideIcon from "../assets/glucide-icon.svg";
import lipidIcon from "../assets/lipide-icon.svg";

/**
 * Render a KeyDataDetails (calorie, macronutrient, etc.).
 *
 * @category Components
 * @component
 * @param  {object} {keyData} count of calories, lipids, protein....
 * @returns { React.Component } A React component
 */

function KeyDataDetails({ keyData }) {
	return (
		<div className="KeydataContainer">
			{keyData?.calorieCount ? (
				<>
					<NutritionCard
						title={"Calories"}
						count={`${keyData?.calorieCount.toLocaleString("en-US")}kCal`}
						cover={calorieIcon}
					/>
				</>
			) : (
				<div className="NutritionCard">Données inaccessibles.</div>
			)}

			{keyData?.proteinCount ? (
				<>
					<NutritionCard
						title={"Proteines"}
						count={`${keyData?.proteinCount}g`}
						cover={proteineIcon}
					/>
				</>
			) : (
				<div className="NutritionCard">Données inaccessibles.</div>
			)}

			{keyData?.carbohydrateCount ? (
				<>
					<NutritionCard
						title={"Glucides"}
						count={`${keyData?.carbohydrateCount}g`}
						cover={glucideIcon}
					/>
				</>
			) : (
				<div className="NutritionCard">Données inaccessibles.</div>
			)}
			{keyData?.lipidCount ? (
				<>
					<NutritionCard title={"Lipides"} count={`${keyData?.lipidCount}g`} cover={lipidIcon} />
				</>
			) : (
				<div className="NutritionCard">Données inaccessibles.</div>
			)}
		</div>
	);
}

KeyDataDetails.propTypes = {
	keyData: PropTypes.shape({
		calorieCount: PropTypes.number,
		proteinCount: PropTypes.number,
		carbohydrateCount: PropTypes.number,
		lipidCount: PropTypes.number,
	}),
};

export default KeyDataDetails;
