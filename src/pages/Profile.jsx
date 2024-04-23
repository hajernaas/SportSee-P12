import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserInfo } from "../service/Api";
import KeyDataDetails from "../components/KeyDataDetails";
import ActivityChart from "../components/ActivityChart";
import AverageSessionsChart from "../components/AverageSessionsChart";
import PerformanceChart from "../components/PerformanceChart";
import ScoreChart from "../components/ScoreChart";

/**
 * Page profil d'utilisateur
 *
 * @category Pages
 * @component
 * @returns { React.Component } A React component
 */

function Profile() {
	const { userId } = useParams();
	const [userData, setUser] = useState({});
	const [error, setError] = useState(false);

	useEffect(() => {
		async function fetchDataUser() {
			try {
				const data = await UserInfo(userId);
				setUser(data);
			} catch (error) {
				console.log("===== error =====", error);
				setError(true);
			}
		}

		fetchDataUser();
	}, [userId]);

	if (error) return <Navigate to="/Error" />;

	return (
		<section className="dashborad">
			<div className="dashborad__bloc">
				<div className="dashborad__bloc--title">
					<h1>
						Bonjour <span>{userData?.userInfos?.firstName || ""}</span>
					</h1>
					<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
				</div>
				<div className="dashborad__bloc--userInfo">
					<div className="graph">
						<div className="graph__activity">
							<ActivityChart />
						</div>

						<div className="graph__sub-activity">
							<AverageSessionsChart />
							<PerformanceChart />
							<ScoreChart score={userData?.score} />
						</div>
					</div>

					<div className="nutriment">
						<KeyDataDetails keyData={userData?.keyData} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Profile;
