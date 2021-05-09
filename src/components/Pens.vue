<template>
  <div class="pens-grid">   
    <div v-for="pen in pens.items" :key="pen.url">
      <a :href="pen.link" target="_blank">
        <div class="pen">
          <div class="pen-img-container">
            <img :src="pen.thumbnail" alt="thumbnail" style="width: 100%" class="pen-img"> 
          </div>
          <div class="pen-text-outer">
            <div class="pen-title">
              <span class="title">{{pen.title}}</span>  
            </div> 
            <div class="pen-date">
              <span class="date-text"><small>{{ pen.pubDate | limit-10 }}</small></span>
              <img class="external-link" src="../assets/images/icons/external-link.svg" alt="external link">
            </div>
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
  
  @include desktop-large {
    grid-template-columns: repeat(3, 1fr);
  } 
  @include desktop-small {
    grid-template-columns: repeat(3, 1fr);
  } 
  @include tablet-landscape {
    grid-template-columns: repeat(3, 1fr);
  } 
  @include tablet-portait {
    grid-template-columns: repeat(2, 1fr);
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
  background: #f9f9f9;  
  transition: transform 0.3s, box-shadow 0.4s;  
  font-size: 1em; 
  overflow: hidden;  
  border-radius: 20px; 
  box-shadow: 0px 2px 30px 0px rgba(0,0,0,0.1);

  &-text-outer {
    padding: 1em;
  }

  &-date { 
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

  &:hover {
    transform: scale(1.03);  
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
  }  

  &:hover .external-link{
    opacity: 1; 
  } 
}  

.date-text {
  font-size: .7em;
}
</style>