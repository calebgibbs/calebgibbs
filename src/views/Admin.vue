<template>
  <div>
    <div class="button-group">
      <button class="button-left">Projects</button> 
      <button cladd="buton-right">Blog</button>
    </div>
  </div>
</template>

<script>
  
  export default {
   components: {
     
   } 
  }
</script>

<style lang="scss" scoped>
.button-group button { 
  background-color: #04AA6D; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}
</style>