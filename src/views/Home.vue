<template>
  <div>
    <Hero/>   
    <div class="page" id="see-more"> 
      <div class="section-contact">
        <ContactForm/>
      </div>
    </div>
  </div>
</template>

<script>
  import Hero from '../components/HomeHero'  
  import ContactForm from '../components/ContactForm' 
  export default {
    components: {
      Hero, 
      ContactForm
    }
  }
</script>

<style lang="scss" scoped>

</style>