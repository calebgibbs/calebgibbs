<template>
  <div>
    <form>
      <div>
        <input name="name" type="text" v-model="name" required> 
        <label for="name">Name</label>
      </div>
      <div>
        <input name="email" type="text" v-model="email" required> 
        <label for="email">Email</label> 
      </div> 
      <div>
        <textarea name="message" cols="30" rows="8" v-model="message" required></textarea> 
        <label for="message" class="message-label">Message</label>
      </div> 
      <div>
        <button @click="submitForm">Send</button>
      </div>  
    </form>
  </div>
</template>

<script> 
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/ 
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  export default {
    data() { 
      return {
        errors: {
          name: true,
          email: true, 
          message: true
        }, 
        name: null, 
        email: null, 
        message: null, 
        eMessage: null 
      }
    }, 
    methods: {
      submitForm(e) {
        e.preventDefault() 
        
        //validate name  
        if(!this.name) {
          this.errors.name = true  
        } else if(!this.name.match(nameRegex)) {
          this.errors.name = true
        } else { 
          this.errors.name = false
        }
        
        //Validate email  
        if(!this.email) {
          this.errors.email = true
        } else if(!this.email.match(emailRegex)) {
          this.errors.email = true
        } else {
          this.errors.email = false
        } 

        //validate message 
        if(!this.message) { 
          this.errors.message = true
        } else { 
          this.errors.message = false
        } 

        //submit form  
        if( !this.errors.name && !this.errors.email && !this.errors.message ) {
          console.log('sending form')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/styles/mediaqueries';

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
  div { 
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
  }
}

</style>