import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserInfo } from "../service/Api";
import KeyDataDetails from "../components/KeyDataDetails";
import ActivityChart from "../components/ActivityChart";

function Profile() {
	const { userId } = useParams();
	const [fetchedData, setData] = useState({});
	const [error, setError] = useState(null);
	//const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await UserInfo(userId);
				console.log("infoUser", data);
				console.log("firstname", data.userInfos.firstName);
				console.log("keydata", data.keyData);
				if (data) {
					setData(data);
					//setLoading(false);
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

	if (error) return <Navigate to="/Error" />;

	/*	return fetchedData ? (
		<>
			<section className="profile">
				<section className="profile__title">
					<h1>
						Bonjour
						<span>{fetchedData?.userInfos?.firstName}</span>
					</h1>
					<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
				</section>

				<section className="profile__details">
					<KeyDataDetails keyData={fetchedData?.keyData} />
					<div className="section-graph">
						<ActivityChart />
					</div>
				</section>
			</section>
		</>
	) : (
		<p className="errorMessage">Erreur de chargement des données utilisateur..</p>
	);*/

	return fetchedData ? (
		<>
			<section>
				<div className="Home-bloc">
					<div className="title">
						<h1>
							Bonjour
							<span>{fetchedData?.userInfos?.firstName}</span>
						</h1>
						<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
					</div>
					<div className="main-userInfo">
						<div className="section-graph">
							<ActivityChart />
							<div className="container-sub-graph"></div>
						</div>
						<div className="section-nutriment">
							<KeyDataDetails keyData={fetchedData?.keyData} />
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
