<template>
    <div v-if="isAuthenticated" class="progress-bar">
        <p>Progress: {{ progressTodo }}%</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ProgressBar',
    computed: mapGetters(['progressTodo', 'isAuthenticated'])
}
</script>

<style scoped>
    .progress-bar {
        padding: 5px;
        text-align: center;
        background: rgb(106, 248, 118);
        color: black;
    }
</style>