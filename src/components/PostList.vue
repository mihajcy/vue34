<template>
    <div v-if="posts.length > 0">
        <h2>Список</h2>
        <post-item
            v-for="post in posts"
            :key="post.id"
            :post="post"
            @remove="$emit('remove', post)"
            />
    </div>
    <div v-else>
        <h2 style="color: darkblue; font-size: 24px;">
            Постов нет
        </h2>
    </div>
</template>

<script>
import PostItem from './PostItem.vue';
export default {
    name: 'post-list',
    components: {
        PostItem
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}
.ipt {
  padding: 15px 15px;
  border: 3px solid black;
  margin-top: 20px;
}
</style>