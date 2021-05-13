<template>
  <div>
    <Hero/>   
    <div id="see-more"> 
      <div class="section-contact"> 
        <HomeAbout/>
        <!-- <ContactForm/> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Hero from '../components/HomeHero'  
  import ContactForm from '../components/ContactForm'  
  import HomeAbout from '../components/HomeAbout'
  export default {
    components: {
      Hero, 
      ContactForm, 
      HomeAbout
    }
  }
</script>

<style lang="scss" scoped>

</style>