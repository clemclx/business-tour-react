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

    Vue.component('singleCase', {
        data: function () {
            return {
                name: 'test',
                price: '20000$',
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
        template: '<div class="dices">' +
            '<img src="../../static/die-1.svg" alt="Smiley face" height="42" width="42" class="de1">' +
            '<img src="../../static/die-1.svg" alt="Smiley face" height="42" width="42" class="de2">' +
            '<button class="btn btn-light">Lancer le dé</button>' +
            '</div>'
    });
    export default {}
</script>

<style scoped>
    .table {
        background-color: rebeccapurple;
        width: 1000px;
        height: 1000px;
        margin-left: auto;
        margin-right: auto;
    }

    .board {
        background-image: url("../../static/bg-board.jpg");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: darken;
        position: relative;
        width: 1000px;
        height: 1000px;
    }

    .single-case {
        border: 1px solid grey;
        background-color: white;
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

    .single-case {
        width: 100px;
        height: 150px;
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
    }
    .dices >>> .btn {
        display: block;
        margin-top: 15px;
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
