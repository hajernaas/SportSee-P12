import SidebarIcon from "../components/SidebarIcon";
import yoga from "../assets/yoga-icon.svg";
import swimming from "../assets/swim-icon.svg";
import biking from "../assets/biking-icon.svg";
import weightLifting from "../assets/weightLifting-icon.svg";

/**
 * Render the sidebar with icons and copyright
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__icon center">
				<SidebarIcon logo={yoga} />
				<SidebarIcon logo={swimming} />
				<SidebarIcon logo={biking} />
				<SidebarIcon logo={weightLifting} />
			</div>
			<p className="sidebar__copyright">Copyright, SportSee 2020</p>
		</div>
	);
}

export default Sidebar;
