<template>
  <div>
    <form>
      <div>
        <input name="name" type="text" required> 
        <label for="name">Name</label>
      </div>
      <div>
        <input name="email" type="text" required> 
        <label for="email">Email</label> 
      </div> 
      <div>
        <textarea name="message" cols="30" rows="8" required></textarea> 
        <label for="message" class="message-label">Message</label>
      </div> 
      <div>
        <button>Send</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
form { 
  width: 50%; 
  margin: 0 auto; 
  margin-top: 4em;  
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