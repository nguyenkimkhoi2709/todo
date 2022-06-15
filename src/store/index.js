import { createStore } from 'vuex'
import auth from './modules/auth'
import todosModule from './modules/todos'

const store = createStore({
    modules: {
        auth,
        todosModule
    },
})

export default store