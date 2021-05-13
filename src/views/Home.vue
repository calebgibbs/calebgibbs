<template>
  <div>
    <Hero/>   
    <div id="see-more"> 
      <div class="section-contact"> 
        <HomeAbout/> 
        <Uses/>
        <!-- <ContactForm/> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Hero from '../components/HomeHero'  
  import ContactForm from '../components/ContactForm'  
  import HomeAbout from '../components/HomeAbout' 
  import Uses from '../components/Uses'
  export default {
    components: {
      Hero, 
      ContactForm, 
      HomeAbout, 
      Uses
    }
  }
</script>

<style lang="scss" scoped>

</style>