<template>
  <div class="page">
    <h1 class="gradient-title">Let's start talking</h1>
    <ContactForm/>  
  </div>
</template>

<script> 
  import ContactForm from '../components/ContactForm'  
  export default {
    components: {
      ContactForm
    },
    metaInfo: {
      title: 'Contact'
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