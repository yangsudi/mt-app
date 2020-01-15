<template>
  <div class="con">
    <input type="text" />
    <span></span>
  </div>
</template>
<script>
export default {
  name: 'Effects'
}
</script>
<style scoped>
  .con {
    position: relative;
    display: inline-block;
  }
  input {
    outline: none;
    border: none;
    background: #fafafa;
  }
  input ~ span {
    position: absolute;
    left: 0;
    right: 0;
    buttom: 0;
    height: 1px;
    background-color: #262626;
    transform: scaleX(0);
    transform-origin: right center;
    transition: transform .3s ease-in-out;
  }
  input:focus ~ span {
    transform: scaleX(1);
    transform-origin: left center;
  }
</style>
