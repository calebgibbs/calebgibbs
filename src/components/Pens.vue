<template>
  <div class="pens-grid"> 
    <div v-for="pen in pens.items" :key="pen.url">
      <a :href="pen.link" target="_blank">
        <div class="pen">
          <img :src="pen.thumbnail" alt="thumbnail" style="width: 100%"> 
          <h4>{{pen.title}}</h4> 
        </div>
      </a>
    </div>
  </div>
</template>

<script>  
  const publicFeed = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fcodepen.io%2Fcalebgibbs%2Fpublic%2Ffeed' 
  const popularFeed = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fcodepen.io%2Fcalebgibbs%2Fpopular%2Ffeed%2F'

  export default {
    name: 'Codepens', 
    data() { 
      return {
        pens: []
      }
    },
    mounted() {
      fetch(popularFeed)
      .then(res => res.json()) 
      .then(data => this.pens = data) 
      .catch(err => console.log(err.message))
    }
  }
</script>

<style lang="scss" scoped>

.pens-grid {
  display: grid; 
  grid-template-columns: repeat(4, 1fr);  
  grid-gap: 2em;
  width: 90%; 
  margin: 0 auto; 
  margin-top: 4em; 
}  

a { 
  text-decoration: none; 
}

.pen { 
  color: #000; 
  padding: .5em; 
  background: #f9f9f9;  
  transition: transform 0.2s; 

  &:hover {
    transform: scale(1.03);
  }
} 

h4 { 
  margin: .1em; 
  font-weight: lighter;
}

</style>