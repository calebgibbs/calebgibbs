<template>
  <div class="outer">
    <form> 
      <div class="title">
        <h2 class="gradient-title">Login</h2>
      </div>
      <div class="email-field">
        <input type="email" placeholder="Email">
      </div> 
      <div>
        <input type="password" placeholder="Password">
      </div> 
      <div>
        <button>Login</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .outer { 
    padding: 2.5rem; 
    background: #fff; 
    border-radius: 15px; 
    box-shadow: 0px 2px 30px 0px rgba(0,0,0,0.1); 
  } 

  h2 { 
    text-align: center; 
    font-size: 1.7rem; 
    padding-bottom: 2rem;
  } 

 input { 
  width: 100%; 
  border: none; 
  padding: 0; 
  padding-bottom: .4em; 
  background: none; 
  margin-bottom: 2em;  
  border-bottom: 2px solid rgba(0,0,0, 0.5); 
  outline: none;     
  transition: border 0.1s ease; 
  &:focus { 
    border-bottom: 2px solid black;
  } 
}  

button { 
  padding: .5em 1em; 
  background: none; 
  border: 2px solid rgba(0,0,0, 0.5);  
  transition: 0.2s ease-in-out;  
  font-weight: bold; 
  color: rgba(0,0,0, 0.5);  
  float: right;
  &:hover {
    border: 2px solid rgba(0,0,0,1);  
    color: #000; 
    cursor: pointer;
  }
} 
</style>