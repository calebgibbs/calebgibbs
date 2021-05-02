<template>
  <div>
    <Pens/>
  </div>
</template>

<script> 
  import Pens from '../components/Pens'

  export default {
    data() { 
      pens: [
        {url: 'https://codepen.io/calebgibbs/details/zjxQyP'}, 
        {url: 'https://codepen.io/calebgibbs/pen/wjQxdQ'}, 
        {url: 'https://codepen.io/calebgibbs/pen/XqoLEJ'}, 
        {url: 'https://codepen.io/calebgibbs/details/bMzvea'}
      ]
    }, 
    components: {
      Pens
    }
  }
</script>

<style lang="scss" scoped>

</style>