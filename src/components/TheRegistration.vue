<!-- <template>
  АААА
</template> -->
<script>

</script>

<template>
  <h1>Регистрация</h1>
  <p><input type="text" placeholder = "Email" v-model="email"/></p>
  <p><input type="password" placeholder = "Password" v-model="password"/></p>
  <p><button @click = "register"> SUBMIT</button></p>
</template>
 <script>
import {ref} from "vue";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("")
const password = ref("")
const router = useRouter()
const register = ()=>{
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data)=>{
      console.log("Успешно!");
      console.log(auth.currentUser)
      router.push('/signup')
    })
    .catch((error)=>{
      console.log(error.code);
      alert(error.message);
    })
};

</script>
