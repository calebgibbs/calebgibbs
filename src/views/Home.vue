<template>
  <div>
    <Hero/>   
    <div id="see-more"> 
      <div class="section-contact"> 
        <HomeAbout/> 
        <Skills/> 
        <div clas="black"></div>
        <div class="title"> 
          <h3 class="gradient-title">Get in touch</h3>
        </div>
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
    },
    metaInfo: {
      title: 'Caleb Gibbs',
      description: 'I’m a front-end web developer based in Wellington, New Zealand. I specialise in making your projects come to life through code for you and your customers.'
    }
  }
</script>

<style lang="scss" scoped>

h3 { 
  text-align: center; 
  font-size: 2em;  
  margin-top: 2em;
} 
</style>