<template>
  <div>
    <div class="wrapper" v-scrollanimation>
      <h2 class="gradient-title">Hi, I'm Caleb</h2>
    </div> 
    <div class="wrapper" v-scrollanimation>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque praesentium sapiente explicabo optio officia eligendi molestias totam cum id. Laudantium saepe officia cupiditate eaque maxime ducimus veritatis nostrum soluta? Nam!</p> 
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped> 
@import '../assets/styles/mediaqueries';
div { 
  margin: 5em; 
  text-align: center;  
}  

h2 { 
  font-size: 2.1em; 
  transition: transform .5s ease-in;
} 

p { 
  width: 50%; 
  margin: 0 auto; 
  margin-top: 1em; 
  font-size: 1.1em;  
  transition-delay: 1s;
  transition: transform .5s ease-in;
}  

.wrapper { 
  overflow: hidden; 
  margin: 0; 
  margin: 0;
}   

.before-enter { 
  p { 
    opacity: 0;
  } 
  h2 {
    opacity: 0;
  }
}

.enter { 
  h2 { 
    animation: fadeup 1s ease-in forwards;
  } 
  p {  
    animation: fadeup 800ms ease-in forwards; 
    animation-delay: .5s;
  }
}  

@keyframes fadeup {
  0% { 
    transform: translateY(2em); 
    opacity: 0;
  } 
  30% {
    opacity: 0.3;
  }  
  80% { 
    opacity: .5;
  }
  100% {
    transform: translateY(0); 
    opacity: 1;
  }
}


@include tablet-landscape { 
  p { 
    width: 70%;
  }
} 

@include tablet-portait { 
  div{
    margin: 4em 2em;
  }
  
  p { 
    width: 75%;
  }
} 

@include mobile-landscape { 
  p { 
    width: 75%;
  }
} 

@include mobile-portait { 
  div { 
    margin: 3em 1em;
  }
  
  p { 
    width: 100%;
  }
}

</style>