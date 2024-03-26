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
 * Fichier de routing et le composant Routes qui englobe toutes les routes déclarés 
   Header, Sidebar et les pages de l'application
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
			<Sidebar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/user/:userId" element={<Profile />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
