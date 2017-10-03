<template>
    <div class="wrapper">
        <div class="wrapper" v-if="$store.state.chosenPhotos.length == 5">
            <!-- Desktop Version-->
                <app-composite-desktop-structure v-if="!this.$store.state.mobileVersion"></app-composite-desktop-structure>

            <!-- Mobile Version -->
                <app-composite-mobile-structure v-if="this.$store.state.mobileVersion"></app-composite-mobile-structure>

        </div>



        <div id="defaultCompositePage" class="wrapper" v-if="$store.state.chosenPhotos.length < 5">
            <br>
            <p>If you need my composite card, you can</p><br>
            <h2 @click="downloadDefaultComposite">DOWNLOAD DEFAULT VERSION</h2><br>
            <p>Or</p><br>
            <h2 @click="redirectToBookPage" >MAKE YOUR OWN</h2>
        </div>
    </div>

</template>

<script>
    import CompositeMobileStructure from './composite/CompositeMobileStructure.vue';
    import CompositeDesktopStructure from './composite/CompositeDesktopStructure.vue';

    export default {
        components: {
            appCompositeMobileStructure: CompositeMobileStructure,
            appCompositeDesktopStructure: CompositeDesktopStructure,
        },
        methods: {
            downloadDefaultComposite() {

            },
            redirectToBookPage() {
                this.$store.state.levels = 4;
                this.$store.state.clickedEl = 'book';
                this.$store.state.chainEl = ['home', 'gallery', 'photo', 'book'];
                this.$router.push('book');
            }
        }
    }
</script>

<style>
    #defaultCompositePage {
        display: block;
        text-align: center;
        vertical-align: middle;
    }
    #defaultCompositePage p {
        font-size: 2.5vw;
        font-family: SansSerif;
        color: white;

    }
    #defaultCompositePage h2 {
        font-size: 3vw;
        font-family: "PT Serif";
        color: aqua;
        opacity: 0.8;
        cursor: pointer;
    }
    #defaultCompositePage h2:hover {
        opacity: 1;
    }
</style>

