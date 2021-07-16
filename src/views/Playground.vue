<template>
  <div class="page">
    <h1 class="gradient-title title-padding">Recent CodePens</h1>
    <Pens/>
  </div>
</template>

<script> 
  import Pens from '../components/Pens'

  export default {
    components: {
      Pens
    },
    metaInfo: {
      title: 'Playground'
    }
  }
</script>

<style lang="scss" scoped>
h1 { 
  font-weight: lighter; 
  text-align: center;
}
</style>