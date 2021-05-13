<template>
  <div class="footer">
    <div class="footer-inner">
      <div class="footer-links">
        <ul>
          <li><a href="https://github.com/calebgibbs/" target="_blank"><img width="25" src="../assets/images/logo/github.png"></a></li> 
          <li><a href="mailto:calebgibbs@me.com" target="_blank"><img width="25" src="../assets/images/logo/mail.png"></a></li> 
          <li><a href="https://www.linkedin.com/in/caleb-g-b47285a9/" target="_blank"><img width="25" src="../assets/images/logo/linkdin.png"></a></li>
        </ul>
      </div> 
      <div class="footer-copy">
        <span>&copy; Caleb Gibbs {{ new Date().getFullYear() }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped> 
@import '../assets/styles/mediaqueries';
.footer { 
  width: minmax(100%);
  background: #111;  
  margin: 0; 
  padding: 2em; 
  color: #fff;  
  margin-top: 4em;

  &-inner { 
    width: 50%; 
    margin: 0 auto;
  }

}  

ul { 
  padding: 0; 
  margin: 0; 
  text-align: center;  
} 

li { 
  list-style-type: none;  
  display: inline-block; 
  padding: 0 2.5em;
} 

a { 
  color: inherit; 
  text-decoration: none; 
  opacity: .8;  
  transition: opacity .1s ease-in-out;
  &:hover { 
    opacity: 1;
  }
} 

span { 
  display: block; 
  width: max-content; 
  margin: 0 auto; 
  padding: .5em; 
  font-size: .8em; 
  opacity: .8; 
  transform: translateY(50%);
} 

img { 
  width: -50%;
} 

@include mobile-portait { 
  .footer-inner { 
    width: 100%;
  }
  
  li { 
    padding: 0 1em;
  }
}
</style>