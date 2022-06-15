<template>
    <form v-if="isAuthenticated" @submit.prevent="onSubmit">
        <input type="text" placeholder="Add Todo" v-model="title" />
        <input type="submit" value="ADD" />
    </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { v4 as uuid } from 'uuid'
export default {
    name: 'AddTodo',
    data() {
        return {
            title: ''
        }
    },
    computed: mapGetters(['isAuthenticated']),
    methods: {
        ...mapActions(['addTodo']),
        onSubmit() {
            if(this.title !== '') {
                this.addTodo({
                id: uuid(),
                title: this.title,
                completed: false
            })
            }
            this.title = ''
        }    
    }
}
</script>

<style scoped>
    form {
        padding: 10px;
    }
    input[type='text'] {
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        margin: 6px 0;
        border: 0;
    }
    input[type='submit'] {
        margin: 10px auto;
        padding: 10px;
        border: 0;
        display: block;
    }
</style>