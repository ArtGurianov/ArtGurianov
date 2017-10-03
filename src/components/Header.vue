f<template>
    <transition name="intro">
        <div v-if="showHeader" id="header">
            <p>ArtGurianov.com</p>
        </div>
    </transition>
</template>

<script>
    export default {
        data(){
            return {
                showHeader: false
            }
        },
        mounted: function () {
            this.showHeader = true;
        }
    }
</script>

<style lang="scss" scoped>

    #header {
        display: flex;
        margin: auto;
        position: relative;
        top: 0;
        transform: translateY(0);
        text-align: center;
    }
    p {
        color: white;
        margin: auto;
    }



    .intro-enter-active {
        animation: slide-in 3000ms cubic-bezier(1, 0, .5, 1);
    }



    /* Smartphones (portrait and landscape) ----------- */
    @media only screen
    and (max-width : 768px) {
        #header {
            font-size: 30px;
            height: 10%;
        }
        @keyframes slide-in {
            from {
                top: 50%;
                font-size: 40px;
                transform: translateY(-50%);
            }
            to {
                top: 0;
                font-size: 30px;
                transform: translateY(0);
            }
        }
    }



    /* iPads (portrait and landscape) ----------- */
    @media only screen
    and (min-width : 768px) {
        #header {
            height: 15%;
            font-size: 60px;
        }
        @keyframes slide-in {
            from {
                top: 50%;
                font-size: 100px;
                transform: translateY(-50%);
            }
            to {
                top: 0;
                font-size: 60px;
                transform: translateY(0);
            }
        }
    }



</style>