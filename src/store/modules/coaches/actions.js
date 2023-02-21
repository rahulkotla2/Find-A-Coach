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

        const response = await fetch(`https://find-a-coach-418ac-default-rtdb.firebaseio.com/coaches/${ userId }.json`, {
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
    }
};