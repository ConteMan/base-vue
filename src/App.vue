<template>
  <div id="app">
    <router-view/>
    <div class="one">
      {{ one }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        one: '',
      }
    },
    async mounted() {
      const res = await this.$api.one.ones()
      this.one = res.data.data.content
    }
  }
</script>

<style lang="less">
  #app {
    text-align: center;
    .one {
      margin: 20px;
    }
  }
</style>
