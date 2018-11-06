<template>
  <div class="container">
    <div class="row">
      <div class="news">
        <h1>test</h1>
      </div>
      <div class="players d-block p-2 bg-dark text-white">
        <h4>Players:</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h4 {
  font-weight: normal;
  text-align: center;
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
.container{
  margin-top: 90px;
}
.players{
  position: absolute;
  right: 0;
  width: 15%;
  height: 65%;
  line-height: 60px;
}
</style>
