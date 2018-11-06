<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" tag="a" class="navbar-brand">Business Tour</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/play" tag="a" class="nav-link">Jouer</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/profile" tag="a" class="nav-link">Profile</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/stats" tag="a" class="nav-link">Stats</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/rules" tag="a" class="nav-link">Règles</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item active my-2 my-sm-0">
            <router-link to="/login" tag="a" class="nav-link">Connexion</router-link>
          </li>
          <li class="nav-item active my-2 my-sm-0">
            <router-link to="/signup" tag="a" class="nav-link">Inscription</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
    <footer class="footer">
      <div class="container">
        <span><router-link to="/faq" tag="a">FAQ</router-link>  <router-link to="/cgu" tag="a">CGU</router-link></span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 60px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
}
</style>
