import React, { useState, useEffect } from "react";
import { UserActivity } from "../service/Api";
//import { useParams, Navigate } from "react-router-dom";
import { Navigate, useParams } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
/*import styled from "styled-components";
import { BarChart, CartesianGrid, Tooltip, XAxis, YAxis, Bar, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";*/

function ChartActivity() {
	const { userId } = useParams();
	const [fetchedData, setData] = useState([]);
	const [error, setError] = useState(null);
	//const [isLoading, setLoading] = useState(true);

	const activityData = [
		{
			day: 1,
			"Poids (kg)": 80,
			"Calories brûlées (kCal)": 240,
		},
		{
			day: 2,
			"Poids (kg)": 80,
			"Calories brûlées (kCal)": 220,
		},
		{
			day: 3,
			"Poids (kg)": 81,
			"Calories brûlées (kCal)": 280,
		},
		{
			day: 4,
			"Poids (kg)": 81,
			"Calories brûlées (kCal)": 290,
		},
		{
			day: 5,
			"Poids (kg)": 80,
			"Calories brûlées (kCal)": 160,
		},
		{
			day: 6,
			"Poids (kg)": 78,
			"Calories brûlées (kCal)": 162,
		},
		{
			day: 7,
			"Poids (kg)": 76,
			"Calories brûlées (kCal)": 390,
		},
	];

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
				<div style={{ backgroundColor: "#E60000", padding: "10px", color: "white" }}>
					<p>{payload[0].value}kg</p>
					<p>{payload[1].value}Kcal</p>
				</div>
			);
		}

		return null;
	};

	return (
		<div className="barChart">
			<h3>Activité quotidienne</h3>
			<BarChart
				width={1000}
				height={300}
				data={activityData}
				margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
				barGap={10}>
				<CartesianGrid strokeDasharray="3 3" horizontalPoints={[50, 150]} vertical={false} />
				<XAxis dataKey="day" />
				<Tooltip content={<CustomTooltip />} />

				<YAxis yAxisId="Poids (kg)" orientation="right" stroke="#282D30" />
				<YAxis yAxisId="Calories brûlées (kCal)" orientation="left" hide={true} />

				<Legend
					align="right"
					verticalAlign="top"
					layout="horizontal"
					wrapperStyle={{ top: 0, right: 0 }}
					iconType="circle"
				/>
				<Bar
					yAxisId="Poids (kg)"
					dataKey="Poids (kg)"
					fill="#282D30"
					radius={[10, 10, 0, 0]}
					barSize={15}
				/>
				<Bar
					yAxisId="Calories brûlées (kCal)"
					dataKey="Calories brûlées (kCal)"
					fill="#E60000"
					radius={[10, 10, 0, 0]}
					barSize={15}
				/>
			</BarChart>
		</div>
	);
}

export default ChartActivity;
