<template>
  <div id="app" class="container">
      <div v-if="$store.state.isAdmin == 1" id="admin-mode">
          <span>ADMINISTRATOR MODE</span>
      </div>
      <app-header></app-header>
      <app-nav></app-nav>
      <transition name="component-fade" mode="out-in">
          <div v-if="showContent" id="appContent">
              <transition name="component-fade" mode="out-in">
                <router-view :key="$route.path"></router-view>
              </transition>
          </div>
      </transition>
  </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Nav from './components/Nav.vue';
    import Menu from './components/pages/Menu.vue';


    export default {
        data: function() {
            return {
                showContent: false
            }
        },
        components: {
            appHeader: Header,
            appNav: Nav,
            appMenu: Menu
        },
        beforeCreate: function () {
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

<style>
    
    #admin-mode {
        position: absolute;
        width: 150px;
        height: 50px;
        top: 0;
        right: 0;
        background-color: green;
        text-align: center;
        color: white;
    }

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
            height: calc(100% - 80px - 17%);
        }
        #admin {
            height: calc(100% - 15%);
        }
    }
    @media only screen
    and (max-width : 768px) {
        #appContent {
            height: calc(100% - 80px - 10%);
        }
        #admin {
            height: calc(100% - 10%);
        }
    }



    .component-fade-enter-active {
        animation: fade-in 300ms ease-in-out;
    }
    .component-fade-enter {
        animation: fade-in 300ms ease-in-out;
    }
    .component-fade-leave-to {
        animation: fade-out 200ms ease-in-out;
    }
    .component-fade-leave-to {
        animation: fade-out 200ms ease-in-out;
    }


    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fade-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }



    .inner-select {
        display: flex;
        justify-content: center;
        position: relative;
        padding: 0;
        margin: 0;
        width: 100%;
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

    .wrapper {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
    }

    .inner-wrap {
        margin: 0;
        padding: 0;
        width: 100%;
    }

</style>
