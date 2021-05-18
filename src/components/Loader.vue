<template>
  <div class="outer">
    <div class="loading-outer" :style="'width: calc(1em + '+size+'); height: calc(1em + '+size+')'">
      <div :style="'width: '+size+'; height: '+size+';'"></div>
    </div>
  </div>
</template> 

<script>
  export default {
    props: {
      size: String
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

.outer { 
  width: 1rem; 
  height: 1rem;
}
</style>