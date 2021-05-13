<template>
  <div> 
    <div class="title">
      <h3 class="gradient-title">Skills</h3>
    </div>
    <div class="icons">
      <ul>
        <li v-for="skil in skills" :key="skil"><img :src="require('../assets/images/skills/'+skil+'.png')" ></li>
      </ul> 
    </div>
  </div>
</template>

<script>
  export default {
    data() { 
      return { 
        skills: [
          'html', 
          'css', 
          'js',
          'bootstrap', 
          'responsive', 
          'vue',
          'wordpress', 
          'php', 
          'mysql', 
          'mongo',
          'photoshop', 
          'illustrator', 
          'indesign'
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.title { 
  background: #fff; 
  width: max-content; 
  padding: 1em 2.5em; 
  margin: 0 auto; 
  transform: translateY(50%); 
  font-size: 1.5em; 
  box-shadow: 0 0 6px 1px rgba(0,0,0,0.2); 
  border-radius: 3px;
}

.icons { 
  width: minmax(100%); 
  background: #222;  
  color: #fff; 
  padding: 1em; 
  overflow: hidden;
}  

ul { 
  padding: 0;  
  margin: 0;  
  display: flex; 
  justify-content: space-between; 
  flex-wrap: wrap; 
  width: 75%; 
  margin: 0 auto; 
  margin-top: 3em;
  li { 
    list-style-type: none; 
  }
}  

img { 
  height: 3.5em; 
  padding: .4em 2.5em;
}
</style>