<template>
<div class="container">
  <div class="row">
    <div class="col-2">
    </div>
    <div class="col-8">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom de la partie</th>
            <th scope="col">Nombre de joueur</th>
            <th scope="col"><button class="btn btn-light" v-on:click="createSessions">Créer une partie</button></th>
          </tr>
        </thead>
        <tbody>
          <singleSession></singleSession>
        </tbody>
      </table>
    </div>
    <div class="col-2">
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';

Vue.component('singleSession', {
  data: function () {
  return {
    id: '',
    name: '',
    nplayer: ''
  }
},
template: '<tr><th scope="row">{{id}}</th><td name="pseudo">{{name}}</td><td name="numberOfCurrrentPlayers">{{nplayer}}/4</td><td><router-link to="/waiting/" tag="button" class="btn btn-light"">Rejoindre</router-link></td></tr>'
});

export default {
  data(){
    return{
      numberOfCurrentPlayers: ''
    }
  },
  methods: {
    createSessions(e){
      e.preventDefault();
      fetch('http://localhost:1337/lobby/create', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        }).then((response) => {
          if (response.status === 200) {
            return response.json();
          }
        }).then((data) => {
          data = JSON.parse(data)
          this.$router.push('/waiting/' + data.id)
        }).catch((e) => {
          console.log(e);
        })
    },
    joinSession(e){
      e.preventDefault();
      fetch('http://localhost:1337/lobby/join', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({numberOfCurrentPlayers: '1'})
        }).then((response) => {
          if (response.status === 200) {
            return response.json();
          }
        }).then((data) => {
          console.log(data)
          this.$router.push('/waiting/' + data)
        }).catch((e) => {
          console.log(e);
        })
    },
    
  }
}
</script>
<style scoped>
table{
    margin-top: 5%;
    padding-right: 20%;
}
</style>
