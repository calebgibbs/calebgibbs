<template>
  <div class="page">
    <LoginForm class="form"></LoginForm>
  </div>
</template>

<script>
  import LoginForm from '../components/LoginForm.vue'
  export default {
    components: { 
      LoginForm
    }
  }
</script>

<style lang="scss" scoped>
.page { 
  min-height: 64vh; 
  display: flex; 
  justify-content: center; 
  align-items: center;
}

.form { 
  margin: 0 auto; 
  width: 30%; 
}
</style>