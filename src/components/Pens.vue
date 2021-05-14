<template>
  <div class="pens-grid">   
    <div v-for="pen in pens.items" :key="pen.url">
      <a target="_blank" :href="pen.link">
        <div class="pen" :style="{ 'background-image': 'url(' + pen.thumbnail + ')' }" >
          <div class="pen-content">
            <h3>{{ pen.title }}</h3> 
            <div class="pen-conetnet-hiden">
              <span>{{ pen.pubDate | limit-10 }}</span> 
              <img src="../assets/images/icons/external-link.svg" alt="">
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
      fetch(popularFeed)
      .then(res => res.json()) 
      .then(data => this.pens = data) 
      .catch(err => console.log(err.message)) 
    }
  }
</script>

<style lang="scss" scoped> 
@import '../assets/styles/mediaqueries'; 

$speed: .2s;

.pens-grid { 
  display: grid;  
  grid-gap: 2em;
  grid-template-columns: repeat(3, 1fr);  
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
    grid-template-columns: repeat(1, 1fr);
  } 
  @include mobile-portait {
    grid-template-columns: repeat(1, 1fr);
  } 
}

.pen { 
  background-size: cover; 
  padding: 14rem 0 0;
  background-position: center; 
  border-radius: 15px; 
  box-shadow: 0px 2px 30px 0px rgba(0,0,0,0.1); 
  overflow: hidden; 
  transition: transform $speed ease-in-out;
  &-content { 
    padding: 1em; 
    color: #fff; 
    background: linear-gradient(
      rgba(0,0,0, 0),
      rgba(0,0,0, .2) 25%,
      rgba(0,0,0, 1)
    ); 
    transform: translateY(2.1em); 
    transition: transform $speed ease-in-out;  
    transition-delay: .1s;
  } 

  &:hover { 
    transform: scale(1.01); 

    h3::after {
      transform: scaleX(1);
    } 

    .pen-content { 
      transform: translateY(0);
    } 

    img {
      opacity: 1; 
    }

  } 

}  

@include touch { 
  .pen-content { 
    transform: translateY(0);
  } 
}

.pen-conetnet-hiden { 
  display: flex; 
  align-content: center; 
  justify-content: space-between; 
  margin-top: .5em;
}

a { 
  text-decoration: none; 
  color: inherit;
}  

h3 { 
  width: max-content; 
  position: relative; 

  &::after { 
    content: ''; 
    position: absolute; 
    left: 0; 
    bottom: -.1em;
    height: 2px; 
    width: 100%; 
    // background: linear-gradient(94.23deg,#5374fa 12.41%,#fd9179 52.55%,#ff6969 89.95%);  
    background: #fff; 
    transform: scaleX(0);  
    transform-origin: left;
    transition: transform $speed ease;
  }
}

span { 
  font-size: .8em;
}  

img { 
  height: 1.2em; 
}

</style>