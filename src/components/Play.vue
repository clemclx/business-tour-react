<template>
    <div class="table">
        <turnSection></turnSection>          
        <div class="board">
            <pion></pion>
            <dices></dices>
            <startCase></startCase>
            <div class="col-left">
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <ileCase></ileCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
            </div>
            <malusCase></malusCase>
            <div class="row-top">
                <singleCase></singleCase>
                <singleCase></singleCase>
                <chanceCase></chanceCase>
                <impotCase></impotCase>
                <singleCase></singleCase>
                <ileCase></ileCase>
                <singleCase></singleCase>
            </div>
            <prisonCase></prisonCase>
            <div class="row-bottom">
                <singleCase></singleCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <ileCase></ileCase>
                <impotCase></impotCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
            </div>
            <bonusCase></bonusCase>
            <div class="col-right">
                <singleCase></singleCase>
                <singleCase></singleCase>
                <chanceCase></chanceCase>
                <singleCase></singleCase>
                <singleCase></singleCase>
                <ileCase></ileCase>
                <singleCase></singleCase>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    const value = 5;
    Vue.component('turnSection', {
        data: function (){
            return{
                turn: this.$store.getters.turnOrder,
            }
        },
        template: '<div class="turnSection">Ordre de jeu :<br><div v-for="t in turn">{{t.pseudo}}</div></div>'
    }),
    Vue.component('chanceCase', {
        data: function (){
            return{
                name: 'Chance',
            }
        },
        template: '<div class="chanceCase"><div class="title"><img src="../../static/chance.png"></div></div>'
    }),
    Vue.component('impotCase', {
        data: function (){
            return{
                name: 'Impot',
            }
        },
        template: '<div class="impotCase"><div class="title"><img src="../../static/impot.png"></div></div>'
    }),
    Vue.component('BonusCase', {
        data: function (){
            return{
                name: 'B',
            }
        },
        template: '<div class="bonusCase"><div class="title"><p>{{name}}</p></div></div>'
    }),
    Vue.component('ileCase', {
        data: function (){
            return{
                name: 'PF',
            }
        },
        template: '<div class="ileCase"><div class="title"><img src="../../static/ile.png"></div></div>'
    }),
    Vue.component('MalusCase', {
        data: function (){
            return{
                name: 'M',
            }
        },
        template: '<div class="malusCase"><div class="title"><p>{{name}}</p></div></div>'
    }),
    Vue.component('startCase', {
        data: function (){
            return{
                name: 'Départ',
            }
        },
        template: '<div class="startCase"><div class="title"><p>{{name}}</p></div></div>'
    }),
    Vue.component('prisonCase', {
        data: function (){
            return{
                name: 'O',
            }
        },
        template: '<div class="prisonCase"><div class="title"><p>{{name}}</p></div></div>'
    }),
    Vue.component('singleCase', {
        data: function () {
            return {
                name: 'test',
                price: '20K',
                gameId: this.$store.getters
            }
        },
        template: '<div class="single-case"><div class="title">{{name}}</div><div class="price">{{price}}</div></div>'
    });
    Vue.component('pion', {
        data: function (){
            return{
                position: 1
            }
        },
        methods: {
            changePos: function(newPos) {
                this.position = newPos;
            }
        },
        beforeMount () {
            let el = this;
            let io = this.$store.getters.io;

            io.socket.on('movePion', function(data) {
                console.log('MOVEPION', data);
                el.changePos(data.newPos)
            })
        },
        template: '<span class="cercle"></span>'
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
    .startCase {
        position: absolute;
        background-color: white;
        border: 1px solid grey;
        width: 150px;
        height: 150px;
        bottom: 0;
        right: 0;
    }
    .startCase >>> .title {
        padding-top: 5px;
        color: white;
        text-transform: uppercase;
        height: 100%;
        border-bottom: 1px solid grey;
        background-image: url("../../static/oilp.jpg");
    }
    .startCase >>> p{
        margin: 35% auto;
    }
    .impotCase {
        border: 1px solid grey;
        background-color: white;
        width: 100px;
        height: 150px;
        box-shadow: 0px -5px 7px -3px rgba(0,0,0,0.75);
    }
    .impotCase >>> .title {
        padding-top: 5px;
        color: white;
        text-transform: uppercase;
        height: 100%;
        border-bottom: 1px solid grey;
        background-image: url("../../static/oilp.jpg");
    }
    .impotCase >>> img{
        margin: 20% auto;
        width: 90px;
        height: 90px;
    }
    .malusCase {
        position: absolute;
        background-color: white;
        border: 1px solid grey;
        width: 150px;
        height: 150px;
        bottom: 0;
        left: 0;
    }
    .malusCase >>> .title {
        padding-top: 5px;
        color: white;
        text-transform: uppercase;
        height: 100%;
        border-bottom: 1px solid grey;
        background-image: url("../../static/oilp.jpg");
    }
    .malusCase >>> p{
        margin: 35% auto;
    }
    .ileCase {
        border: 1px solid grey;
        background-color: white;
        width: 100px;
        height: 150px;
        box-shadow: 0px -5px 7px -3px rgba(0,0,0,0.75);
    }
    .ileCase >>> .title {
        padding-top: 5px;
        color: white;
        text-transform: uppercase;
        height: 100%;
        border-bottom: 1px solid grey;
        background-image: url("../../static/eau.jpg");
    }
    .ileCase >>> img{
        width: 100px;
        height: 150px;
    }
    .chanceCase {
        border: 1px solid grey;
        background-color: white;
        width: 100px;
        height: 150px;
        box-shadow: 0px -5px 7px -3px rgba(0,0,0,0.75);
    }
    .chanceCase >>> .title {
        padding-top: 5px;
        color: white;
        text-transform: uppercase;
        height: 100%;
        border-bottom: 1px solid grey;
        background-image: url("../../static/oilp.jpg");
    }
    .chanceCase >>> img{
        margin: 20% auto;
        width: 90px;
        height: 90px;
    }
    .prisonCase {
        position: absolute;
        background-color: white;
        border: 1px solid grey;
        width: 150px;
        height: 150px;
        top: 0;
        left: 0;
    }
    .prisonCase >>> .title {
        padding-top: 5px;
        color: white;
        text-transform: uppercase;
        height: 100%;
        border-bottom: 1px solid grey;
        background-image: url("../../static/oilp.jpg");
    }
    .prisonCase >>> p{
        margin: 35% auto;
    }
    .bonusCase {
        position: absolute;
        background-color: white;
        border: 1px solid grey;
        width: 150px;
        height: 150px;
        top: 0;
        right: 0;
    }
    .bonusCase >>> .title {
        padding-top: 5px;
        color: white;
        text-transform: uppercase;
        height: 100%;
        border-bottom: 1px solid grey;
        background-image: url("../../static/oilp.jpg");
    }
    .bonusCase >>> p{
        margin: 35% auto;
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
    .cercle {
        z-index: 100;
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background: green;
        background-color: green;
        font-size: 60px;
        position: absolute;
        bottom: 0;
        right: 0;
    }
</style>
