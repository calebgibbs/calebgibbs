<template>
  <div class="hero">
    <!-- <v-vanta effect="waves" :options=options></v-vanta> -->
    <div class="title">
      <h1 class="gradient-title">Caleb Gibbs</h1> 
      <h3 class="gradient-title">Web Developer</h3>
    </div> 
    <div class="see-more">
      <a href="#see-more">
        <span>See more</span> 
        <span class="caret">&caron;</span>
      </a>
    </div>
  </div>
</template> 

<script>
  // import VVanta from '@/veu-vanta'
  export default {
    // components: {
    //   VVanta
    // }, 
    // data() {
    //   return {
    //     options: {
    //       mouseControls: true,
    //       touchControls: true,
    //       minHeight: 500.00,
    //       minWidth: 200.00,
    //       scale: 1.00,
    //       scaleMobile: 1.00
    //     }
    //   }
    // }
  }
</script>



<style lang="scss" scoped>
@import '../assets/styles/mediaqueries';
.hero {  
  background: rgb(51,51,51);
  background: radial-gradient(circle, rgba(51,51,51,1) 0%, rgba(0,0,0,1) 100%);
  height: calc(90vh + 1.5rem);  
  font-size: 2em;   
  display: grid; 
  grid-template-rows: 1fr 1fr 1fr; 
}    

.title { 
  z-index: 1;  
  margin: 0 auto; 
  text-align: center; 
  grid-row: 2; 
  align-self: center;
}  

.see-more { 
  grid-row: 3; 
  color: #fff; 
  text-align: center; 
  font-weight: lighter; 
  font-size: .7em; 
  display: flex;  
  flex-direction: column;
  align-self: flex-end;   
  width: max-content; 
  margin: 0 auto;
  a { 
    text-decoration: none; 
    color: inherit;   
    transition: margin 0.2s;   
    padding: 20px;
    span { 
      display: block;  
    }

    &:hover { 
      margin-bottom: -5px; 
    }
  }
} 

.caret {
  font-size: 1.5em; 
  padding-top:s 100px;
}

h1, h2, h3{
  margin: 0;
} 

@include mobile-portait { 
  .hero { 
    font-size: 1.5em;
  } 
}

@include ios-styles { 
  .hero { 
    height: 100%; 
    font-size: 1.5em;
  }   

  a { 
    display: none;
  }
}
</style>