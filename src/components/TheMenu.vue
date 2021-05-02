<template>
  <div class="nav">
    <div class="logo">
      <router-link to="/">CG</router-link>
    </div> 
    <div class="links">
      <ul>
        <!-- <li><router-link to="/">Home</router-link></li> -->
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li> 
        <li><router-link to="/playground">Playground</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>  
    <div>EN</div> 
    <div class="menu-toggle"> 
      <button v-on:click="menuToggle" >HB</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'menu',
    data() {
      menuOpen: false
    }, 
    methods: { 
      menuToggle() {
        this.menuOpen = !this.menuOpen
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/styles/mediaqueries';

.menu-toggle {
  display: none; 
  font-weight: bold; 
  color: #fff;  
  font-size: 1.5rem;
}

.nav {
  display: flex;   
  background: #000;  
  opacity: .999;
  backdrop-filter: saturate(180%) blur(20px);
  font-size: 1.1rem; 
  padding: 0.6rem; 
  align-items: center; 
  justify-content: space-between; 
}   

ul { 
  list-style-type: none; 
  padding: 0; 
  margin: 0;
} 

li { 
  margin: 0; 
  padding: 0; 
  display: inline;
}

.logo {
  font-weight: bold; 
  color: #fff;  
  font-size: 1.5rem;
}  

$link-padding: 1.4em;

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

@include for-phone-only {
  .nav { 
    display: grid; 
    overflow: hidden; 
    grid-template-columns: 1fr 1fr;
  }    
  
  .links { 
    grid-row: 2;
  } 

  .menu-open { 
    background: green;
  }

  .menu-toggle { 
    display: inline-block; 
    // justify-self: end;
  } 

  li { 
    display: block;
  }

}
</style>