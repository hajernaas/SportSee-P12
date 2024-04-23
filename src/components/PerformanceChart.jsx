import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { UserPerformance } from "../service/Api";

/**
 * Render a RadarChart : retrieves a user's performance (energy, endurance, etc.).
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function PerformanceChart() {
	const { userId } = useParams();
	const [performanceData, setPerformanceData] = useState({});
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchDataPerformance() {
			try {
				const data = await UserPerformance(userId);
				setPerformanceData(data);
			} catch (error) {
				console.log("===== error =====", error);
				setError(true);
			}
		}
		fetchDataPerformance();
	}, [userId]);

	if (error)
		return (
			<div className="performanceGraph">
				<p>Données inaccessibles.</p>
			</div>
		);
	return (
		<div className="performanceGraph">
			{performanceData && (
				<ResponsiveContainer width="100%" aspect={258 / 263}>
					<RadarChart
						outerRadius="60%"
						data={performanceData}
						cx="50%"
						cy="50%"
						margin={{ top: 20, right: 15, bottom: 20, left: 15 }}>
						<PolarGrid />
						<PolarAngleAxis
							className="performanceGraph__kindPerf"
							dataKey="kindPerf"
							stroke="#FFFFFF"
							dy={2.75}
							tickLine={false}
							fontSize={12}
							fontWeight={500}
						/>
						<Radar name="Performance" dataKey="value" fill=" rgba(255, 1, 1, 0.70)" />
					</RadarChart>
				</ResponsiveContainer>
			)}
		</div>
	);
}

export default PerformanceChart;
