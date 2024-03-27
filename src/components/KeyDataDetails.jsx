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
			<NutritionCard
				title={"Calories"}
				count={`${keyData?.calorieCount.toLocaleString("en-US")}kCal`}
				cover={calorieIcon}
			/>
			<NutritionCard
				title={"Proteines"}
				count={`${keyData?.proteinCount.toLocaleString("en-US")}g`}
				cover={proteineIcon}
			/>
			<NutritionCard
				title={"Glucides"}
				count={`${keyData?.carbohydrateCount.toLocaleString("en-US")}g`}
				cover={glucideIcon}
			/>
			<NutritionCard
				title={"Lipides"}
				count={`${keyData?.lipidCount.toLocaleString("en-US")}g`}
				cover={lipidIcon}
			/>
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
