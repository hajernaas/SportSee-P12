import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Tooltip, LineChart, Line, XAxis, YAxis, ResponsiveContainer, Rectangle } from "recharts";
import PropTypes from "prop-types";
import { UserAverageSessions } from "../service/Api";

function AverageSessionsChart() {
	const { userId } = useParams();
	const [averageSessionsData, setAverageSessions] = useState([]);
	const [error, setError] = useState(null);
	//const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchDataAverageSessions() {
			try {
				const data = await UserAverageSessions(userId);
				console.log("ActivitySessions", data);
				if (data) {
					setAverageSessions(data);
				} else {
					throw new Error("Aucune donnée disponible.");
				}
			} catch (error) {
				setError(error.message);
			}
		}
		//setLoading(true);
		fetchDataAverageSessions();
	}, [userId]);

	if (error) return <Navigate to="/Error" />;

	return (
		<div className="containerAverage">
			<h3 className="titleAvrerage">
				Durée moyenne des <br />
				sessions
			</h3>
			<ResponsiveContainer width="100%" aspect={258 / 263}>
				<LineChart
					//width={730}
					//height={250}
					data={averageSessionsData}
					margin={{ top: 80, bottom: 16, left: 16, right: 16 }}>
					<XAxis
						dataKey="day"
						dy={10}
						axisLine={false}
						tickLine={false}
						tick={{ fill: "#FFFFFF", opacity: "0.5", fontSize: 12, fontWeight: 500 }}
					/>
					<YAxis hide={true} domain={["dataMin-20", "dataMax+10"]} />
					<Tooltip content={CustomTooltip} cursor={<CustomCursor />} />

					<Line
						type="natural"
						dataKey="sessionLength"
						stroke="url(#white)"
						strokeWidth={2}
						dot={false}
						activeDot={{
							//stroke: "#FFFFFF",
							stroke: "rgba(255, 255, 255, 0.2)",
							strokeWidth: 5,
							fill: "#FFF",
							r: 4,
						}}
					/>

					<defs>
						<linearGradient id="white" x1="0%" y1="0" x2="100%" y2="0">
							<stop offset="0%" stopColor="rgba(255, 255, 255, 0.5)" />
							<stop offset="20%" stopColor="rgba(255, 255, 255, 0.55)" />
							<stop offset="40%" stopColor="rgba(255, 255, 255, 0.6)" />
							<stop offset="60%" stopColor="rgba(255, 255, 255, 0.65)" />
							<stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
						</linearGradient>
					</defs>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className="TooltipBoxAverage">
				<p>{`${payload[0].value} min`}</p>
			</div>
		);
	}
	return null;
};

CustomTooltip.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};

const CustomCursor = ({ points }) => {
	return <Rectangle fill="#000000" opacity={0.2} x={points[0].x} width={500} height={400} />;
};

CustomCursor.propTypes = {
	points: PropTypes.arrayOf(
		PropTypes.shape({
			x: PropTypes.number,
			y: PropTypes.number,
		})
	),
};
export default AverageSessionsChart;
