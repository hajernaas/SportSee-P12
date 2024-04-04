import React, { useState, useEffect } from "react";
import { UserActivity } from "../service/Api";
import { useParams } from "react-router-dom";
import { BarChart, CartesianGrid, Tooltip, XAxis, YAxis, Bar, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

/**
 * Render the BarChart : retrieves a user's activity day by day with kilograms and calories.
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function ActivityChart() {
	const { userId } = useParams();
	const [activityData, setActivity] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchDataActivity() {
			try {
				const data = await UserActivity(userId);
				setActivity(data);
			} catch (error) {
				console.log("===== error =====", error);
				setError(true);
			}
		}

		fetchDataActivity();
	}, [userId]);

	if (error)
		return (
			<div className="barChart">
				<p>Données innaccessibles.</p>
			</div>
		);

	return (
		<div className="barChart">
			{activityData && (
				<>
					<div className="LegendBox">
						<h3>Activité quotidienne</h3>
						<ul>
							<li>
								<div></div>
								<span>Poids (kg)</span>
							</li>
							<li>
								<div></div> <span>Calories Brûlées (kCal)</span>
							</li>
						</ul>
					</div>
					{/* <ResponsiveContainer> */}
					<ResponsiveContainer width="100%" height="100%">
						<BarChart
							data={activityData}
							barGap={8}
							margin={{ top: 100, right: 20, left: 50, bottom: 20 }}>
							<CartesianGrid strokeDasharray="3 3" horizontalPoints={[100, 175]} vertical={false} />
							<XAxis
								tick={{ fontSize: 14, fontWeight: 500 }}
								dy={15}
								tickLine={false}
								dataKey="day"
								padding={{ left: -45, right: -48 }}
								axisLine={{ stroke: "#DEDEDE" }}
							/>
							<YAxis
								dataKey="calories"
								yAxisId="calories"
								orientation="left"
								hide={true}
								axisLine={false}
							/>
							<YAxis
								dataKey="kg"
								domain={["dataMin-5", "dataMax+10"]}
								orientation="right"
								yAxisId="kilogram"
								tickCount={3}
								tickLine={false}
								dx={40}
								axisLine={false}
								tick={{ fontSize: 14, fontWeight: 500 }}
							/>
							<Tooltip
								offset={28}
								content={CustomTooltip}
								cursor={{
									fill: "rgba(196, 196, 196, 0.50)",
								}}
							/>
							<Bar
								dataKey="kg"
								fill="#282D30"
								barSize={10}
								radius={[30, 30, 0, 0]}
								yAxisId="kilogram"
							/>
							<Bar
								dataKey="calories"
								fill="#E60000"
								barSize={10}
								radius={[30, 30, 0, 0]}
								yAxisId="calories"
							/>
						</BarChart>
					</ResponsiveContainer>
				</>
			)}
		</div>
	);
}

/**
 * Custom barchart tooltip
 * @param {Boolean} active Tooltip status
 * @param {array} payload Contain barchart datas (user weight and user calories)
 * @returns {Component} div with data to display
 **/
const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className="TooltipBox">
				<p>{`${payload[0].value}kg`}</p>
				<p>{`${payload[1].value}Kcal`}</p>
			</div>
		);
	}
	return null;
};

CustomTooltip.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};

export default ActivityChart;
