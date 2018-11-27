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
  methods: {
    changePlayerNb() {
      this.playerNb++;
    }
  },
  beforeMount () {
    let el = this;
    let io = this.$store.getters.io;
    io.socket.on('refreshPlayer', function(data) {
      el.changePlayerNb();
    })
  }
}
</script>
<style scoped>

</style>
