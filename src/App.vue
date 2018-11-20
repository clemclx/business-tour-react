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
            <router-link to="/lobby" tag="a" class="nav-link">Jouer</router-link>
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
        <ul class="navbar-nav" v-if="!userId">
          <li class="nav-item active my-2 my-sm-0">
            <router-link to="/login" tag="a" class="nav-link">Connexion</router-link>
          </li>
          <li class="nav-item active my-2 my-sm-0">
            <router-link to="/signup" tag="a" class="nav-link">Inscription</router-link>
          </li>
        </ul>
        <ul class="navbar-nav" v-if="userId">
          <li class="nav-item active my-2 my-sm-0">
            <a class="nav-link">{{fullName}}</a>
          </li>
          <li class="nav-item active my-2 my-sm-0">
            <a class="nav-link" @click="handleLogout">Déconnexion</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

    export default {
        name: 'App',
        computed: {
            fullName: function () {
                return this.$store.getters.fullName
            },
            userId: function () {
                return this.$store.getters.userId
            },
            emailAddress: function () {
                return this.$store.getters.emailAddress
            }
        },
        methods: {
            handleLogout: function () {
                fetch('http://192.168.99.100:1337/api/v1/account/logout', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                }).then((response) => {
                    if (response.status === 200) {
                        this.$store.dispatch('changeUserId', null);
                        this.$store.dispatch('changeFullName', '');
                        this.$store.dispatch('changeEmailAddress', '');
                    }
                }).catch((e) => {
                    console.log(e);
                })
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        min-height: 100vh;
    }

    html {
        position: relative;
    }

    nav {
        height: 60px;
    }

    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        background-color: #f5f5f5;
    }
    .nav-link {
        cursor: pointer;
    }
</style>