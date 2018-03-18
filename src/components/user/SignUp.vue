<template>
  <div class="form-center col-md-3">
    <div class="container-center">
      <img src="../../assets/logo.png" height="100" width="100">
       <form class="form-signup">      
       <h1 class="h3 mb-3 font-weight-normal">Please sign up</h1>
       <label for="inputEmail" class="sr-only">Email address</label>
       <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
       <label for="inputPassword" class="sr-only">Password</label>
       <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
       <label for="inputPasswordConfirm" class="sr-only">Password confirm</label>
       <input type="password" id="inputPasswordConfirm" class="form-control" placeholder="Password confirm" required="">
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
export default {
  name: 'SignUp',
  data () {
    return {
      msg: 'SignUp'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../../bootstrap.min.css"></style>
<style src="../../style.css"></style>
