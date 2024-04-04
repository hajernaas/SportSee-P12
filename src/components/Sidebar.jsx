import { Link } from "react-router-dom";
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
			<nav className="sidebar__nav">
				<ul className="sidebar__nav-ul">
					<li>
						<Link to="#">
							<img src={yoga} alt="logo yoga" />
						</Link>
					</li>
					<li>
						<Link to="#">
							<img src={swimming} alt="logo nage " />
						</Link>
					</li>
					<li>
						<Link to="#">
							<img src={biking} alt="logo vélo " />
						</Link>
					</li>
					<li>
						<Link to="#">
							<img src={weightLifting} alt="logo altère" />
						</Link>
					</li>
				</ul>
			</nav>
			<p className="sidebar__copyright">Copyright, SportSee 2020</p>
		</div>
	);
}

export default Sidebar;
