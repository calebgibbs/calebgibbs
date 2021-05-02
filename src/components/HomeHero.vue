<template>
  <div class="hero">
    <div class="title">
      <h1 class="gradient-title">你好， 我是 Caleb</h1> 
      <h3 class="gradient-title">我是个新西兰的初级开发人员</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.hero {  
  background: rgb(51,51,51);
  background: radial-gradient(circle, rgba(51,51,51,1) 0%, rgba(0,0,0,1) 100%);
  min-height: 90vh;  
  display: flex; 
  justify-content: center; 
  align-items: center; 
  text-align: center; 
  font-size: 2em; 
}  

h1, h2, h3{
  margin: 0.10em;
}

.gradient-title {
  background: linear-gradient(94.23deg,#5374fa 12.41%,#fd9179 52.55%,#ff6969 89.95%);  
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;  
  font-weight: lighter;
}

.title { 
  z-index: 1;  
} 
</style>