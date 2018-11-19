<template>
    <div class="wrapper">
        <!--modal signup success-->
        <transition name="fade">
            <div v-if="isSign" class="popup-signup-success" id="successfulSignup">
                <div class="mask" style="z-index: 500"></div>
                <div class="card-signup">
                    <h5 class="card-header">Enregistrement effectué</h5>
                    <div class="card-body">
                        <p class="card-text">Votre enregistrement s'est bien déroulé, merci !</p>
                        <p class="card-text">Pour accéder à votre profil, veuillez vous connecter.</p>
                        <router-link to="/login" tag="button" class="btn btn-primary">Connexion</router-link>
                    </div>
                </div>
            </div>
        </transition>
        <!--end modal signup success-->
        <form @submit="signup" class="form-signin" id="signup-form">
            <h2 class="form-signin-heading">Inscription</h2>
            <input type="text" class="form-control" name="fullName" placeholder="Nom" required="" autofocus="" v-model="fullName"/>
            <input type="text" class="form-control" name="emailAddress" placeholder="Adresse email" required="" autofocus="" v-model="emailAddress"/>
            <input type="password" class="form-control" name="password" placeholder="Mot de passe" required="" v-model="password"/>
            <button class="btn btn-lg btn-primary btn-block btn-signup" type="submit">S'inscrire</button>
        </form>
    </div>
</template>

<script>
    import JQuery from 'jquery'
    let $ = JQuery

    export default {
        data() {
            return {
                fullName: '',
                emailAddress: '',
                password: '',
                isSign: false
            }
        },
        methods: {
            signup(e) {
                e.preventDefault();
                fetch('http://localhost:1337/api/v1/entrance/signup', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({emailAddress: this.emailAddress, password: this.password, fullName: this.fullName})
                }).then((response) => {
                    this.isSign = true;
                }).catch((e) => {
                    console.log(e)
                })
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

    input {
        margin-bottom: 10px;
    }

    .form-signin {
        margin-left: auto;
        margin-right: auto;
        margin-top: 5%;
        max-width: 420px;
        padding: 15px 35px 45px;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.1);
        z-index: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .mask {
        background: rgba(0,0,0,0.7);
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .card-signup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 501;
        background-color: white;
        border-radius: .25rem;
    }
</style>
