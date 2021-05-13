<template>
  <div>
    <Hero/>   
    <div id="see-more"> 
      <div class="section-contact"> 
        <HomeAbout/> 
        <Skills/> 
      </div>
    </div>
  </div>
</template>

<script>
  import Hero from '../components/HomeHero'  
  import ContactForm from '../components/ContactForm'  
  import HomeAbout from '../components/HomeAbout' 
  import Skills from '../components/Skills'
  export default {
    components: {
      Hero, 
      ContactForm, 
      HomeAbout, 
      Skills
    }
  }
</script>

<style lang="scss" scoped>
h2 { 
  text-align: center;
}
</style>