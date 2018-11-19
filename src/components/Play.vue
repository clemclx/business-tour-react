<template>
<div class="table">
  <div class="board">
    <div class="col left">
      <div class="corner"></div>
      <div class="space"><div class="color group4"><div class="title2 clock"></div><div class="clock clockprice"></div></div></div>
      <div class="space"><div class="color group4"><div class="title2 clock"></div><div class="clock clockprice"></div></div></div>
      <div class="space"></div>
      <div class="space"><div class="color group4"><div class="title2 clock"></div><div class="clock clockprice"></div></div></div>
      <div class="space"><div class="color group3"><div class="title2 clock clockfix"></div><div class="clock clockprice"></div></div></div>
      <div class="space"><div class="color group3"><div class="title2 clock clockfix"></div><div class="clock clockprice"></div></div></div>
      <div class="space"><div class="color group3"><div class="title2 clock"></div><div class="clock clockprice"></div></div></div>
      <div class="corner"></div>
    </div>
    <div class="fix">
      <div class="row top">
        <div class="space2"><div class="title2 upside"></div><div class="upside upsideprice"></div><div class="color group5"></div></div>
        <div class="space2"></div>
        <div class="space2"><div class="title2 upside"></div><div class="upside upsideprice"></div><div class="color group5"></div></div>
        <div class="space2"><div class="title2 upside"></div><div class="upside upsideprice"></div><div class="color group5"></div></div>
        <div class="space2"><div class="title2 upside"></div><div class="upside upsideprice"></div><div class="color group6"></div></div>
        <div class="space2"><div class="title2 upside"></div><div class="upside upsideprice"></div><div class="color group6"></div></div>
        <div class="space2"><div class="title2 upside"></div><div class="upside upsideprice"></div><div class="color group6"></div></div>
      </div>
      <div class="row bottom">
        <div class="space2"><div class="title"></div><div class="price"></div></div>
        <div class="space2"><div class="title"></div><div class="price2"></div></div>
        <div class="space2"></div>
        <div class="space2"><div class="title"></div><div class="price2"></div></div>
        <div class="space2"><div class="title"></div><div class="price2"></div></div>
        <div class="space2"></div>
        <div class="space2"><div class="title"></div><div class="price"></div></div>
      </div>
    </div>
    <div class="col right">
      <div class="corner"></div>
        <div class="space"><div class="color group7"><div class="title2 counter"></div><div class="counter counterprice"></div></div></div>
        <div class="space"><div class="color group7"><div class="title2 counter"></div><div class="counter counterprice"></div></div></div>
        <div class="space"><div class="color group7"><div class="title2 counter"></div><div class="counter counterprice"></div></div></div>
        <div class="space"><div class="color group7"><div class="title2 counter"></div><div class="counter counterprice"></div></div></div>
        <div class="space"><div class="color group8"><div class="title2 counter" id="park"></div><div class="counter counterprice"></div></div></div>
        <div class="space"></div>
        <div class="space"><div class="color group8"><div class="title2 counter" id="boardwalk"></div><div class="counter counterprice"></div></div></div>
        <div class="corner"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  margin-top: 60px
}
.space {
  height: 98px;
  width: 138px;
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
.group3 {position:relative;}
.group4 {position:relative;}
.group5 {position:relative;}
.group6 {position:relative;}
.group7 {position:relative;}
.group8 {position:relative;}
.title {
  padding: 16PX 5PX;
}
.title2 {
  text-align: center;
}
.price {
  font-size: 0.85em;
  margin-top: 45px;
}
.price2 {
  font-size: 0.85em;
  margin-top: 61px;
}
.counter {
  width: 0px;
  left: 80px;
  top: 60px;
  position: absolute;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
}
.counterprice {
  font-size: 0.85em;
  left: 140px;
  top: 40px;
  width: 85px;
}
.clock {
  width: 0px;
  right: 80px;
  top: -5px;
  position: absolute;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
}
.clockfix {top:5px;}
.clockprice {
  font-size: 0.85em;
  left: -176px;
  top: 40px;
  width: 85px;
}
.upside {
  width:0;
  top: 60px;
  left: 84px;
  font-size:14px;
  position: absolute;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
}
.upsideprice {
  font-size: 0.85em;
  left: 10px;
  top: 10px;
  width: 55px;
}
#park {
  top: 50px;
}
#boardwalk {
  top:84px;
}
#titletext {
  width:200px;
  height:100px;
  font-size: 25px;
  top: -302px;
  left: -705px;
  font-size:104px;
  position: absolute;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3.5);
}
</style>
