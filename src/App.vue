<template>
  <div> 
    <TheMenu/> 
    <router-view/>
  </div>
</template>

<script>
  import TheMenu from './components/TheMenu'
  export default {
    name: 'App', 
    components: {
      TheMenu
    }
  }
</script>

<style lang="scss" scoped>

</style>
