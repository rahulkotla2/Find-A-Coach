export default {
    async contactCoach(context, payload) {
        const newRequest = {
            userEmail: payload.email,
            message: payload.message,
        }

        const response = await fetch(`https://find-a-coach-418ac-default-rtdb.firebaseio.com/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest),
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request');
        }


        newRequest.id = responseData.name;
        context.commit('addRequest', newRequest);
    },
}