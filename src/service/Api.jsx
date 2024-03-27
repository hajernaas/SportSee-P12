import dataUser from "../mock/user-main-data.json";
import dataActivity from "../mock/user-activity.json";
import dataAverageSessions from "../mock/user-average-sessions.json";
import dataPerformance from "../mock/user-performance.json";

import {
	UserData,
	ActivityData,
	AverageSessionData,
	PerformanceData,
} from "../service/FormattedData";

const isMockData = true;
const API_URL = process.env.REACT_APP_API_URL;

/**
 *This function will retrieve the simulated data.if the operation fails, it will retrieve data from the API
 * Also returns objects regarding user information in the case of success and errors in the case of failure
 * @category API
 * @returns {Object}
 */

/**
 * Function UserInfo - get user data.
 *
 * @param {string} userId - The id value of user
 **/

export async function UserInfo(userId) {
	if (isMockData) {
		const mockData = dataUser.find((user) => user.id === Number(userId));
		if (!mockData) throw new Error("User not found in mock data");
		return new UserData(mockData).getUserData();
	} else {
		try {
			const response = await fetch(`${API_URL}/${userId}`);
			if (!response.ok) throw new Error("Network response was not ok");
			const data = await response.json();
			return new UserData(data.data).getUserData();
		} catch (error) {
			console.error("There has been a problem with your fetch operation:", error);
			throw error;
		}
	}
}

/**
 * Function UserActivity - get user activity.
 *
 * @param {string} userId - The id value of user
 **/

export async function UserActivity(userId) {
	if (isMockData) {
		const mockData = dataActivity.find((activity) => activity.userId === Number(userId));
		if (!mockData) throw new Error("Activity not found in mock data");
		return new ActivityData(mockData).getActivityData();
	} else {
		try {
			const response = await fetch(`${API_URL}/${userId}/activity`);
			if (!response.ok) throw new Error("Network response was not ok");
			const data = await response.json();
			return new ActivityData(data.data).getActivityData();
		} catch (error) {
			console.error("fetch operation error:", error);
			throw error;
		}
	}
}

/**
 * Function UserAverageSessions - get data of average sessions.
 *
 * @param {string} userId - The id value of user
 **/

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

/**
 * Function UserAverageSessions -  get user performance.
 *
 * @param {string} userId - The id value of user
 **/

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
