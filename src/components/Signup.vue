<template>
  <div class="wrapper">
    <form class="form-signin">
      <h2 class="form-signin-heading">Inscription</h2>
      <input type="text" class="form-control" name="firstname" placeholder="Nom" required="" autofocus="" />
      <input type="text" class="form-control" name="lastname" placeholder="Prénom" required="" autofocus="" />
      <input type="text" class="form-control" name="username" placeholder="Pseudonyme" required="" autofocus="" />
      <input type="text" class="form-control" name="mail" placeholder="Adresse email" required="" autofocus="" />
      <input type="password" class="form-control" name="password" placeholder="Mot de passe" required=""/>
      <input type="password" class="form-control" name="password-confirm" placeholder="Confirmer mot de passe" required=""/>
      <button class="btn btn-lg btn-primary btn-block" type="submit">S'inscrire</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  margin-top: 8%;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);
}
</style>
