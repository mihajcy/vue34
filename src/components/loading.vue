  <script>
  import PostCreate from '@/components/PostCreate.vue';
  import PostList from '@/components/PostList.vue';
  import MySelect from '@/components/UI/MySelect.vue';
  import MyDialog from '@/components/UI/MyDialog.vue';
  import MyInput from '@/components/UI/MyInput.vue';
  import MyLoading from '@/components/UI/MyLoading.vue';
  import MyPagination from '@/components/UI/MyPagination.vue';
  import axios from 'axios';
  export default {
    data() {
      return {
        isModalVisible: false,
        searchValue: '',
        searchText: '',
        isPostsLoading: false,
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
        posts: [],
        totalPages: 0,
        currentPage: 1,
        limitItems: 15
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
      async loadcreated(){
        this.isPostsLoading = true;
        setTimeout(async() => { 
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params:{
            '_page': this.currentPage,
            '_limit': this.limitItems
          }
        })
        this.currentPage += 1;
        this.totalPages = Math.ceil(res.headers['x-total-count'] / this.limitItems);
        this.posts = [...this.posts, ...res.data];
        this.isPostsLoading = false;
      }, 1000)
      }
  },
    components: {PostCreate, PostList, MySelect, MyDialog, MyInput, MyPagination, MyLoading},
    computed: {
      selectedTypes() {
        return [...this.posts].sort((post1, post2) => post1[this.searchValue]?.localeCompare(post2[this.searchValue]))//знак ? убирает ошибку, что пост1 пустой
      },
      SearchedPosts() { 
        return this.selectedTypes.filter(post => post.title.includes(this.searchText))
      }
    },
    mounted() {
      const options = {
    rootMargin: '0px',
    threshold: 1.0
    }
    const callback = (entries, observer) => {
        if(entries[0].isIntersecting) {
            this.loadcreated()
        }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
    }
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
        <button>@click= "showModal">Кнопка< </button>
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

    <PostList
        :posts="SearchedPosts"
        @remove="removePost"/>

    <div v-if="!isPostsLoading"></div>
    <div class="loader" v-else />
    
    <div ref="observer" class="observer"></div>
  </template>