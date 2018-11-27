<template>
<div class="corps">
  <div class="sk-folding-cube">
    <div class="sk-cube1 sk-cube"></div>
    <div class="sk-cube2 sk-cube"></div>
    <div class="sk-cube4 sk-cube"></div>
    <div class="sk-cube3 sk-cube"></div>
  </div>
  <div class="cntnr">
    <div><p>{{playerNb}} / 4</p></div>
    <button class="btn btn-dark" v-on:click="exitSessions">Quitter la partie</button>
  </div>
</div>
</template>

<script>
import socketIOClient from 'socket.io-client';
import sailsIOClient from 'sails.io.js';
export default {
  data: function() {
    return {
      gameId: this.$store.getters.gameId,
      playerNb: 1
    }
  },
  mounted() {
    if (io.sails) {
      console.log(io.sails)
      io.sails.on('refreshPlayer', function(data) {
      playerNb = data.playerNb
    })
    }
  },
  methods:{
    exitSessions(e){
      e.preventDefault();
      fetch('http://localhost:1337/lobby', {
        method: 'GET',
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

          // let io = instanciateSocket();

          // io.socket.post('/socket/test', {gameId: data.id}, function(data, jwr) {
          //   console.log('Server response: ' + jwr + data)
          // })
          this.$store.dispatch('changeisInGame', true)
          this.$router.push('/lobby')
        }).catch((e) => {
          console.log(e);
        })
    }
  }
}
</script>
<style scoped>
p{
  font-size: 90px;
  color: #212121;
}
.corps{
  max-height: 100%;
  min-height: 100%;
  max-width: 100%;
  min-width: 100%;
  position: absolute;
	left: 0;
	top: 0;
  z-index: 0;
  background-color: #BDBDBD;
}
.cntnr{
  z-index: 1;
}
.sk-folding-cube {
  margin: 7% auto;
  width: 200px;
  height: 200px;
  position: relative;
}

.sk-folding-cube .sk-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
          transform: scale(1.1); 
}
.sk-folding-cube .sk-cube:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #212121;
  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
          animation: sk-foldCubeAngle 2.4s infinite linear both;
  -webkit-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}
.sk-folding-cube .sk-cube2 {
  -webkit-transform: scale(1.1) rotateZ(90deg);
          transform: scale(1.1) rotateZ(90deg);
}
.sk-folding-cube .sk-cube3 {
  -webkit-transform: scale(1.1) rotateZ(180deg);
          transform: scale(1.1) rotateZ(180deg);
}
.sk-folding-cube .sk-cube4 {
  -webkit-transform: scale(1.1) rotateZ(270deg);
          transform: scale(1.1) rotateZ(270deg);
}
.sk-folding-cube .sk-cube2:before {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}
.sk-folding-cube .sk-cube3:before {
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s; 
}
.sk-folding-cube .sk-cube4:before {
  -webkit-animation-delay: 0.9s;
          animation-delay: 0.9s;
}
@-webkit-keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(200px) rotateX(-180deg);
            transform: perspective(200px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(200px) rotateX(0deg);
            transform: perspective(200px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(200px) rotateY(180deg);
            transform: perspective(200px) rotateY(180deg);
    opacity: 0; 
  } 
}

@keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(200px) rotateX(-180deg);
            transform: perspective(200px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(200px) rotateX(0deg);
            transform: perspective(200px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(200px) rotateY(180deg);
            transform: perspective(200px) rotateY(180deg);
    opacity: 0; 
  }
}
</style>
