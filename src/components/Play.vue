<template>
    <div class="table">          
        <div class="board">
            <dices></dices>
            <corner-case id="1"></corner-case>
            <div class="col-left">
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
            </div>
            <corner-case id="2"></corner-case>
            <div class="row-top">
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
            </div>
            <corner-case id="3"></corner-case>
            <div class="row-bottom">
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
            </div>
            <corner-case id="4"></corner-case>
            <div class="col-right">
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    const value = 5;
    Vue.component('singleCase', {
        data: function () {
            return {
                name: 'test',
                price: '20K',
            }
        },
        template: '<div class="single-case"><div class="title">{{name}}</div><div class="price">{{price}}</div></div>'
    });
    Vue.component('cornerCase', {
        props: ['id'],
        methods: {
          classList: function() {
              return 'corner-' + this.id
          }
        },
        template: '<div class="corner-case" :class="classList()"><div class="title">nom ici {{id}}</div></div>',
    });
    Vue.component('dices', {
        methods: {
            classList: function(){
                return '<div class="dices">' + '<img src="../../static/dice' + this.value + '.svg" alt="Dice number: ' + this.value + '" height="42" width class="de1">' + '<img src="../../static/dice' + this.value + '.svg" alt="Dice number: ' + this.value + '" height="42" width class="de2">' + '</div>'
            }
        },
        template: '<div class="dices">' + '<img src="../../static/dice' + value + '.svg" alt="Dice number: ' + value + '" height="42" width class="de1">' + '<img src="../../static/dice' + value + '.svg" alt="Dice number: ' + value + '" height="42" width class="de2">' + '</div>'
    });
    export default {}
</script>

<style scoped>
    .table {
        background-image: url("../../static/bg-table.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-left: auto;
        margin-right: auto;
        position: absolute;
        margin-bottom: 0 !important;
    }

    .board {
        background-image: url("../../static/bg-board.jpg");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        width: 1000px;
        height: 1000px;
        box-shadow: 0 0 32px 2px rgba(0,0,0,0.71);
        margin: 50px auto;
    }

    .single-case {
        border: 1px solid grey;
        background-color: white;
        width: 100px;
        height: 150px;
        box-shadow: 0px -5px 7px -3px rgba(0,0,0,0.75);
    }
    .single-case >>> .title {
        padding-top: 5px;
        color: white;
        text-transform: uppercase;
        height: 75%;
        border-bottom: 1px solid grey;
        background-image: url("../../static/oilp.jpg");
    }
    .single-case >>> .price {
        font-weight: 700;
        font-size: 1.5em;
        color: black;
        background-image: url("../../static/beton.jpg");
    }
    .row-bottom, .row-top, .col-left, .col-right {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .row-top {
        position: absolute;
        top: 0;
        transform: rotate(180deg);
    }

    .row-bottom {
        position: absolute;
        bottom: 0;
    }

    .col-left {
        position: absolute;
        transform: rotate(90deg);
        right: calc(50% - 75px);
        top: 0;
        bottom: 0;
    }
    .col-right {
        position: absolute;
        transform: rotate(-90deg);
        left: calc(50% - 75px);
        top: 0;
        bottom: 0;
    }
    .corner-case {
        position: absolute;
        background-color: white;
        border: 1px solid grey;
        width: 150px;
        height: 150px;
    }
    .corner-1 {
        bottom: 0;
        right: 0;
    }
    .corner-2 {
        bottom: 0;
        left: 0;
    }
    .corner-3 {
        top: 0;
        left: 0;
    }
    .corner-4 {
        top: 0;
        right: 0;
    }
    .dices {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 20;
        background-color: rgba(0,0,0,0.8);
        padding: 15px;
        border-radius: 5px;
    }
    .dices >>> .btn {
        display: block;
        margin-top: 15px;
        margin-left: auto;
        margin-right: auto;
    }
    .dices >>> .de1 {
        margin-left: 5px;
        margin-right: 5px;
    }
    .dices >>> .de2 {
        margin-left: 5px;
        margin-right: 5px;
    }
</style>
