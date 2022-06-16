<template>
    <AddTodo />
  <div class="todo-list">
    <ul v-if="isAuthenticated">
        <li v-for="(todo, index) in todos" :key="index" :class="[todo.completed ? 'is-completed' : '']">
            <input type="checkbox" :checked="todo.completed" @change="MARK_COMPLETE(todo.id)">
            <div class="content">
                {{ todo.title }}
            </div>
            <div class="btn">
                <button @click="deleteTodo(todo.id)">Delete</button>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import AddTodo from './AddTodo.vue'
export default {
    name: 'TodoApp',
    components: {
        AddTodo,
    },
    computed: mapGetters(['isAuthenticated', 'todos']),
    created() {
        this.getTodo()
    },
    methods: {
        ...mapMutations(['MARK_COMPLETE']),
        ...mapActions(['deleteTodo', 'getTodo'])
    }
}
</script>

<style scoped>
    /* .todo-list ul {
        padding: 0 10px 10px 10px;
        list-style-type: none;
    }
    .todo-list li {
        padding: 10px;
        cursor: pointer;
        margin: 10px 0;
        border-radius: 4px;
        background: rgb(240, 240, 240);
        color: black;
    }
    .todo-list li.is-completed {
        text-decoration: line-through;
        background: rgb(119, 218, 243);
    }
    .todo-list li input[type='checkbox'] {
        -ms-transform: scale(2); 
        -moz-transform: scale(2); 
        -webkit-transform: scale(2); 
        -o-transform: scale(2); 
        transform: scale(2);
        padding: 10px;
        float: right;
    }
    .todo-list li button {
        float: right;
        margin-right: 20px;
    }
    .todo-list li button:hover {
        cursor: pointer;
        background: red;
        color: white;
        border: none;
    }

    @media(max-width: 600px) {
        .todo-list li {
            height: 40px;
        }
    } */
    .todo-list li {
        display: flex;
    }

    .todo-list li .content {
        flex-basis: 100%;
    }

    .todo-list li .btn {
        float: right;
        /* margin-right: 20px; */
    }

    .todo-list li.is-completed {
        text-decoration: line-through;
        background: rgb(119, 218, 243);
    }

    .todo-list ul {
        padding: 0 10px 10px 10px;
        list-style-type: none;
    }

    .todo-list li {
        padding: 10px;
        /* cursor: pointer; */
        margin: 10px 0;
        border-radius: 4px;
        background: rgb(240, 240, 240);
        color: black;
    }

    .todo-list li button:hover {
        cursor: pointer;
        opacity: 0.6;
    }

    .todo-list li input {
        cursor: pointer;
    }
</style>