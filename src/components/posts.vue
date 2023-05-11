  <script>
  import PostCreate from '@/components/PostCreate.vue';
  import PostList from '@/components/PostList.vue';
  import MySelect from '@/components/UI/MySelect.vue';
  import MyDialog from '@/components/UI/MyDialog.vue';
  import MyInput from '@/components/UI/MyInput.vue';
  import MyPagination from '@/components/UI/MyPagination.vue'
  import axios from 'axios';
  export default {
    data() {
      return {
        isModalVisible: false,
        searchValue: '',
        searchText: '',
        sortOptions: [
        {
          value: 'title',
          name: 'По названию'
        },
        {
          value: 'body',
          name: 'По содержанию'
        }
      ],
        posts: [
      
        ],
        totalPages: 0,
        currentPage: 1,
        limitItems: 10
      }
    },
    methods: {
      removePost(post) {
        this.posts = this.posts.filter(current_post => current_post.id != post.id)
      },
      createPost(post) {
        this.posts.unshift(post)
      },
      showModal() {
          this.isModalVisible = true;
      },
      closeModal(status) {
        this.isModalVisible = status;
      },
      changePage(page){
        this.currentPage = page
      },
      async created(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params:{
            '_page': this.currentPage,
            '_limit': this.limitItems
          }
        })
        this.totalPages = Math.ceil(res.headers['x-total-count'] / this.limitItems),
        this.posts = res.data
      }
    },
    watch: {
      currentPage(){
        this.created()
      }
    },
    components: {PostCreate, PostList, MySelect, MyDialog, MyInput, MyPagination},
    computed: {
      selectedTypes() {
        return [...this.posts].sort((post1, post2) => post1[this.searchValue]?.localeCompare(post2[this.searchValue]))//знак ? убирает ошибку, что пост1 пустой
      },
      SearchedPosts() { //поиск по названию
        return this.selectedTypes.filter(post => post.title.includes(this.searchText))
      }
    },
    mounted() {
      this.created();
    },
  }

  </script>
  <template>
    <div>
      <my-input
        v-model="searchText"
        placeholder="Поиск по названию"/><p></p>
      <button
        type="button"
        class="btn"
        @click="showModal">Создать пост</button>
        <button @click="$router.push('/main')">Назад</button>
  
      <my-dialog v-show="isModalVisible" @close="closeModal">
        <template v-slot:content>
          <PostCreate @create="createPost"/>
        </template>
      </my-dialog>
    </div>
  
    <my-select 
      v-model="searchValue"
      :options="sortOptions"
    />
    
    <my-pagination 
      :totalPages="totalPages"
      :currentPage="currentPage"
      @click-page="changePage"
    />
  
    <PostList
      :posts="SearchedPosts"
      @remove="removePost"/>
  </template>

<style scoped>
.observer {
  height: 30px;
  background: red;

}

</style>