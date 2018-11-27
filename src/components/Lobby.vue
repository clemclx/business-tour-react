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
        <singleSession></singleSession>
      </table>
    </div>
    <div class="col-2">
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import instanciateSocket from '../socket/socket';

Vue.component('singleSession', {
  data: function () {
  return {
    id: '',
    name: '',
    nplayer: '',
    sessions: '',
  }
},
methods: {
  getSessions(){
      fetch('http://localhost:1337/lobby', {
        method: 'GET',
        headers : {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      }).then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      }).then((data) => {
        this.sessions = JSON.parse(data);
      })
    },
    joinSession(id){
      fetch('http://localhost:1337/lobby/join', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({gameId: id})
      }).then((response) => {
        return response.json();
      }).then((data) => {
        data = JSON.parse(data)

        let io = instanciateSocket();

        io.socket.post('/socket/join', {gameId: id}, function(data, jwr) {
          console.log('Server response: ' + jwr + data)
        })

        this.$store.dispatch('changeGameId', id);
        this.$router.push('/waiting')
      })
    }
},
beforeMount() {
    this.getSessions();
},
template: '<tbody><tr v-for="session in sessions"><th>{{session.id}}</th><th>Game {{session.id}}</th><th>{{session.numberOfCurrentPlayers}} / 4</th><th><button class="btn btn-light" @click="joinSession(session.id)">Rejoindre</button></th></tr></tbody>'
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

          let io = instanciateSocket();

          io.socket.post('/socket/test', {gameId: data.id}, function(data, jwr) {
            console.log('Server response: ' + jwr + data)
          })

          this.$store.dispatch('changeGameId', data.id);
          this.$store.dispatch('changeisInGame', false)
          this.$router.push('/waiting')
        }).catch((e) => {
          console.log(e);
        })
    }
  }
}
</script>
<style scoped>
table{
    margin-top: 5%;
    padding-right: 20%;
}
</style>
