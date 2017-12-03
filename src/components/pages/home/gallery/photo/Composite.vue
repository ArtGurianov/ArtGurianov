<template>
    <div class="wrapper" style="display: block">
        <div class="wrapper" v-if="$store.state.chosenPhotos.length == 5">

                <app-composite-page></app-composite-page>

    </div>



    <div id="defaultCompositePage" class="wrapper" v-if="$store.state.chosenPhotos.length < 5">
        <br>
        <p>If you need my composite card, please <br>
        <span @click="downloadDefaultComposite">DOWNLOAD DEFAULT VERSION</span><br>
        Or<br>
        <span @click="$router.push('book');" >MAKE YOUR OWN</span></p>
    </div>
</div>

</template>

<script>
import CompositePage from './composite/CompositePage.vue';

export default {
    components: {
        appCompositePage: CompositePage
    },
    methods: {
        downloadDefaultComposite() {

        }
    }
}
</script>

<style>
#defaultCompositePage {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}

/*DESKTOP*/
@media only screen
and (min-width : 540px) {
    #defaultCompositePage p {
        display: inline-block;
        font-size: 2.5vw;
        font-family: SansSerif;
        color: white;
        text-align: center;

    }
    #defaultCompositePage span {
        font-size: 3vw;
        font-family: "PT Serif";
        color: darkred;
        cursor: pointer;
    }
}

/*MOBILE*/
@media only screen
and (max-width : 540px) {
    #defaultCompositePage p {
        display: inline-block;
        font-size: 6vw;
        font-family: SansSerif;
        color: white;
        text-align: center;

    }
    #defaultCompositePage span {
        font-size: 6vw;
        font-family: "PT Serif";
        color: darkred;
        cursor: pointer;
    }
}


</style>

