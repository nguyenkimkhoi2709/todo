<template>
  <div v-if="isAuthenticated" class="status-bar">
    <p>Done</p>
    <ul>
        <li v-for="(todo, index) in doneTodo" :key="index">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'StatusBar',
    computed: mapGetters(['doneTodo', 'isAuthenticated'])
}
</script>

<style scoped>
    .status-bar {
        padding: 5px;
        text-align: center;
        background: rgb(240, 240, 240);
        color: black;
    }
    .status-bar ul {
        list-style: none;
    }
</style>