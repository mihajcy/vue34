<template>
    <div>
        <form @submit.prevent>
            <input class="ipt" v-model="post.title" placeholder="Введите тему поста">
            <input class="ipt" v-model="post.body" placeholder="Введите текст поста">
            <center><my-button class="btn" @click="createPost">Создать</my-button></center>
        </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
            post: {
                title: '',
                bode: ''
            }
        }
    },
    name: 'post-create',
    methods: {
        createPost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: '' 
            }
        },
    }
}
</script>
  