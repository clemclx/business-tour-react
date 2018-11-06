<template>
<div class="container">
  <div class="panel-body">
    <form class="form-horizontal">
      <div class="text-center">
        <img src="http://placehold.it/100x100" alt="..." class="img-rounded">
        <div class="clearfix"></div>
        <div class="fileUpload btn">
          Add Photo
          <input type="file" class="upload" />
        </div>
        <!-- Firstname -->
        <div class="form-group">
          <label for="inputtext1" class="control-label">First Name</label>
          <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
              <input type="text" class="form-control" id="inputtext1" placeholder="">
            </div>
            <div class="col-4"></div>
          </div>
        </div>
        <!-- Lastname -->
        <div class="form-group">
          <label for="inputtext1" class="control-label">Last Name</label>
          <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
              <input type="text" class="form-control" id="inputtext1" placeholder="">
            </div>
            <div class="col-4"></div>
          </div>
        </div>
        <!-- Pseudonyme -->
        <div class="form-group">
          <label for="inputtext1" class="control-label">Pseudonyme</label>
          <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
              <input type="text" class="form-control" id="inputtext1" placeholder="">
            </div>
            <div class="col-4"></div>
          </div>
        </div>
        <!-- Email -->
        <div class="form-group">
          <label for="inputtext1" class="control-label">Email</label>
          <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
              <input type="text" class="form-control" id="inputtext1" placeholder="">
            </div>
            <div class="col-4"></div>
          </div>
        </div>
        <!-- Password -->
        <div class="form-group">
          <label for="inputtext1" class="control-label">Password</label>
          <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
              <input type="text" class="form-control" id="inputtext1" placeholder="">
            </div>
            <div class="col-4"></div>
          </div>
        </div>
        <!-- Confirme Password -->
        <div class="form-group">
          <label for="inputtext1" class="control-label">Confirme Password</label>
          <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
              <input type="text" class="form-control" id="inputtext1" placeholder="">
            </div>
            <div class="col-4"></div>
          </div>
        </div>
      </div>
    </form>
    <!-- Confirme change -->
    <div class="row text-center">
      <button type="button" class="btn btn-default">Sauvegarder</button>
      <button type="button" class="btn btn-default">Reset Passsword</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
  }
}
</script>
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
.panel-body{
  margin-top: 90px;
}
.row .main{
  padding: 0px;
  margin: 0px;
}
.fileUpload {
  position: relative;
  overflow: hidden;
  margin: 5px;
  text-decoration: underline;
}
.fileUpload input.upload {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
}
.verticle-content{
  display: block;
}
button{
  margin-bottom: 30px;
  margin-top: 40px;
  position: center;
}
</style>
