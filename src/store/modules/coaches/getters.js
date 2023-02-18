export default {
    coaches(state) {
        return state.coaches;
    },
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0;
    },
    isCoach(state,getters,rootState,rootGetters){
       const coaches = rootGetters['coaches/coaches'];
       const userId = rootState.userId;
       return coaches.some(coach => coach.id === userId);
    }
};