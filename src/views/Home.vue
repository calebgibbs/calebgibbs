<template>
  <div>
    <Hero/>   
    <div id="see-more"> 
      <div class="section-contact"> 
        <HomeAbout/> 
        <Skills/> 
        <h3 class="gradient-title">Get in touch</h3>
        <ContactForm/>
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
h3 { 
  text-align: center; 
  font-size: 2em; 
  margin-top: 4em;
}
</style>