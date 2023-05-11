<!-- <template>
  АААА
</template> -->
<script>
</script>

<template>
  <h1>ВОЙТИ</h1>
  <p><input type="text" placeholder = "Email" v-model="email"/></p>
  <p><input type="password" placeholder = "Password" v-model="password"/></p>
  <p><button @click = "register"> SUBMIT</button></p>
</template>
<script>
import {ref} from "vue";
import {getAuth, signInUserWithEmailAndPassword} from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter();
const register = ()=>{
  signInUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data)=>{
      console.log("Успешно вошли!");
      console.log(auth.currentUser)
      router.push('/posts')
    })
    .catch((error)=>{
      console.log(error.code);
      switch(error.code){
      case "auth/invalid-email":
        errMsg.value = "Неверный адрес почты";
        break;
        case "auth/user-not-found":
        errMsg.value = "Пользователь не найден";
        break;
        case "auth/wrong-password":
        errMsg.value = "Неверный пароль";
        break; 
        // default: 
        // errMsg.value = "Почта или пароль неверны"
        // break;
      } 
      alert(error.message);
    })
};
</script>
