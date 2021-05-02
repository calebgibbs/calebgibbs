<template>
  <div>
    <VueRssFeed :feedUrl="feedUrl" :name="name" :limit="limit"/>
  </div>
</template>

<script> 
  import VueRssFeed from 'vue-rss-feed'
  export default {
    name: 'Code pens', 
    components: {
      VueRssFeed
    }, 
    data() { 
      return {
        feedUrl: 'https://codepen.io/calebgibbs/public/feed',
        name: 'Pens',
        limit: 5,
      }
    }


  }
</script>

<style lang="scss" scoped>

</style>