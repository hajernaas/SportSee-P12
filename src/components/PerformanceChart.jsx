import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { UserPerformance } from "../service/Api";

function PerformanceChart() {
	const { userId } = useParams();
	const [performanceData, setPerformanceData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchDataPerformance() {
			try {
				const data = await UserPerformance(userId);
				console.log("PerformanceData", data);
				setPerformanceData(data);
			} catch (err) {
				console.log("===== error =====", err);
				setError(true);
			}
		}
		fetchDataPerformance();
	}, [userId]);

	if (error) return <Navigate to="/Error" />;
	return (
		<div className="performance_graph">
			<ResponsiveContainer width="100%" aspect={258 / 263}>
				<RadarChart
					outerRadius="60%"
					data={performanceData}
					cx="50%"
					cy="50%"
					margin={{ top: 20, right: 15, bottom: 20, left: 15 }}>
					<PolarGrid />
					<PolarAngleAxis
						dataKey="kindPerf"
						stroke="#FFFFFF"
						dy={2.5}
						tickLine={false}
						fontSize={11}
					/>
					<Radar name="Performance" dataKey="value" fill="#E60000" fillOpacity={0.8} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default PerformanceChart;
