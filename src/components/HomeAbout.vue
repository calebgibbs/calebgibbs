<template>
  <div>
    <h2 class="gradient-title">Hi, I'm Caleb</h2> 
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque praesentium sapiente explicabo optio officia eligendi molestias totam cum id. Laudantium saepe officia cupiditate eaque maxime ducimus veritatis nostrum soluta? Nam!</p>
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
  font-size: 1.3em; 
  text-align: center; 
}  

h2 { 
  font-size: 1.7em;
} 

p { 
  width: 50%; 
  margin: 0 auto; 
  margin-top: 1em;
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