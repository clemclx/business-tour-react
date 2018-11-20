<template>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nom de la partie</th>
      <th scope="col">Nombre de joueur</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Skewrad</td>
      <td>1/4</td>
      <td><router-link to="/waiting" tag="button" class="btn btn-light">Rejoindre</router-link></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Thomas</td>
      <td>1/4</td>
      <td><router-link to="/waitting" tag="button" class="btn btn-light">Rejoindre</router-link></td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
}
</script>
<style scoped>
table{
    margin-top: 5%;
}
</style>
