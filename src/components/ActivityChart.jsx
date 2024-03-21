import React, { useState, useEffect } from "react";
import { UserActivity } from "../service/Api";
import { Navigate, useParams } from "react-router-dom";
import { BarChart, CartesianGrid, Tooltip, XAxis, YAxis, Bar, ResponsiveContainer } from "recharts";

function ActivityChart() {
	const { userId } = useParams();
	const [activityData, setActivity] = useState([]);
	const [error, setError] = useState(false);
	//const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchDataActivity() {
			//setLoading(true);
			try {
				const data = await UserActivity(userId);
				console.log("infoActivity", data);
				//console.log("dar", data?.userId);
				console.log("sessions", data?.sessions);
				setActivity(data);

				/*if (data) {
					setActivity(data);
				} else {
					throw new Error("Aucune donnée disponible.");
				}*/
			} catch (err) {
				console.log("===== error =====", err);
				setError(true);
			} /* finally {
				setLoading(false);
			}*/
		}
		//setLoading(true);
		fetchDataActivity();
	}, [userId]);

	console.log("fetched", activityData);

	if (error) return <Navigate to="/Error" />;

	/*if (isLoading) {
	
		if (isLoading) {
			<section className="dashborad">
				<h2 className="center">Chargement...</h2>
			</section>;
			//return <p className="errorMessage">Chargement...</p>;
		}
	}
	console.log("isLoading3", isLoading);*/

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
						<span>Poids (kg)</span>
					</li>
					<li>
						<div></div> <span>Calories Brûlées (kCal)</span>
					</li>
				</ul>
			</div>
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
						//	domain={[0, "dataMax +100"]}
						domain={["dataMin-150", "dataMax+0"]}
						yAxisId="calories"
						orientation="left"
						hide={true}
						axisLine={false}
					/>
					<YAxis
						dataKey="kg"
						domain={["dataMin-5", "dataMax+10"]}
						//domain={["dataMin-5", "dataMax+10"]}
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
		</div>
	);
}

export default ActivityChart;
