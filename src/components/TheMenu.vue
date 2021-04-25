<template>
  <div class="nav">
    <div class="logo">CG</div> 
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link> 
      <router-link to="/playground">Playground</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'menu'
  }
</script>

<style lang="scss" scoped>
.nav {
  display: flex; 
  // background: rgba(0,0,0,0.8);   
  background: #000;  
  opacity: .999;
  backdrop-filter: saturate(180%) blur(20px);
  font-size: 1.1rem; 
  padding: 0.6rem; 
  align-items: center; 
  justify-content: space-between;
}  

.logo {
  font-weight: bold; 
  color: #fff; 
}  

$link-padding: 2rem;

a { 
  color:#f5f5f7; 
  text-decoration: none; 
  padding: 0 $link-padding 0 $link-padding;   
  opacity: .8; 
  transition: opacity ease-in-out 0.1s;
  &:hover { 
    opacity: 1;
  }
} 
</style>