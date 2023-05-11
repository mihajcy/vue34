<template>
  <div class="loader"></div>
</template>
  
  <script>
  export default {
    name: 'Myloading'
  }
  </script>
  
  <style>
    .loader {
      border: 16px solid #ffffff;
      border-top: 16px solid rgb(135, 191, 226);
      border-radius: 50%;
      width: 20px;
      height: 20px;
      animation: spin 1s linear infinite;
      margin:auto;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  </style>