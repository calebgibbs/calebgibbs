<template>
  <div> 
    <div class="title">
      <h3 class="gradient-title">Skills</h3>
    </div>
    <div class="icons">
      <ul>
        <li v-for="skil in skills" :key="skil" v-scrollanimation>
          <img :src="require('../assets/images/skills/'+skil.img)"> 
          <span class="skil-name">{{ skil.title }}</span>
        </li>
      </ul> 
    </div>
  </div>
</template>

<script>
  export default {
    data() { 
      return {  
        skills: [ 
          {
            title: 'HTML', 
            img: 'html.png'
          }, 
          {
            title: 'CSS', 
            img: 'css.png'
          },
          {
            title: 'JavaScript', 
            img: 'js.png'
          },
          {
            title: 'Sass', 
            img: 'sass.png'
          },
          {
            title: 'Responsive', 
            img: 'responsive.png'
          },
          {
            title: 'Vue.js', 
            img: 'vue.png'
          },  
          {
            title: 'Node.js', 
            img: 'node.png'
          },
          { 
            title: 'WordPress', 
            img: 'wordpress.png'
          }, 
          {
            title: 'PHP', 
            img: 'php.png'
          }, 
          {
            title: 'Laravel', 
            img: 'laravel.png'
          }, 
          {
            title: 'MySQL', 
            img: 'mysql.png'
          },
          { 
            title: 'MongoDB', 
            img: 'mongo.png'
          },  
          {
            title: 'Adobe Photoshop', 
            img: 'photoshop.png'
          }, 
          {
            title: 'Adobe Illustrator', 
            img: 'illustrator.png'
          }, 
          {
            title: 'Adobe Indesign', 
            img: 'indesign.png'
          }, 
          {
            title: 'Git', 
            img: 'git.png'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/styles/mediaqueries';
.title { 
  background: #fff; 
  width: max-content; 
  padding: 1em 2.5em; 
  margin: 0 auto;  
  transform: translateY(50%); 
  font-size: 1.5em; 
  // box-shadow: 0 0 6px 1px rgba(0,0,0,0.2); 
  border-radius: 3px;
}

.icons { 
  width: minmax(100%); 
  background: #111;  
  color: #fff; 
  padding: 1em; 
  overflow: hidden;
}  

$hoverSpeed: .25s;

ul { 
  padding: 0;  
  margin: 0;  
  display: flex; 
  justify-content: space-evenly; 
  flex-wrap: wrap; 
  width: 90%; 
  margin: 0 auto; 
  margin-top: 4.5em;
  li { 
    list-style-type: none;  
    margin-bottom: 1.6em; 
    &:hover img { 
      transform: scale(1.1); 
      filter: drop-shadow(0 0 10px #333);
    } 

    &:hover span { 
      transform: scale(1);
    }

  }
}  

img { 
  height: 3.5em; 
  padding: .4em 2.5em; 
  transition: $hoverSpeed transform ease-in-out;   
  display: block; 
  margin-bottom: .8em; 
  user-drag: none;
  -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;  
  user-select: none; 
} 

span { 
  display: block; 
  text-align: center; 
  opacity: 1; 
  transform: scale(0); 
  transition: $hoverSpeed transform ease-in-out; 
  user-select: none;
}  

li { 
  overflow: hidden;
}

.before-enter > img{ 
  opacity: 0; 
  transform: translateY(7em);
} 

.enter > img{ 
  opacity: 1; 
  transform: translateY(0);
} 

@include touch { 
  span { 
    transform: scale(1); 
    transition: 5s opacity ease-in;
  }   
}  

@include mobile-landscape { 

} 

@include mobile-portait { 
  ul { 
    display: grid;  
    grid-template-columns: repeat(3, 1fr);  
    grid-gap: .5em;
  } 
  
  img { 
    height: 1.7rem; 
    margin: 0 auto;
  }  

  span { 
    font-size: .8em;
  }
}

</style>