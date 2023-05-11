<template>
  <button class="btn">
      <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style>
.btn {
padding: 20px 20px;
min-width: 200px;
align-self: flex-end;
margin-top: 15px;
border: 15px solid rebeccapurple;
background-color: orange;
color: pink
}
.btn:hover {
background-color: red;
cursor: pointer;
color: black;
}
.btn:active {
background-color: #706634;
color: #EAD777;
}
</style>
