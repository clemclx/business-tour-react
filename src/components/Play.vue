<template>
  <div class="table">
    <div>
      <img src="../assets/img/die-1.svg" alt="Smiley face" height="42" width="42" class="de1"><img src="../assets/img/die-1.svg" alt="Smiley face" height="42" width="42" class="de2">
      <button class="btn btn-light">Lancer le dé</button>
    </div>
  
    <div class="board">
      <div class="col left">
        <div class="corner"></div>
        <div class="spaceLeft"><singleCase></singleCase></div>
        <div class="spaceLeft"><singleCase></singleCase></div>
        <div class="spaceLeft"><singleCase></singleCase></div>
        <div class="spaceLeft"><singleCase></singleCase></div>
        <div class="spaceLeft"><singleCase></singleCase></div>
        <div class="spaceLeft"><singleCase></singleCase></div>
        <div class="spaceLeft"><singleCase></singleCase></div>
        <div class="corner"></div>
      </div>
      <div class="fix">
        <div class="row top">
          <div class="spaceTop"><singleCase></singleCase></div>
          <div class="spaceTop"><singleCase></singleCase></div>
          <div class="spaceTop"><singleCase></singleCase></div>
          <div class="spaceTop"><singleCase></singleCase></div>
          <div class="spaceTop"><singleCase></singleCase></div>
          <div class="spaceTop"><singleCase></singleCase></div>
          <div class="spaceTop"><singleCase></singleCase></div>
        </div>
        <div class="row bottom">
          <div class="spaceBottom"><singleCase></singleCase></div>
          <div class="spaceBottom"><singleCase></singleCase></div>
          <div class="spaceBottom"><singleCase></singleCase></div>
          <div class="spaceBottom"><singleCase></singleCase></div>
          <div class="spaceBottom"><singleCase></singleCase></div>
          <div class="spaceBottom"><singleCase></singleCase></div>
          <div class="spaceBottom"><singleCase></singleCase></div>
        </div>
      </div>
      <div class="col right">
        <div class="corner"></div>
          <div class="spaceRight"><singleCase></singleCase></div>
          <div class="spaceRight"><singleCase></singleCase></div>
          <div class="spaceRight"><singleCase></singleCase></div>
          <div class="spaceRight"><singleCase></singleCase></div>
          <div class="spaceRight"><singleCase></singleCase></div>
          <div class="spaceRight"><singleCase></singleCase></div>
          <div class="spaceRight"><singleCase></singleCase></div>
          <div class="corner"><div class="titleStart">Départ</div></div>
        </div>
      </div>
    </div>
</template>

<script>
import Vue from 'vue';
Vue.component('singleCase',{
  data: function(){
    return {
      name: 'test',
      price: '20000$',
    }
  },
  template: '<div><div class="title">{{name}}</div><div class="price">{{price}}</div></div>'
})
export default{

}
</script>
<style scoped>
body {
  background-color: black;
  font-family: 'Josefin Sans';
  font-weight: 200;
  font-size: 9px;
  text-align: center;
}
.de1{
  z-index: 1;
  transform: translateX(-50%) translateY(-50%);
  position: absolute;
  top: 48%;
  left: 47%;
}
.de2{
  z-index: 1;
  transform: translateX(-50%) translateY(-50%);
  position: absolute;
  top: 48%;
  left: 51%;
}
button{
  z-index: 1;
  transform: translateX(-50%) translateY(-50%);
  position: absolute;
  top: 55%;
  left: 49%;
}
div {
  color: black;
  margin:0;
  padding:0;
}
.board {
  background-color: lightblue;
  width: 962px;
  min-height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 18%;
  margin-top: 60px;
  z-index: 1;
  margin-bottom: 60px;
}
.spaceRight{
  position: relative; left: 20px; top: -20px; bottom: 60px;
  height: 138px;
  width: 98px;
  border: 1px solid black;
  background-color: #e5f9e0;
  transform: rotate(-90deg)
}
.spaceLeft{
  position: relative; left: 20px; top: -20px;; bottom: 60px;
  height: 138px;
  width: 98px;
  border: 1px solid black;
  background-color: #e5f9e0;
  transform: rotate(90deg)
}
.spaceTop{
  position: relative;
  width:98px;
  height: 128px;
  border: 1px solid black;
  background-color: #e5f9e0;
  transform: rotate(180deg)
}
.spaceBottom{
  position: relative;
  width:98px;
  height: 128px;
  border: 1px solid black;
  background-color: #e5f9e0;
}
.corner {
  height: 128px;
  width: 138px;
  border: 1px solid black;
  background-color: #e5f9e0;
}
.row {
  display: flex;
  flex-direction: row;
  height: 80px;
}
.fix {
  display: flex;
  flex-direction: column;
}
.space2 {
  position: relative;
  width:98px;
  height: 128px;
  border: 1px solid black;
  background-color: #e5f9e0;
}
.bottom {
  margin-top: 733px;
}
.left .space .color {
  width: 25%;
  height: 100%;
  margin-left: auto;
}
.right .space .color {
  width: 25%;
  height: 100%;
  margin-right: auto;
}
.top .space2 .color {
  width: 100%;
  height: 25%;
  margin-top: 95px;
}
.bottom .space2 .color {
  width: 100%;
  height: 25%;
}
.group {position:relative;}
.price {
  font-size: 0.85em;
  margin-top: 75%;
}
.clock {
  width: 0px;
  right: 20px;
  top: 20px;
  position: absolute;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
}
</style>
