<template>
  <div class="modal-shadow" @click="closeModal">
      <div class="modal" @click.stop>
        <slot name="title">
          <p align="right "><my-button class="btn" @click="closeModal">Закрыть</my-button></p>
        </slot>
        <slot name="content" ></slot>
        <slot name="footer">
          <div class="modal-footer"></div>
        </slot>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'my-dialog',
    data: function () {
return {
show: false
}
},
    methods: {
      closeModal: function () {
        this.show = false
        this.$emit('close', this.show)
      },
    },
  };
</script>

<style scoped>
.modal-shadow {
position: fixed;
top: 0;
left: 0;
min-height: 100%;
width: 100%;
background: lightcoral;
}
.modal {
background: #fff;
padding: 20px;
min-width: 600px;
max-height: 400px;
height: 260px;
position: absolute;
top: 50%;
left: 50%;
bottom:50%;
transform: translate(-50%, -50%);
}
</style>