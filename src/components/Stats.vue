<template>
<div class="container">
  <div class="profile">
      <img  src="http://placehold.it/150x150" alt="...">
      <p>Pseudo</p>
  </div>
  <!-- Scoreboard -->
  <div class="score">
    <div class="row">
      <!-- Victoire -->
      <div class="col-lg-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nb victoire</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Defaite -->
      <div class="col-lg-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nb defaite</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Nb partie -->
      <div class="col-lg-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nb partie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Moyenne V/D -->
      <div class="col-lg-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Moyenne V/D</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.5</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Total Argent -->
      <div class="col-lg-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Total argent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.5M</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Moyenne Argent -->
      <div class="col-lg-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Moyenne argent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>200K</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Durée moyenne -->
      <div class="col-lg-4"></div>
      <div class="col-lg-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">durée moyenne</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>25:38</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-lg-4"></div>
    </div>
  </div>
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
table{
  margin-top: 20%;
}
.score{
  margin-top: 6%;
  margin-left: 15%;
}
img{
    padding-right:3%;
}
.container{
  margin: 0%;
  padding: 0%;
}
.profile{
  margin-top: 0%;
  float: left;
  font-size: 42px;
  margin-left: 5%;
  padding-right: 20%;
}
.row .main{
  padding: 0px;
  margin: 0px;
}
.verticle-content{
  display: block;
}
</style>
