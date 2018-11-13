<template>
  <div class="wrapper">
    <form @submit="login" class="form-signin">
      <h2 class="form-signin-heading">Authentification</h2>
      <input type="text" class="form-control" name="username" placeholder="Adresse email" required="" autofocus="" v-model="emailAddress"/>
      <input type="password" class="form-control" name="password" placeholder="Mot de passe" required="" v-model="password"/>
      <label class="checkbox">
        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" v-model="rememberMe"> Mémoriser
      </label>
      <button class="btn btn-lg btn-primary btn-block" type="submit">S'authentifier</button>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data () {
    return {
      emailAddress: '',
      password: '',
      rememberMe: false
    }
  },
  methods: {
     login(e) {
         e.preventDefault();
         fetch('http://192.168.99.100:1337/api/v1/entrance/login', {
             method: 'PUT',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
             },
             credentials: 'include',
             body: JSON.stringify({emailAddress: this.emailAddress, password: this.password, rememberMe: this.rememberMe})
         }).then((response) => {
             if (response.status === 200) {
                 return response.json();
             }
         }).then((data) => {
             this.$store.state.userId = data.id
             this.$store.state.emailAddress = data.emailAddress
             this.$store.state.fullName = data.fullName
             this.$router.push('/')
         }).catch((e) => {
             console.log(e);
         })
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
