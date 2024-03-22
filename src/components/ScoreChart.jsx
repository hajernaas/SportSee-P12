import { RadialBar, RadialBarChart, Legend, PolarAngleAxis, ResponsiveContainer } from "recharts";

function ScoreChart({ score }) {
	const dataArray = [{ name: "score", value: score }];

	function LegendScore() {
		return (
			<div className="custom-legend" style={{ textAlign: "center" }}>
				<span className="legend-score">{score}%</span>
				<p>
					de votre <br></br>objectif
				</p>
			</div>
		);
	}

	return (
		<div className="score_graph">
			<h2> Score </h2>
			<ResponsiveContainer width="100%" aspect={258 / 263}>
				<RadialBarChart
					cx="50%"
					cy="50%"
					innerRadius="75%"
					outerRadius="85%"
					startAngle={90}
					endAngle={450}
					barSize={10}
					data={dataArray}
					style={{ backgroundColor: "#FFFFFF", clipPath: "circle(37.5% at 50% 50%)" }}>
					<PolarAngleAxis
						type="number"
						domain={[0, 100]}
						angleAxisId={0}
						tick={false}
						fill="#FF0000"
					/>
					<RadialBar
						minAngle={100}
						background={{ fill: "#FBFBFB" }}
						cornerRadius={5}
						clockWise={true}
						dataKey="value"
						angleAxisId={0}
						fill="#FF0000"
						style={{ zIndex: 5 }}
					/>
					<Legend content={<LegendScore />} layout="vertical" verticalAlign="middle" />
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default ScoreChart;
