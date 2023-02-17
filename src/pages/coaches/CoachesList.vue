<template>
    <section>
        FILTER
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline">Refresh</base-button>
                <base-button link to="/register">Register as Coach</base-button>
            </div>
            <ul v-if="hasCoaches">
                <coach-item v-for="coach in coaches" :key="coach.id" :id="coach.id" :first-name="coach.firstName"
                    :last-name="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas"></coach-item>
            </ul>
            <h2 v-else>No Coaches Available</h2>
        </base-card>
</section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
export default {
    components: {
        CoachItem,
    },
    computed: {
        coaches() {
            return this.$store.getters['coaches/coaches'];
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        }
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
    box-sizing: border-box;
}

html {
    font-family: "Roboto", sans-serif;
}

body {
    margin: 0;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>