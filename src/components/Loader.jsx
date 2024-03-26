import { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

function Loader() {
	const { userId } = useParams();
	console.log("ddddddddddddddddddddd");
	const navigate = useNavigate();
	useEffect(() => {
		const timer = setTimeout(() => {
			navigate("/user/" + userId);
			//<h2 className="center">Chargement...</h2>;
		}, 4000);
		return () => clearTimeout(timer);
	});
	return <h2 className="chargement ">Chargement...</h2>;
}

export default Loader;
