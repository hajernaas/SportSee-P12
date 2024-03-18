import React, { useState, useEffect } from "react";
import { UserActivity } from "../service/Api";
//import { useParams, Navigate } from "react-router-dom";
import { Navigate, useParams } from "react-router-dom";
//import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
/*import styled from "styled-components";
import { BarChart, CartesianGrid, Tooltip, XAxis, YAxis, Bar, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";*/
import { BarChart, CartesianGrid, Tooltip, XAxis, YAxis, Bar, ResponsiveContainer } from "recharts";

function ActivityChart() {
	const { userId } = useParams();
	const [fetchedData, setData] = useState([]);
	const [error, setError] = useState(null);
	//const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await UserActivity(userId);
				console.log("infoActivity", data);
				//console.log("dar", data?.userId);
				console.log("sessions", data?.sessions);
				if (data) {
					setData(data);
				} else {
					throw new Error("Aucune donnée disponible.");
				}
			} catch (error) {
				setError(error.message);
			}
		}
		//setLoading(true);
		fetchData();
	}, [userId]);

	console.log("fetched", fetchedData);

	if (error) return <Navigate to="/Error" />;

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

	return (
		<div className="barChart">
			<div className="LegendBox">
				<h3>Activité quotidienne</h3>
				<ul>
					<li>
						<div></div>
						Poids (kg)
					</li>
					<li>
						<div></div> Calories Brûlées (kCal)
					</li>
				</ul>
			</div>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={fetchedData}
					barGap={8}
					margin={{ top: 100, right: 20, left: 50, bottom: 20 }}>
					<CartesianGrid strokeDasharray="5 5" horizontalPoints={[100, 175]} vertical={false} />
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
						domain={[0, "dataMax+20"]}
						yAxisId="left"
						hide={true}
						axisLine={false}
					/>
					<YAxis
						dataKey="kg"
						domain={["dataMin-1", "dataMax+2"]}
						orientation="right"
						yAxisId="right"
						tickCount={3}
						tickLine={false}
						dx={40}
						axisLine={false}
						tick={{ fontSize: 14, fontWeight: 500 }}
					/>
					<Tooltip
						offset={20}
						content={CustomTooltip}
						cursor={{
							fill: "rgba(0, 0,0, 0.3)",
						}}
					/>
					<Bar dataKey="kg" fill="#282D30" barSize={10} radius={[5, 5, 0, 0]} yAxisId="right" />
					<Bar
						dataKey="calories"
						fill="#E60000"
						barSize={10}
						radius={[5, 5, 0, 0]}
						yAxisId="left"
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default ActivityChart;
