import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserInfo } from "../service/Api";
import KeyDataDetails from "../components/KeyDataDetails";
import ActivityChart from "../components/ActivityChart";
import AverageSessionsChart from "../components/AverageSessionsChart";

function Profile() {
	const { userId } = useParams();
	const [userData, setUser] = useState({});
	const [error, setError] = useState(false);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		//setLoading(true);
		async function fetchDataUser() {
			try {
				const data = await UserInfo(userId);
				console.log("infoUser", data);
				console.log("firstname", data.userInfos.firstName);
				console.log("keydata", data.keyData);
				setUser(data);
				setLoading(false);
				/*if (data) {
					setUser(data);
				
				} else {
					throw new Error("Aucune donnée disponible.");
				}*/
			} catch (err) {
				console.log("===== error =====", err);
				setError(true);
			} /*finally {
				setLoading(false);
			
			}*/
		}
		setLoading(true);
		fetchDataUser();
	}, [userId]);

	if (error) return <Navigate to="/Error" />;

	if (isLoading) {
		<section className="dashborad">
			<h2 className="center">Chargement...</h2>
		</section>;
		//return <p className="errorMessage">Chargement...</p>;
	}
	console.log("isLoading4", isLoading);

	return userData ? (
		<>
			<section className="dashborad">
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
							</div>
						</div>

						<div className="nutriment">
							<KeyDataDetails keyData={userData?.keyData} />
						</div>
					</div>
				</div>
			</section>
		</>
	) : (
		<p className="errorMessage">Erreur de chargement des données utilisateur..</p>
	);
}

export default Profile;
