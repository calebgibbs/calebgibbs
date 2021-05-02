<template>
  <div class="pens-grid"> 
    <div v-for="pen in pens.items" :key="pen.url">
      <a :href="pen.link" target="_blank">
        <div class="pen">
          <img :src="pen.thumbnail" alt="Codepen thumbnail" style="width: 25%">
        </div>
      </a>
    </div>
  </div>
</template>

<script> 
  export default {
    name: 'Codepens', 
    data() { 
      return {
        pens: []
      }
    },
    mounted() {
      fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fcodepen.io%2Fcalebgibbs%2Fpublic%2Ffeed')
      .then(res => res.json()) 
      .then(data => this.pens = data) 
      .catch(err => console.log(err.message))
    }


  }
</script>

<style lang="scss" scoped>

</style>