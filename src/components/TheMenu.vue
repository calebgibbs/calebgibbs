<template>
  <div class="nav full-menu">
    <div class="logo">
      <router-link to="/">CG</router-link>
    </div>  
    <div class="menu-toggle"> 
      <button @click="menuToggle"><img src="../assets/images/icons/menu.svg" alt="menu"></button>
    </div>
    <div id="menu-links" :class="{mobileMenuOpen: menuOpen}" class="links">
      <ul>
        <li><router-link to="/" @click.native="closeMenu">Home</router-link></li>
        <!-- <li><a href="/#see-more">About</a></li> -->
        <!-- <li><router-link to="/blog" @click.native="closeMenu">Blog</router-link></li> -->
        <li><router-link to="/projects" @click.native="closeMenu">Projects</router-link></li> 
        <li><router-link to="/playground" @click.native="closeMenu">Playground</router-link></li>
        <li><router-link to="/contact" @click.native="closeMenu">Contact</router-link></li> 
        <li><router-link to="/admin" @click.native="closeMenu" >Admin Console</router-link></li> 
      </ul>
    </div>  
    <div class="lang">
      <a href="#">中文</a>
    </div> 
  </div>
</template>

<script>
  export default {
    name: 'navigation',
    data() {
      return {
        menuOpen: false
      }
    }, 
    methods: { 
      menuToggle() {
        this.menuOpen = !this.menuOpen  
      }, 
      closeMenu() { 
        this.menuOpen = false
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/styles/mediaqueries'; 
@import '../assets/styles/colours';

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
  color: #fff;  
  font-size: 1.5rem; 
  opacity: 1;
}  

$link-padding: 1.4em; 

.lang {
  color: #fff; 
  padding: 0 $link-padding; 
  opacity: .8;
  &:hover {
    opacity: 1;
  }
}

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

.menu-toggle {
  display: none;
} 

@mixin mobile-menu {
  .language-toggle { 
    display: none;
  }  
  
  .nav { 
    display: flex; 
    flex-wrap: wrap; 
    div { 
      flex: 50%;
    }
  }  

  $mobileNavHeight: 2rem;

  .logo { 
    height: $mobileNavHeight;
  }
  
  .menu-toggle {  
    height: $mobileNavHeight; 
    display: block;  
    button {  
      height: 2rem;  
      float: right; 
      background: none; 
      border: none; 
      opacity: .8; 
      transition: opacity .1s; 
      &:hover {
        opacity: 1;
      }
      img {
        vertical-align: middle;
      }
    }
  } 

  .links {
    display: none;  
    padding: 0.2em;  
    height: calc(100vh - 3.6rem);
    li { 
      display: block; 
      border-top: 1px solid #fff; 
      padding-top: 1.3em; 
      padding-bottom: 1.3em;  
      &:first-of-type { 
        border-top: 0;
      }
    }
  }  

  .mobileMenuOpen { 
    display: block;
  }
  a { 
    padding: 0;
  } 
}


@include mobile-landscape {
  @include mobile-menu();
} 

@include mobile-portait {
  @include mobile-menu();
}
</style>