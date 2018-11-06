<template>
  <div class="wrapper">
    <form class="form-signin">
      <h2 class="form-signin-heading">Authentification</h2>
      <input type="text" class="form-control" name="username" placeholder="Adresse email" required="" autofocus="" />
      <input type="password" class="form-control" name="password" placeholder="Mot de passe" required=""/>
      <label class="checkbox">
        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Mémoriser
      </label>
      <button class="btn btn-lg btn-primary btn-block" type="submit">S'authentifier</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input{
  margin-bottom: 10px;
}
.wrapper {
  margin-bottom: 80px;
  margin-top: 12%;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);
}
</style>
