import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserInfo } from "../service/Api";
//import ActivityChart from "../components/ActivityChart";
//import Activity from "../components/Activity";
//import { Barchart } from "../components/Barchart";
import ChartActivity from "../components/ActivityChart";

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
							{/* <ActivityChart userId={fetchedData?.id} />{" "} */}
							{/* <Activity userId={fetchedData?.id} /> */}
							{/* <ActivityChart /> */}
							<ChartActivity />
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
