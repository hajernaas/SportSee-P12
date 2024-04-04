import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./sass/main.scss";

/**
 *  Routing file and the Routes component which encompasses all declared routes
 *  Header, Sidebar and application pages
 *
 * @category Router
 * @component
 * @returns { React.Component } A React component
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<main>
				<Sidebar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/user/:userId" element={<Profile />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</main>
		</Router>
	</React.StrictMode>
);
