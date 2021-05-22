<template>
  <div id="theform">
    <form name="contact" @submit.prevent="submitForm">
      <div class="input-container">
        <input name="name" type="text" id="name" v-model="name" required> 
        <label for="name">Name</label> 
      </div>
      <div class="input-container">
        <input name="email" type="text" id="email" v-model="email" required> 
        <label for="email">Email</label>
      </div> 
      <div class="input-container">
        <textarea name="message" cols="30" rows="8" v-model="message" id="message" required></textarea> 
        <label for="message" class="message-label">Message</label>
      </div> 
      <div class="input-container">
        <button type="submit" id="submit-button" @click="validateFrom">
          <span id="send-text">Send</span> 
          <span id="loading" class="hidden">
            <Loader size="1em" border=".5em" />
          </span>
        </button>
      </div>  
      <div>
        <ul class="errors">
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div> 
    </form>
  </div>
</template>

<script> 
  import emailjs from 'emailjs-com'
  import Loader from './Loader'
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/ 
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  export default {
    data() { 
      return {
        errors: [], 
        name: null,  
        email: null,  
        message: null
      }
    }, 
    methods: {
      validateFrom(e) {
        this.errors = [] 
        
        //name 
        if(!this.name) {
          this.errors.push('Please enter your name')
        } else if(!this.name.match(nameRegex)) {
          this.errors.push('Please enter a valid name')
        }
        //email 
        if(!this.email){
          this.errors.push('Please enter your email address')
        }else if(!this.email.match(emailRegex)) {
          this.errors.push('Please enter a valid email address')
        }
        //message 
        if(!this.message){
          this.errors.push('Please add a message')
        }

        if(errors) {
          e.preventDefault()
        }
      },
      submitForm(e) {      
        document.getElementById('send-text').classList.add('hidden') 
        document.getElementById('loading').classList.remove('hidden') 
        document.getElementById('submit-button').classList.add('selected')

        emailjs.sendForm('service_ydr28uj', 'template_6bfqpxu', e.target, 'user_cXVYnoDAnK7U0qBsC9viA') 
        //remove text and add the loader  
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text) 
            //add sending class   
            document.getElementById('theform').classList.add('sending')
            document.getElementById('name').value = null
            document.getElementById('email').value = null
            document.getElementById('message').value = null  
            document.getElementById('send-text').classList.remove('hidden') 
            document.getElementById('loading').classList.add('hidden')
            document.getElementById('submit-button').classList.remove('selected')
            //remove loader 
        }, (error) => {
            console.log('FAILED...', error)  
            document.getElementById('send-text').classList.remove('hidden') 
            document.getElementById('loading').classList.add('hidden')
            document.getElementById('submit-button').classList.remove('selected') 
            this.errors.push('Something went wrong. Pleas try again later')
        }) 
      }
    },
    components: {
      Loader
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/styles/mediaqueries';
@import '../assets/styles/colours';

form { 
  width: 50%; 
  margin: 0 auto; 
  margin-top: 4em;  
  @include tablet-landscape { 
    width: 50%;
  } 

  @include tablet-portait { 
    width: 80%;
  } 

  @include mobile-landscape { 
    width: 80%;
  } 

  @include mobile-portait { 
    width: 90%;
  } 
  .input-container { 
    position: relative; 
    padding-bottom: 1em;
  } 
}   

input { 
  width: 100%; 
  border: none; 
  padding: 0; 
  padding-bottom: .4em; 
  background: none; 
  margin-bottom: 2em;  
  border-bottom: 2px solid rgba(0,0,0, 0.5); 
  outline: none;     
  transition: border 0.1s ease; 
  &:focus { 
    border-bottom: 2px solid black;
  } 
  &:valid { 
    border-bottom: 2px solid black;
  }
  &:focus + label {
    transform: translateY(-100%);
  } 
  &:valid + label { 
    transform: translateY(-100%);
  }
}  

textarea { 
  width: 100%; 
  border: 0; 
  font-family: inherit; 
  background: none;  
  border-bottom: 2px solid rgba(0,0,0, 0.5); 
  resize: none; 
  outline: none; 
  &:focus { 
    border-bottom: 2px solid black;
  } 
  &:valid { 
    border-bottom: 2px solid black;
  }
  &:focus + .message-label { 
    transform: translateY(-100%);
  } 

  &:valid + .message-label { 
    transform: translateY(-100%);
  }

}  

label {
  position: absolute; 
  left: 0;   
  pointer-events: none;
  transition: all 0.2s ease;
}  

.message-label { 
  top: 0; 
}

button { 
  padding: .8em 1.8em; 
  background: none; 
  border: 2px solid rgba(0,0,0, 0.5);  
  transition: 0.2s ease-in-out;  
  font-weight: bold; 
  color: rgba(0,0,0, 0.5);  
  position: absolute;
  right: 0;
  &:hover {
    border: 2px solid rgba(0,0,0,1);  
    color: #000; 
    cursor: pointer;
  }
}   

.selected { 
  border: 2px solid rgba(0,0,0,1);
}

.hidden { 
  display: none;
}

.errors { 
  padding: 0; 
  li { 
    list-style-type: none; 
    color: $red;
  }
}  

.sending { 
  animation: send 2s;
}

@keyframes send { 
  0% {
    transform: scale(0.8);
  } 
  50% {
    transform: translateX(100%); 
  }  
  55% { 
    opacity: 0; 
    transform: translateX(0);
  }  
  70% {
    opacity: .5; 
  }
  100% {
    opacity: 1;
  }
}
</style>