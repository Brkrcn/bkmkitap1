<template>
    <div>
        <!-- Start Navbar Area -->
        <div :class="['navbar-area', {'is-sticky': isSticky}]">
            <div class="comero-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <nuxt-link class="navbar-brand" to="/">
                            <img style="width: 8.5rem;" src="../assets/img/logo.png" alt="logo">
                        </nuxt-link>

                        <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

                        <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
                            <ul class="navbar-nav">
                 

                                <li class="nav-item p-relative"><a href="#" class="nav-link">Menu </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><nuxt-link to="/products" class="nav-link">Tüm Ürünler</nuxt-link></li>

                                        <li class="nav-item"><nuxt-link to="/products-details/1" class="nav-link">Gece Yarısı Kütüphanesi</nuxt-link></li>
                                        <li class="nav-item"><nuxt-link to="/products-details/2" class="nav-link">Ateşpare 2 Özel Baskı</nuxt-link></li>
                                        <li class="nav-item"><nuxt-link to="/products-details/3" class="nav-link">Romeo ve Juliet</nuxt-link></li>
                                        <li class="nav-item"><nuxt-link to="/products-details/4" class="nav-link">Bilinçaltının Gücü</nuxt-link></li>
                                        <li class="nav-item"><nuxt-link to="/products-details/5" class="nav-link">İyileşmek</nuxt-link></li>
                                        <li class="nav-item"><nuxt-link to="/products-details/6" class="nav-link">Senden Bir Tane Daha Yok</nuxt-link></li>
                                    </ul>
                                </li>

                        

                         

                       

                                
                            </ul>
                            <div class="col-lg-6">
                                <form class="newsletter-form">
                                    <input type="email" placeholder="Aradığınız ürünün adını yazınız." id="email" autocomplete="off" value="" class="form-control">
                                   
                                </form>
                            </div>

                            <div class="others-option">
                                <div class="option-item">
                                    
                                    <nuxt-link v-if="loggedIn==false" to="/signup">Üye Ol</nuxt-link>
                                </div>
                                <div class="option-item">
                                    <div @click="logout" v-if="loggedIn" class="logout-link">
                                        <nuxt-link  to="/">Çıkış Yap</nuxt-link>
                                    </div>
                                    <nuxt-link v-else to="/login">Giriş Yap</nuxt-link>
                                    
                                </div>
                                <div class="option-item">
                                    <a @click.prevent="toggle" href="#">
                                        Sepet({{cart.length}}) <i class="fas fa-shopping-bag"></i>
                                    </a>
                                </div>
                            </div>
                        </b-collapse>
                    </nav>
                </div>
            </div>
        </div>
        <!-- End Navbar Area -->

        <SidebarPanel></SidebarPanel>
    </div>
</template>

<script>
import SidebarPanel from '../layouts/SidebarPanel';
import { mutations } from '../utils/sidebar-util';

import Cookies from 'js-cookie'
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
    components: {
        SidebarPanel
    },
    data(){
        return {
            isSticky: false,
            loggedIn: false
        }
    },
    mounted(){
        const that = this;
        this.setupFirebase()
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY;
            if(scrollPos >= 100){
                that.isSticky = true;
            } else {
                that.isSticky = false;
            }
        })
    },
    computed: {
        cart(){
            return this.$store.getters.cart
        }
    },
    asyncData() {},
    methods: {
        toggle() {
            mutations.toggleNav()
        },
        setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log('signed in')
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(token => Cookies.set('access_token', token))
          this.loggedIn = true
        } else {
          Cookies.remove('access_token')
          // if (Cookies.set('access_token', 'blah')) {
          // }
          // No user is signed in.
          this.loggedIn = false
          console.log('signed out', this.loggedIn)
        }
      })
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: 'login' })
        })
    }
    }
}
</script>