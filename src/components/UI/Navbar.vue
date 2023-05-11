<template>
      <div class="navbar">
        <button style="margin-left: 20px" @click="$router.push('/login')">Логин</button>
        <button style="margin-left: 20px" @click="$router.push('/signup')">Регистрация</button>
        <button style="margin-left: 20px" @click="$router.push('/main')">Посты</button>
          </div>
  </template> 
  
  <script>
    export default {}
  </script>
  <style>
    .navbar {
        display: flex;
        text-align: center;
        margin-bottom: 50px;
        
    }
    button 
    {
        padding: 20px 10px;
        min-width: 200px;
        align-self: flex-end;
        font-weight: bold;
        font-size: 13px; 
        border: 1px solid orange;
        background-color:orchid;
        color: white;
    }
    button:hover 
    {
        cursor: pointer;
        font-size: 15px;  
        color: brown;
        border: 5px solid black;
    }
    button:active 
    {
        background-color: black;
        color: black;
    }
  </style>