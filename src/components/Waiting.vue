<template>
<div class="cntnr">
  <h1>En attente</h1>
  <div>Game id : {{gameId}}</div>
  <div>Joueurs : {{playerNb}} / 4</div>
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
  }
}
</script>
<style scoped>

</style>
