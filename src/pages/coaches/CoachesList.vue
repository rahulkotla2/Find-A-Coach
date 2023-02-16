<template>
    <section>
        FILTER
    </section>
    <section>
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Register as Coach</router-link>
        </div>
        <ul v-if="hasCoaches">
            <li v-for="coach in coaches" :key="coach.id">{{ coach.firstName }}</li>
        </ul>
        <h2 v-else>No Coaches Available</h2>
    </section>
</template>

<script>
export default {
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
</style>