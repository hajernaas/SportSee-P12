import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserInfo } from "../service/Api";
import KeyDataDetails from "../components/KeyDataDetails";
import ActivityChart from "../components/ActivityChart";
import AverageSessionsChart from "../components/AverageSessionsChart";
import PerformanceChart from "../components/PerformanceChart";

//import { LoaderInTo404 } from "../components/Loader";

function Profile() {
	const { userId } = useParams();
	const [userData, setUser] = useState({});
	const [error, setError] = useState(false);
	/*const [isLoading, setLoading] = useState(true);
	console.log("isLoading", isLoading);*/

	useEffect(() => {
		//setLoading(true);
		async function fetchDataUser() {
			//setLoading(true);
			try {
				const data = await UserInfo(userId);
				console.log("infoUser", data);
				console.log("firstname", data.userInfos.firstName);
				console.log("keydata", data.keyData);
				setUser(data);
				// setLoading(false);
			} catch (err) {
				console.log("===== error =====", err);
				setError(true);
			} /*finally {
				setLoading(false);
			}*/
		}
		//setLoading(true);
		fetchDataUser();
	}, [userId]);

	if (error) return <Navigate to="/Error" />;
	/*console.log("isLoading4", isLoading);
	if (isLoading) {
		return (
			<section className="dashborad">
				{ <h2>Chargement...</h2> }
				<LoaderInTo404 />
			</section>
		);

	}*/

	return (
		<section className="dashborad">
			{userData && (
				<div className="dashborad__bloc">
					<div className="dashborad__bloc--title">
						<h1>
							Bonjour
							<span>{userData?.userInfos?.firstName}</span>
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
							</div>
						</div>

						<div className="nutriment">
							<KeyDataDetails keyData={userData?.keyData} />
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

export default Profile;
