//import data from "../mock/data.json";
//import { USER_MAIN_DATA } from "../data/data.js";
import dataUser from "../mock/user-main-data.json";
import dataActivity from "../mock/user-activity.json";
import dataAverageSessions from "../mock/user-average-sessions.json";
import dataPerformance from "../mock/user-performance.json";

//import { USER_ACTIVITY } from "../data/data";

import {
	UserData,
	ActivityData,
	AverageSessionData,
	PerformanceData,
} from "../service/FormattedData";

//const isMockData = process.env.REACT_APP_USE_MOCK_DATA === "true";
const isMockData = true;
const API_URL = process.env.REACT_APP_API_URL;
console.log("is", isMockData);

export async function UserInfo(userId) {
	if (isMockData) {
		console.log("is", isMockData);
		const mockData = dataUser.find((user) => user.id === Number(userId));
		console.log("mockData", mockData);
		if (!mockData) throw new Error("User not found in mock data");
		return new UserData(mockData).getUserData();
		//return mockData;
	} else {
		try {
			const response = await fetch(`${API_URL}/${userId}`);
			if (!response.ok) throw new Error("Network response was not ok");
			const data = await response.json();
			return new UserData(data.data);
		} catch (error) {
			console.error("There has been a problem with your fetch operation:", error);
			throw error;
		}
	}
}

export async function UserActivity(userId) {
	if (isMockData) {
		const mockData = dataActivity.find((activity) => activity.userId === Number(userId));
		//const mockData = USER_ACTIVITY.find((activity) => activity.userId === Number(userId));
		if (!mockData) throw new Error("Activity not found in mock data");
		return new ActivityData(mockData).getActivityData();
	} else {
		try {
			const response = await fetch(`${API_URL}/${userId}/activity`);
			if (!response.ok) throw new Error("Network response was not ok");
			const data = await response.json();
			return new ActivityData(data.data);
		} catch (error) {
			console.error("fetch operation error:", error);
			throw error;
		}
	}
}

export async function UserAverageSessions(userId) {
	if (isMockData) {
		const mockData = dataAverageSessions.find((session) => session.userId === Number(userId));
		if (!mockData) throw new Error("Average sessions not found in mock data");
		return new AverageSessionData(mockData).getAverageSessionData();
	} else {
		try {
			const response = await fetch(`${API_URL}/${userId}/average-sessions`);
			if (!response.ok) throw new Error("Network response was not ok");
			const data = await response.json();
			return new AverageSessionData(data.data).getAverageSessionData();
		} catch (error) {
			console.error(" fetch operation error:", error);
			throw error;
		}
	}
}

export async function UserPerformance(userId) {
	if (isMockData) {
		const mockData = dataPerformance.find((performance) => performance.userId === Number(userId));
		if (!mockData) throw new Error("Performance not found in mock data");
		return new PerformanceData(mockData).getPerformanceData();
	} else {
		try {
			const response = await fetch(`${API_URL}/${userId}/performance`);
			if (!response.ok) throw new Error("Network response was not ok");
			const data = await response.json();

			return new PerformanceData(data.data).getPerformanceData();
		} catch (error) {
			console.error("fetch operation error:", error);
			throw error;
		}
	}
}
