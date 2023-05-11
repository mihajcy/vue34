<template>
    <div class="post">
        <div>
            <div>
                <strong>ID:</strong> 
                {{ post.id }}
            </div>
            <div>
                <strong>Заголовок:</strong> 
                {{ post.title }}
            </div>
            <div>
                <strong>Текст:</strong> 
                {{ post.body }}
            </div>
        </div>
        <div>
        <my-button class="btn" @click="$event => $emit('remove', post)">Удалить пост</my-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'post-item',
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}

</script>

<style scoped>
.post {
    padding: 20px;
    margin-top: 15px;
    border: 4px solid #27522E;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.btn {
    min-width: 200px;
    padding: 15px 15px;
}
</style>