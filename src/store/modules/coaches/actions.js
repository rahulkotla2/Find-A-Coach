export default {
    async registerCoach(context, payload) {
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName: payload.first,
            lastName: payload.last,
            decription: payload.desc,
            hourlyRate: payload.rate,
            areas: payload.areas,
        }

        const response = await fetch(`https://find-a-coach-418ac-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData),
        });

        // const responseData = await response.json();

        if (!response.ok) {
            //error
        }

        context.commit('registerCoach', {
            ...coachData,
            id: userId,
        });
    },
    async loadCoaches(context) {
        const response = await fetch(
            'https://find-a-coach-418ac-default-rtdb.firebaseio.com/coaches.json'
        );
        const responseData = await response.json();

        if (!response.ok) {
            const error = new error(responseData.message || 'failed to fetch!');
            throw error;
        }

        const coaches = [];

        for (const key in responseData) {
            const coach = {
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas,
            };
            coaches.push(coach);
        }

        context.commit('setCoaches', coaches);

    }
};