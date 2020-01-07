<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
    }
  }
}
</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
