<template>
  <div id="app" class="container">
      <app-header></app-header>
      <app-nav></app-nav>
      <transition name="content-fadein">
          <div v-if="showContent" id="appContent">
              <router-view></router-view>
          </div>
      </transition>
  </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Nav from './components/Nav.vue';
    import Home from './components/pages/Home.vue';
    import Gallery from './components/pages/home/Gallery.vue';
    import Agencies from './components/pages/home/Agencies.vue';
    import Contact from './components/pages/home/Contact.vue';
    import Web from './components/pages/home/Web.vue';


    export default {
        data: function() {
            return {
                showContent: false
            }
        },
        components: {
            appHeader: Header,
            appNav: Nav,
            appHome: Home,
            appGallery: Gallery,
            appAgencies: Agencies,
            appContact: Contact,
            appWeb: Web
        },
        beforeCreate() {
            this.$store.commit('setChainEl', this.$route.path.slice(1));
            this.$store.commit('setBrowserHeight', window.innerHeight);
            this.$store.commit('setBrowserWidth', window.innerWidth);
            if (window.innerWidth < 768) {
                this.$store.state.mobileVersion = true;
            }
        },
        mounted: function () {
            var reference = this;
            setTimeout(function () {
                reference.showContent = true;
            }, 3500);
        }
    }

</script>

<style lang="scss">

    #app {
        margin: 0;
        padding: 0;
        position: absolute;
        height: 100%;
        width: 100%;
        overflow-y: scroll;
    }

    #appContent {
        position: relative;
        width: 100%;
        max-width: 140.1vh;
        margin: auto;
        margin-top: 10px;
        overflow: hidden;
    }

    @media only screen
    and (min-width : 768px) {
        #appContent {
            height: calc(100% - 80px - 15%);
        }
    }
    @media only screen
    and (max-width : 768px) {
        #appContent {
            height: calc(100% - 80px - 10%);
        }
    }




    .content-fadein-enter-active {
        animation: fade-in 500ms ease-in-out;
    }



    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .inner-select {
        display: flex;
        justify-content: center;
        position: relative;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 25%;
        background-color: rgba(0, 0, 0, 0.5);
        overflow: hidden;
        border-bottom: 1px solid white;
        cursor: pointer;

    }
    .inner-select p {
        display: flex;
        align-items: center;
        position: relative;
        color: white;
        font-size: 5vw;
        text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    }

    /*.content {
        position: relative;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        color: white;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        float: left;
        border: 1px solid white;
        text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;

    }*/

    .wrapper {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
    }
    .inner-wrapper {
        display: block;
        margin: 0;
        padding: 0;
        height: 50%;
        width: 100%;
        background-color: yellow;
        margin-top: 20%;
        transform: translateY(-50%);
    }

</style>
