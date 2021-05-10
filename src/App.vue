<template>
  <div class="app"> 
    <TheMenu/> 
    <router-view/> 
    <!-- <Footer/> -->
  </div>
</template>

<script>
  import TheMenu from './components/TheMenu' 
  import Footer from './components/Footer'
  export default {
    name: 'App', 
    components: {
      TheMenu, 
      Footer
    }
  }
</script>

<style lang="scss" scoped>
.app { 
  position: relative;
}
</style>
