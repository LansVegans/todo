<template>
  <div class="form-center col-md-3">
    <div class="container-center">
      <img src="../../assets/logo.png" height="100" width="100">
       <form class="form-signup" @submit.prevent="onSingup">
       <h1 class="h3 mb-3 font-weight-normal">Please sign up</h1>
       <label for="inputEmail" class="sr-only">Email address</label>
       <input type="email" id="inputEmail" name="email" v-model="email" class="form-control" placeholder="Email address" autofocus="">
       <label for="password" class="sr-only">Password</label>
       <input type="password" id="password"  name="password" v-model="password" class="form-control" placeholder="Password" >
       <label for="confirmPassword" class="sr-only">Password confirm</label>
       <input type="password" id="confirmPassword" name="confirmPassword" v-model="confirmPassword" class="form-control" placeholder="Password confirm" >
         <label> {{ comparePasswords }}</label>
       <div class="checkbox mb-3">
       <label>
          <input type="checkbox" value="remember-me"> Remember me
       </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
      <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
    </form>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'

export default {
  name: 'SignUp',
  data () {
    return {

      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match': ''
    }
  },
  methods: {
    onSingup(){
      console.log({email: this.email, password: this.password, confirmPassword: this.confirmPassword})
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then( ()  =>  {
       this.$router.replace('profile');
        }).catch( error => {
          console.log(error);
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../../bootstrap.min.css"></style>
<style src="../../style.css"></style>
