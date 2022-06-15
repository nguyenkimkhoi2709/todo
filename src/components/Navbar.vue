<template>
  <div class="navbar">
    <h1>Vue App</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li v-if="isAuthenticated">
        Todos: {{ todosTotal }}
        <button @click="TOGGLE_AUTH">Logout</button>  
      </li>
      <li v-else>
        <button @click="TOGGLE_AUTH">Login</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'NavbarApp',
  computed: mapGetters(['todosTotal', 'isAuthenticated']),
  methods: {
    ...mapMutations(['TOGGLE_AUTH'])
  }
}
</script>

<style scoped>
  .navbar {
    padding: 5px;
    text-align: center;
    background: rgb(240, 240, 240);
    color: black;
  }
  .navbar ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;
  }
  
  button:hover {
    cursor: pointer;
  }
</style>