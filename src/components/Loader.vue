<template>
  <div class="loading-outer" :style="'width: calc('+border+' + '+size+'); height: calc('+border+' + '+size+')'">
    <div :style="'width: '+size+'; height: '+size+';'"></div>
  </div>
</template> 

<script>
  export default {
    props: {
      size: String,
      border: String
    }
  }
</script>


<style lang="scss" scoped>
@import '../assets/styles/colours';
$size: 1rem;
.loading-outer {
  background: $gradient; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  border-radius: 50%; 
  animation: spin 1s infinite; 
  div { 
    background: $background; 
    border-radius: 50%;
  }
} 

@keyframes spin {
  from {
    transform: rotate(0);
  } 
  to {
    transform: rotate(360deg);
  }
} 
</style>