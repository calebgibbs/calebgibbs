<template>
  <div class="page">
    <h1 class="gradient-title">Let's start talking.</h1>
    <!-- <ContactForm/> --> 
    <Loader size="4em"/>
  </div>
</template>

<script> 
  import ContactForm from '../components/ContactForm' 
  import Loader from '../components/Loader'
  export default {
    components: {
      ContactForm, 
      Loader
    }
  }
</script>

<style lang="scss" scoped>
h1 { 
  text-align: center; 
  font-weight: lighter; 
  margin-top: 4em;
}
</style>