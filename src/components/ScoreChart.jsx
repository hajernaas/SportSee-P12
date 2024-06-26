import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import PropTypes from "prop-types";

/**
 * Render the PieChart : to represent the score as a percentage
 * @category Components
 * @component
 * @param  {number} {score}
 * @returns { React.Component } A React component
 */
function ScoreChart({ score }) {
	const dataScore = [
		{ name: "score", value: score },
		{ name: "score restant", value: 100 - score },
	];

	if (score === undefined) {
		return (
			<div className="scoreGraph">
				<p>Données inaccessibles.</p>
			</div>
		);
	}

	return (
		<div className="scoreGraph">
			<h2 className="scoreGraph__title"> Score </h2>
			<ResponsiveContainer width="100%" aspect={258 / 263}>
				<PieChart>
					<Pie
						data={dataScore}
						dataKey="value"
						fill="FF0000"
						cx="50%"
						cy="50%"
						startAngle={90}
						endAngle={450}
						innerRadius="70%"
						outerRadius="80%"
						cornerRadius="50%">
						{dataScore.map((elm, index) => (
							<Cell key={`cell-${index}`} fill={elm.name === "score" ? "#FF0000" : "white"} />
						))}
					</Pie>

					{/* zone blanche à l'intérieur du cercle */}
					<Pie
						data={[{ value: 100 - score }]}
						dataKey={"value"}
						cx="50%"
						cy="50%"
						startAngle={210}
						endAngle={-210}
						outerRadius="70%"
						fill="white"
						isAnimationActive={false}
					/>

					<text
						className="scorePercent"
						x="50%"
						y="40%"
						textAnchor="middle"
						alignmentBaseline="middle"
						fill="black">
						{score}%
					</text>
					<text
						className="scoreText"
						x="50%"
						y="50%"
						textAnchor="middle"
						alignmentBaseline="middle"
						fill="#74798C">
						de votre
					</text>
					<text
						className="scoreText"
						x="50%"
						y="60%"
						textAnchor="middle"
						alignmentBaseline="middle"
						fill="#74798C">
						objectif
					</text>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}

export default ScoreChart;

ScoreChart.propTypes = {
	score: PropTypes.number,
};
