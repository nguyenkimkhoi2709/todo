import axios from "axios"

const todosModule = {
    state: {
        todos: [],
        isAuthentication: false 
    },

    getters: {
        todos: state => state.todos,
        todosTotal: state => state.todos.length,
        doneTodo: state => state.todos.filter(todo => todo.completed),
        progressTodo: state => 
            Math.round(state.todos.filter(todo => todo.completed).length / state.todos.length *100)
    },
    
    actions: {
        async getTodo({commit}) {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
                commit('SET_TODO', res.data)
            } catch (error) {
                console.log(error)
            }
        },
        // getTodo({commit}) {
        //     fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        //         .then(res => res.json())
        //         .then(data => commit('SET_TODO', data))            
        // },

        async deleteTodo({commit}, todoId) {
            try {
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
                commit('DELETE_TODO', todoId)
            } catch (error) {
                console.log(error)
            }
        },
        async addTodo({commit}, newTodo) {
            try {
                await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
                commit('ADD_TODO', newTodo)
            } catch (error) {
                console.log(error)
            }
        }
    },

    mutations: {
        
        MARK_COMPLETE(state, todoId) {
            state.todos.map(todo => {
                if(todo.id === todoId) {
                    todo.completed = !todo.completed
                    return todo
                }
            })
        },
        DELETE_TODO(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id !== todoId)
        },
        ADD_TODO(state, newTodo) {
            state.todos.push(newTodo)
        },
        SET_TODO(state, data) {
            state.todos = data
        }
    },
}

export default todosModule