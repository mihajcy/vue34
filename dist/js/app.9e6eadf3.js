(function(){"use strict";var e={3490:function(e,t,o){var n={};o.r(n);var s={};o.r(s);var a=o(9242),l=o(3396);function r(e,t,o,n,s,a){const r=(0,l.up)("navbar"),i=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(r),(0,l._)("div",null,[(0,l.Wm)(i)])],64)}o(7658);const i={class:"navbar"};function u(e,t,o,n,s,a){return(0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("button",{onClick:t[0]||(t[0]=t=>e.$router.push("/posts"))},"Пагинация"),(0,l._)("button",{style:{"margin-left":"20px"},onClick:t[1]||(t[1]=t=>e.$router.push("/load"))},"Прогрузка страницы"),(0,l._)("button",{style:{"margin-left":"20px"},onClick:t[2]||(t[2]=t=>e.$router.push("/login"))},"Логин"),(0,l._)("button",{style:{"margin-left":"20px"},onClick:t[3]||(t[3]=t=>e.$router.push("/signup"))},"Регистрация")])}var c={},p=o(89);const d=(0,p.Z)(c,[["render",u]]);var m=d,h={components:{Navbar:m}};const v=(0,p.Z)(h,[["render",r]]);var g=v;const f={class:"btn"};function y(e,t,o,n,s,a){return(0,l.wg)(),(0,l.iD)("button",f,[(0,l.WI)(e.$slots,"default")])}var w={name:"my-button"};const b=(0,p.Z)(w,[["render",y]]);var _=b;const P=["value"];function V(e,t,o,n,s,a){return(0,l.wg)(),(0,l.iD)("input",{value:o.modelValue,onInput:t[0]||(t[0]=(...e)=>a.updateInput2&&a.updateInput2(...e)),type:"text",class:"ipt"},null,40,P)}var M={name:"MyInput",props:{modelValue:[String,Number]},methods:{updateInput2(e){this.$emit("update:modelValue",e.target.value)}}};const k=(0,p.Z)(M,[["render",V]]);var C=k;const D=e=>((0,l.dD)("data-v-ad146ac4"),e=e(),(0,l.Cn)(),e),I={align:"right "},O=D((()=>(0,l._)("div",{class:"modal-footer"},null,-1)));function x(e,t,o,n,s,r){const i=(0,l.up)("my-button");return(0,l.wg)(),(0,l.iD)("div",{class:"modal-shadow",onClick:t[1]||(t[1]=(...e)=>r.closeModal&&r.closeModal(...e))},[(0,l._)("div",{class:"modal",onClick:t[0]||(t[0]=(0,a.iM)((()=>{}),["stop"]))},[(0,l.WI)(e.$slots,"title",{},(()=>[(0,l._)("p",I,[(0,l.Wm)(i,{class:"btn",onClick:r.closeModal},{default:(0,l.w5)((()=>[(0,l.Uk)("X")])),_:1},8,["onClick"])])]),!0),(0,l.WI)(e.$slots,"content",{},void 0,!0),(0,l.WI)(e.$slots,"footer",{},(()=>[O]),!0)])])}var W={name:"my-dialog",data:function(){return{show:!1}},methods:{closeModal:function(){this.show=!1,this.$emit("close",this.show)}}};const T=(0,p.Z)(W,[["render",x],["__scopeId","data-v-ad146ac4"]]);var U=T,S=o(7139);const Z=["value"],$=(0,l._)("option",{disabled:"",value:""},"Выберите типо сортировки:",-1),j=["value"];function H(e,t,o,n,s,a){return(0,l.wg)(),(0,l.iD)("select",{value:o.modelValue,onChange:t[0]||(t[0]=(...e)=>a.changeOptions&&a.changeOptions(...e)),class:"select_op"},[$,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.options,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e.value,value:e.value},(0,S.zw)(e.name),9,j)))),128))],40,Z)}var L={name:"my-select",props:{modelValue:{type:String,required:!0},options:{type:Array,required:!0}},methods:{changeOptions(e){console.log(e),this.$emit("update:modelValue",e.target.value)}}};const Y=(0,p.Z)(L,[["render",H]]);var z=Y;const q={class:"page_wrapper"},A=["onClick"];function R(e,t,o,n,s,a){return(0,l.wg)(),(0,l.iD)("div",q,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.totalPages,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e,class:(0,S.C_)(["page",{currentPage:o.currentPage==e}]),onClick:t=>a.changePage(e)},(0,S.zw)(e),11,A)))),128))])}var E={name:"my-pagination",props:{totalPages:{type:Number,required:!0},currentPage:{type:Number,required:!0}},methods:{changePage(e){this.$emit("clickPage",e)}}};const F=(0,p.Z)(E,[["render",R]]);var G=F;const K={class:"loader"};function N(e,t,o,n,s,a){return(0,l.wg)(),(0,l.iD)("div",K)}var B={name:"Myloading"};const J=(0,p.Z)(B,[["render",N]]);var X=J,Q=[_,C,U,z,G,m,X],ee=o(7795);const te=e=>((0,l.dD)("data-v-23ce4d43"),e=e(),(0,l.Cn)(),e),oe=te((()=>(0,l._)("p",null,null,-1)));function ne(e,t,o,n,s,r){const i=(0,l.up)("my-input"),u=(0,l.up)("PostCreate"),c=(0,l.up)("my-dialog"),p=(0,l.up)("my-select"),d=(0,l.up)("my-pagination"),m=(0,l.up)("PostList");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",null,[(0,l.Wm)(i,{modelValue:s.searchText,"onUpdate:modelValue":t[0]||(t[0]=e=>s.searchText=e),placeholder:"Поиск по названию"},null,8,["modelValue"]),oe,(0,l._)("button",{type:"button",class:"btn",onClick:t[1]||(t[1]=(...e)=>r.showModal&&r.showModal(...e))},"Создать пост"),(0,l.wy)((0,l.Wm)(c,{onClose:r.closeModal},{content:(0,l.w5)((()=>[(0,l.Wm)(u,{onCreate:r.createPost},null,8,["onCreate"])])),_:1},8,["onClose"]),[[a.F8,s.isModalVisible]])]),(0,l.Wm)(p,{modelValue:s.searchValue,"onUpdate:modelValue":t[2]||(t[2]=e=>s.searchValue=e),options:s.sortOptions},null,8,["modelValue","options"]),(0,l.Wm)(d,{totalPages:s.totalPages,currentPage:s.currentPage,onClickPage:r.changePage},null,8,["totalPages","currentPage","onClickPage"]),(0,l.Wm)(m,{posts:r.SearchedPosts,onRemove:r.removePost},null,8,["posts","onRemove"])],64)}o(541);function se(e,t,o,n,s,r){const i=(0,l.up)("my-button"),u=(0,l.up)("center");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("form",{onSubmit:t[2]||(t[2]=(0,a.iM)((()=>{}),["prevent"]))},[(0,l.wy)((0,l._)("input",{class:"ipt","onUpdate:modelValue":t[0]||(t[0]=e=>s.post.title=e),placeholder:"Введите тему поста"},null,512),[[a.nr,s.post.title]]),(0,l.wy)((0,l._)("input",{class:"ipt","onUpdate:modelValue":t[1]||(t[1]=e=>s.post.body=e),placeholder:"Введите текст поста"},null,512),[[a.nr,s.post.body]]),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i,{class:"btn",onClick:r.createPost},{default:(0,l.w5)((()=>[(0,l.Uk)("Создать")])),_:1},8,["onClick"])])),_:1})],32)])}var ae={data(){return{post:{title:"",bode:""}}},name:"post-create",methods:{createPost(){this.post.id=Date.now(),this.$emit("create",this.post),this.post={title:"",body:""}}}};const le=(0,p.Z)(ae,[["render",se]]);var re=le;const ie={key:0},ue=(0,l._)("h2",null,"Список",-1),ce={key:1},pe=(0,l._)("h2",{style:{color:"darkblue","font-size":"24px"}}," Постов нет ",-1),de=[pe];function me(e,t,o,n,s,a){const r=(0,l.up)("post-item");return o.posts.length>0?((0,l.wg)(),(0,l.iD)("div",ie,[ue,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.posts,(t=>((0,l.wg)(),(0,l.j4)(r,{key:t.id,post:t,onRemove:o=>e.$emit("remove",t)},null,8,["post","onRemove"])))),128))])):((0,l.wg)(),(0,l.iD)("div",ce,de))}const he=e=>((0,l.dD)("data-v-5c025a94"),e=e(),(0,l.Cn)(),e),ve={class:"post"},ge=he((()=>(0,l._)("strong",null,"ID:",-1))),fe=he((()=>(0,l._)("strong",null,"Заголовок:",-1))),ye=he((()=>(0,l._)("strong",null,"Текст:",-1)));function we(e,t,o,n,s,a){const r=(0,l.up)("my-button");return(0,l.wg)(),(0,l.iD)("div",ve,[(0,l._)("div",null,[(0,l._)("div",null,[ge,(0,l.Uk)(" "+(0,S.zw)(o.post.id),1)]),(0,l._)("div",null,[fe,(0,l.Uk)(" "+(0,S.zw)(o.post.title),1)]),(0,l._)("div",null,[ye,(0,l.Uk)(" "+(0,S.zw)(o.post.body),1)])]),(0,l._)("div",null,[(0,l.Wm)(r,{class:"btn",onClick:t[0]||(t[0]=t=>e.$emit("remove",o.post))},{default:(0,l.w5)((()=>[(0,l.Uk)("Удалить пост")])),_:1})])])}var be={name:"post-item",props:{post:{type:Object,required:!0}}};const _e=(0,p.Z)(be,[["render",we],["__scopeId","data-v-5c025a94"]]);var Pe=_e,Ve={name:"post-list",components:{PostItem:Pe},props:{posts:{type:Array,required:!0}}};const Me=(0,p.Z)(Ve,[["render",me]]);var ke=Me,Ce=o(4161),De={data(){return{isModalVisible:!1,searchValue:"",searchText:"",sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По содержанию"}],posts:[],totalPages:0,currentPage:1,limitItems:10}},methods:{removePost(e){this.posts=this.posts.filter((t=>t.id!=e.id))},createPost(e){this.posts.unshift(e)},showModal(){this.isModalVisible=!0},closeModal(e){this.isModalVisible=e},changePage(e){this.currentPage=e},async created(){const e=await Ce.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.currentPage,_limit:this.limitItems}});this.totalPages=Math.ceil(e.headers["x-total-count"]/this.limitItems),this.posts=e.data}},watch:{currentPage(){this.created()}},components:{PostCreate:re,PostList:ke,MySelect:z,MyDialog:U,MyInput:C,MyPagination:G},computed:{selectedTypes(){return[...this.posts].sort(((e,t)=>e[this.searchValue]?.localeCompare(t[this.searchValue])))},SearchedPosts(){return this.selectedTypes.filter((e=>e.title.includes(this.searchText)))}},mounted(){this.created()}};const Ie=(0,p.Z)(De,[["render",ne],["__scopeId","data-v-23ce4d43"]]);var Oe=Ie;const xe=(0,l._)("p",null,null,-1),We={key:0},Te={key:1,class:"loader"},Ue={ref:"observer",class:"observer"};function Se(e,t,o,n,s,r){const i=(0,l.up)("my-input"),u=(0,l.up)("PostCreate"),c=(0,l.up)("my-dialog"),p=(0,l.up)("my-select"),d=(0,l.up)("PostList");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",null,[(0,l.Wm)(i,{modelValue:s.searchText,"onUpdate:modelValue":t[0]||(t[0]=e=>s.searchText=e),placeholder:"Поиск по названию"},null,8,["modelValue"]),xe,(0,l._)("button",{type:"button",class:"btn",onClick:t[1]||(t[1]=(...e)=>r.showModal&&r.showModal(...e))},"Создать пост"),(0,l.wy)((0,l.Wm)(c,{onClose:r.closeModal},{content:(0,l.w5)((()=>[(0,l.Wm)(u,{onCreate:r.createPost},null,8,["onCreate"])])),_:1},8,["onClose"]),[[a.F8,s.isModalVisible]])]),(0,l.Wm)(p,{modelValue:s.searchValue,"onUpdate:modelValue":t[2]||(t[2]=e=>s.searchValue=e),options:s.sortOptions},null,8,["modelValue","options"]),(0,l.Wm)(d,{posts:r.SearchedPosts,onRemove:r.removePost},null,8,["posts","onRemove"]),s.isPostsLoading?((0,l.wg)(),(0,l.iD)("div",Te)):((0,l.wg)(),(0,l.iD)("div",We)),(0,l._)("div",Ue,null,512)],64)}var Ze={data(){return{isModalVisible:!1,searchValue:"",searchText:"",isPostsLoading:!1,sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По содержанию"}],posts:[],totalPages:0,currentPage:1,limitItems:15}},methods:{removePost(e){this.posts=this.posts.filter((t=>t.id!=e.id))},createPost(e){this.posts.unshift(e)},showModal(){this.isModalVisible=!0},closeModal(e){this.isModalVisible=e},async loadcreated(){this.isPostsLoading=!0,setTimeout((async()=>{const e=await Ce.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.currentPage,_limit:this.limitItems}});this.currentPage+=1,this.totalPages=Math.ceil(e.headers["x-total-count"]/this.limitItems),this.posts=[...this.posts,...e.data],this.isPostsLoading=!1}),1e3)}},components:{PostCreate:re,PostList:ke,MySelect:z,MyDialog:U,MyInput:C,MyPagination:G,MyLoading:X},computed:{selectedTypes(){return[...this.posts].sort(((e,t)=>e[this.searchValue]?.localeCompare(t[this.searchValue])))},SearchedPosts(){return this.selectedTypes.filter((e=>e.title.includes(this.searchText)))}},mounted(){const e={rootMargin:"0px",threshold:1},t=(e,t)=>{e[0].isIntersecting&&this.loadcreated()},o=new IntersectionObserver(t,e);o.observe(this.$refs.observer)}};const $e=(0,p.Z)(Ze,[["render",Se]]);var je=$e;const He=(0,l._)("h1",null,"Регистрация",-1);function Le(e,t,o,n,s,r){return(0,l.wg)(),(0,l.iD)(l.HY,null,[He,(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t)},null,512),[[a.nr,e.email]])]),(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t)},null,512),[[a.nr,e.password]])]),(0,l._)("p",null,[(0,l._)("button",{onClick:t[2]||(t[2]=(...t)=>e.register&&e.register(...t))}," SUBMIT")])],64)}var Ye=o(4870),ze=(o(5677),o(2483));(0,Ye.iH)(""),(0,Ye.iH)(""),(0,ze.tv)();const qe=(0,p.Z)(n["default"],[["render",Le]]);var Ae=qe;const Re=(0,l._)("h1",null,"Регистрация",-1);function Ee(e,t,o,n,s,r){return(0,l.wg)(),(0,l.iD)(l.HY,null,[Re,(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t)},null,512),[[a.nr,e.email]])]),(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t)},null,512),[[a.nr,e.password]])]),(0,l._)("p",null,[(0,l._)("button",{onClick:t[2]||(t[2]=(...t)=>e.register&&e.register(...t))}," SUBMIT")])],64)}(0,Ye.iH)(""),(0,Ye.iH)(""),(0,ze.tv)();const Fe=(0,p.Z)(s["default"],[["render",Ee]]);var Ge=Fe;const Ke=[{path:"/posts",component:Oe},{path:"/load",component:je},{path:"/login",component:Ae},{path:"/signup",component:Ge}],Ne=(0,ze.p7)({routes:Ke,history:(0,ze.PO)()});var Be=Ne;const Je=(0,a.ri)(g);Q.forEach((e=>{Je.component(e.name,e)})),Je.use(Be).mount("#app");const Xe={apiKey:"AIzaSyDAzf9wvYOr7Udr4cvsLJFbhGxeo95VLA8",authDomain:"vueweb-a5f63.firebaseapp.com",projectId:"vueweb-a5f63",storageBucket:"vueweb-a5f63.appspot.com",messagingSenderId:"89839863525",appId:"1:89839863525:web:50dac8bf717f99b301f60c",measurementId:"G-55Y7WGZE4G"};ee["default"].initializeApp(Xe),new Vue({router:Be,render:e=>e(g)})}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,a){if(!n){var l=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],a=e[c][2];for(var r=!0,i=0;i<n.length;i++)(!1&a||l>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[i])}))?n.splice(i--,1):(r=!1,a<l&&(l=a));if(r){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,s,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,a,l=n[0],r=n[1],i=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(s in r)o.o(r,s)&&(o.m[s]=r[s]);if(i)var c=i(o)}for(t&&t(n);u<l.length;u++)a=l[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},n=self["webpackChunktest_app"]=self["webpackChunktest_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(3490)}));n=o.O(n)})();
//# sourceMappingURL=app.9e6eadf3.js.map