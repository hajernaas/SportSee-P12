/** Class representing a UserData: Formats user information and key data.**/
export class UserData {
	constructor(data) {
		this.id = data.id;
		this.keyData = data.keyData;
		this.score = data.score || data.todayScore;
		this.userInfos = data.userInfos;
	}

	/**
	 * Get the getUserData value.
	 * @return {number} id
	 * @return {Object} keyData
	 * @return {number} score
	 * @return {Object} userInfos
	 */
	getUserData() {
		//const KeyDataUser = { ...this.keyData };

		return {
			id: this.id,
			//keyData: KeyDataUser,
			keyData: this.keyData,
			score: this.score * 100,
			userInfos: this.userInfos,
		};
	}
}

/** Class representing a ActivityData: Formats user activity data..**/
export class ActivityData {
	constructor(data) {
		this.userId = data.userId;
		this.sessions = data.sessions;
	}

	/**
	 * Get the getActivityData (objet sessions)
	 * @return {date} day
	 * @return {number} kg
	 * @return {number} calories
	 */

	getActivityData() {
		const Activity = this.sessions.map((elm, index) => {
			return {
				day: index + 1,
				kg: elm.kilogram,
				calories: elm.calories,
			};
		});

		return Activity;
	}
}

/** Class representing a PerformanceData:Formats user performance data..**/

export class PerformanceData {
	constructor(data) {
		this.userId = data.userId;
		this.performance = data.data;
	}

	/**
	 * Get the getPerformanceData (objet performance)
	 * @return {number} value
	 * @return {string} kindPerf
	 */
	getPerformanceData() {
		const kind = {
			1: "Cardio",
			2: "Energie",
			3: "endurance",
			4: "Force",
			5: "Vitesse",
			6: "intensité",
		};
		const performanceUser = this.performance
			.map((elm) => {
				return {
					value: elm.value,
					kindPerf: kind[elm.kind],
				};
			})
			.reverse();

		return performanceUser;
	}
}

/** Class representing a AverageSessionData: Formats user average session data...**/
export class AverageSessionData {
	constructor(data) {
		this.sessions = data.sessions;
	}

	/**
	 * Get the getAverageSessionData
	 * @return {string} day
	 * @return {string} sessionLength
	 */
	getAverageSessionData() {
		const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];
		const averageSessionData = this.sessions.map((day, index) => {
			return {
				day: daysOfWeek[index],
				sessionLength: day.sessionLength,
			};
		});
		return averageSessionData;
	}
}
