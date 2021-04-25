<template>
  <div class="hero">
    <div class="title">
      <h1>Hello</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>

// $bg-color: #222;
$bg-color: #2e1d7d; 
.hero { 
  // background: $bg-color;
  // background: -webkit-radial-gradient(circle, $bg-color 0%, #050939 80%);
  // background: radial-gradient(circle, $bg-color 0%, #050939 80%);  
  background: rgb(51,51,51);
background: radial-gradient(circle, rgba(51,51,51,1) 0%, rgba(0,0,0,1) 100%);
  min-height: 100vh;  
  display: flex; 
  justify-content: center; 
  align-items: center;
} 

.bg-image { 
  z-index: 1; 
  width: 210%; 
  height: 100%;
}  

h1 {
  background: linear-gradient(94.23deg,#5374fa 12.41%,#fd9179 52.55%,#ff6969 89.95%);  
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  font-size: 3.3rem; 
  font-weight: lighter;
}

.title { 
  z-index: 1;  
}

</style>