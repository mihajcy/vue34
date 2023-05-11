<template>
  <input :value="modelValue" @input="updateInput2" type="text" class="ipt">
</template>
  
  <script>
  export default {
      name: 'MyInput',
      props: {
        modelValue: [String, Number]
      },
  methods: {
    updateInput2(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
  }
  
  </script>
  
  <style>
      .ipt {
      /* background-color:gray; */
      padding: 10px 5px;
      border: 1px solid gold;
      margin-top: 7px;
      }
  </style>
  
  