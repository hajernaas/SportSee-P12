export class UserData {
	constructor(data) {
		this.id = data.id;
		this.keyData = data.keyData;
		this.score = data.score || data.todayScore;
		/*this.firstName = data.userInfos.firstName;
		this.lastName = data.userInfos.lastName;
		this.age = data.userInfos.age;*/
		this.userInfos = data.userInfos;
	}

	getUserData() {
		const KeyDataUser = { ...this.keyData };

		return {
			id: this.id,
			keyData: KeyDataUser,
			score: this.score * 100,
			userInfos: this.userInfos,
		};
	}
}

export class ActivityData {
	constructor(data) {
		this.userId = data.userId;
		this.sessions = data.sessions;
	}

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

export class PerformanceData {
	constructor(data) {
		this.userId = data.userId;
		this.performance = data.data;
	}

	getPerformanceData() {
		const kind = {
			1: "Cardio",
			2: "Energie",
			3: "endurance",
			4: "Force",
			5: "Vitesse",
			6: "intensité",
		};
		const performanceUser = this.performance.map((elm) => {
			return {
				value: elm.value,
				kindUser: kind[elm.kind],
			};
		});

		return performanceUser;
	}
}
export class AverageSessionData {
	constructor(data) {
		this.sessions = data.sessions;
	}

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
