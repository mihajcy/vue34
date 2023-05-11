<template> 
  <select 
  :value="modelValue" 
  @change="changeOptions" 
  class="select_op" 
  
  > 
  <option disabled value="">тип сортировки:</option> 
  <option 
  v-for="option in options" 
  :key="option.value" 
  :value="option.value" 
  > 
  {{ option.name }} 
  </option> 
  
  </select> 
 </template> 
  
 <script> 
 export default { 
  name:'my-select', 
  props:{ 
  modelValue:{ 
  type:String, 
  required:true 
  }, 
  options:{ 
  type:Array, 
  required:true, 
  } 
  }, 
  methods:{ 
  changeOptions(event){ 
  console.log(event) 
  this.$emit('update:modelValue',event.target.value) 
  } 
  } 
 } 
 </script> 
  
 <style> 
  .select_op{ 
  width:200px; 
  border:1px solid teal; 
  margin-top:7px ; 
  margin-bottom: 2px; 
  } 
 </style>