import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SidebarIcon({ logo }) {
	return (
		<button className="sidebar__icon-img">
			<Link to="#">
				<img src={logo} alt="" className="sidebar__icon-img-logo" />
			</Link>
		</button>
	);
}

SidebarIcon.propTypes = {
	logo: PropTypes.string,
};

export default SidebarIcon;
