<template>
    <div class="page_wrapper">
      <div 
        v-for="pageNumber in totalPages" 
        :key="pageNumber"
        class="page"
        :class="{
          'currentPage': currentPage == pageNumber
        }"
        @click="changePage(pageNumber)"
        >
        {{ pageNumber }}
      </div>
    </div> 
</template>
  
<script>
  export default {
    name: 'my-pagination',
    props: {
      totalPages: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      }
    },
    methods: {
      changePage(pageNumber){
        this.$emit('clickPage', pageNumber)
      }
    }
}
</script>

<style>
.page_wrapper{
  margin-top: 1px;
  max-width: 220px;
  display: flex;
  margin-left: auto;
}
.page{
  border: 2px solid black;
  padding: 6px;
  margin: auto;
  cursor: pointer;
}
.currentPage{
  border: 2px dashed green
}
</style>