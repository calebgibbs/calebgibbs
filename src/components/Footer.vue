<template>
  <div class="footer">
    <ul>
      <li><a href="#">Github</a></li>
      <li><a href="#">Email</a></li>
      <li><a href="#">Linkedin</a></li>
    </ul>
  </div>
</template> 

<style lang="scss" scoped>
.footer {
  width: 100%; 
  color: #fff; 
  background: #000; 
  position: fixedw; 
  bottom: 0; 
  padding: 4rem; 
  text-align: center;
} 

ul { 
  margin: 0;
  padding: 0; 
} 

li { 
  list-style-type: none; 
  display: inline-block; 
  padding: 1em;
} 

a { 
  color: #fff; 
  text-decoration: none; 
  opacity: 0.8; 
  transition: color 0.1s; 
  &:hover {
    opacity: 1;
  }
}
</style>