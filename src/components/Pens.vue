<template>
  <div class="pens-grid">   
    <div v-for="pen in pens.items" :key="pen.url">
      <a :href="pen.link" target="_blank">
        <div class="pen">
          <div class="pen-img-container">
            <img :src="pen.thumbnail" alt="thumbnail" style="width: 100%" class="pen-img"> 
          </div>
          <div class="pen-text">
            <span class="title">{{pen.title}}</span>  
          </div> 
          <div class="date">
            <span class="date-text"><small>{{ pen.pubDate | limit-10 }}</small></span>
            <img class="external-link" src="../assets/images/icons/external-link.svg" alt="external link">
          </div>
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
      fetch(publicFeed)
      .then(res => res.json()) 
      .then(data => this.pens = data) 
      .catch(err => console.log(err.message)) 
    }
  }
</script>

<style lang="scss" scoped> 
@import '../assets/styles/mediaqueries'; 

$cardTransition: 0.2s;

.pens-grid {
  display: grid; 
  grid-gap: 2em;
  width: 90%; 
  margin: 0 auto;  
  margin-top: 4em;

  @include desktop-large {
    grid-template-columns: repeat(4, 1fr);
  } 
  @include desktop-small {
    grid-template-columns: repeat(4, 1fr);
  } 
  @include tablet-landscape {
    grid-template-columns: repeat(4, 1fr);
  } 
  @include tablet-portait {
    grid-template-columns: repeat(3, 1fr);
  } 
  @include mobile-landscape {
    grid-template-columns: repeat(2, 1fr);
  } 
  @include mobile-portait {
    grid-template-columns: repeat(1, 1fr);
  } 
}    

.pen-img-container {
  overflow: hidden; 
  img {
    transition: transform $cardTransition;
  }
}

a { 
  text-decoration: none; 
}

.pen { 
  color: #000; 
  padding: .5em; 
  background: #f9f9f9;  
  transition: transform 0.3s, box-shadow 0.4s;  
  font-size: 1em; 
  overflow: hidden; 

  &-text {
    display: flex; 
    justify-content: space-between; 
    margin: 0.5em 0 0.5em 0.2em;
  }

  &:hover {
    transform: scale(1.03);  
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
  }  

  &:hover .pen-img {
    transform: scale(1.05); 
  }
  
  &:hover .external-link{
    opacity: 1; 
  }
}  

.date {  
  transition: opacity $cardTransition; 
  display: flex; 
  justify-content: space-between;  
  align-items: center; 
  color: #606060; 

  img { 
    width: 1.3em;  
    opacity: 0; 
    transition: opacity 0.3s;
  } 
} 

.date-text {
  font-size: .7em;
}
</style>