import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Tooltip, LineChart, Line, XAxis, YAxis, ResponsiveContainer, Rectangle } from "recharts";
import PropTypes from "prop-types";
import { UserAverageSessions } from "../service/Api";
//import Loader from "../components/Loader";

/**
 * Render the LineChart : retrieves the average sessions of a user per da
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function AverageSessionsChart() {
	const { userId } = useParams();
	const [averageSessionsData, setAverageSessions] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		async function fetchDataAverageSessions() {
			try {
				const data = await UserAverageSessions(userId);
				setAverageSessions(data);
			} catch (error) {
				console.log("===== error =====", error);
				setError(true);
			} finally {
				setLoading(false);
			}
		}

		fetchDataAverageSessions();
	}, [userId]);

	if (error) return <Navigate to="/Error" />;

	if (isLoading) {
		return <section className="dashborad">{<h2 className="center">Chargement...</h2>}</section>;
	}

	return (
		<>
			{/* {isLoading ? ( */}
			{/* <Loader /> */}
			{/* ) : ( */}
			<div className="containerAverage">
				{averageSessionsData && (
					<>
						<h3 className="titleAvrerage">
							Durée moyenne des <br />
							sessions
						</h3>
						{/* <ResponsiveContainer width="100%" aspect={258 / 263}> */}
						<ResponsiveContainer width="100%" height="100%">
							<LineChart
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
									<linearGradient id="white" x1="100%" y1="0" x2="0%" y2="0">
										<stop stopColor="#FFF" />
										<stop offset="0.810441" stopColor="#FFF" stopOpacity="0.403191" />
									</linearGradient>
								</defs>
							</LineChart>
						</ResponsiveContainer>
					</>
				)}
			</div>
			{/* )} */}
		</>
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

/**
 * custom Component as the cursor prop.
 *
 * @param {Object[]} points
 * @param {Number} points[].x
 * @param {Number} points[].y
 * @returns {Component} Rectangle
 */

const CustomCursor = ({ points }) => {
	return <Rectangle fill="#000000" opacity={0.1} x={points[0].x} width={600} height={500} />;
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
