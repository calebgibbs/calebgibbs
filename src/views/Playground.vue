<template>
  <div class="page">
    <h1 class="gradient-title">Recent CodePens</h1>
    <Pens/>
  </div>
</template>

<script> 
  import Pens from '../components/Pens'

  export default {
    components: {
      Pens
    }
  }
</script>

<style lang="scss" scoped>
h1 { 
  padding-top: 1em; 
  padding-bottom: 1em; 
  font-weight: lighter;
}
</style>