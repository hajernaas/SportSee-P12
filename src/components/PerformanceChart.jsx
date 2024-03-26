import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { UserPerformance } from "../service/Api";
//import Loader from "../components/Loader";

function PerformanceChart() {
	const { userId } = useParams();
	const [performanceData, setPerformanceData] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		async function fetchDataPerformance() {
			try {
				const data = await UserPerformance(userId);
				console.log("PerformanceData", data);
				setPerformanceData(data);
			} catch (err) {
				console.log("===== error =====", err);
				setError(true);
			} finally {
				setLoading(false);
			}
		}
		fetchDataPerformance();
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
			<div className="performanceGraph">
				{performanceData && (
					<ResponsiveContainer width="100%" height="100%">
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
			{/* )} */}
		</>
	);
}

export default PerformanceChart;
