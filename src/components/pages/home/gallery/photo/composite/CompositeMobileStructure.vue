<template>
    <div class="wrapper" style="overflow: hidden; display: block">
        <div v-if="$store.state.chosenPhotos.length == 5">
            <div id="compositeWrapperMobile">
                <div id="compositeMobile">
                    <app-composite-content :compositePictures="compositePictures" :chosenPhotos="chosenPhotos"></app-composite-content>
                </div>
            </div>

            <div id="chosenPicturesWrapperMobile">
                <div id="chosenPicturesContainerMobile">
                    <img v-for="img in chosenPhotos"
                         :src="'http://localhost:3000/images/' + img"
                         :id="img"
                         @click="placeImage">
                    <button v-if="chosenPhotos.length == 0" @click="clearImages" class="btn btn-danger">CLEAR</button>
                    <button v-if="chosenPhotos.length == 0" @click="submit(chosenPhotos)" class="btn btn-success" :disabled="chosenPhotos.length != 0">PRINT</button>
                    <button v-if="chosenPhotos.length == 0" @click="changeImages" class="btn btn-primary">CHANGE</button>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import CompositeContent from './CompositeContent.vue';
    export default {
        data() {
            return {
                compositePictures: [],
                chosenPhotos: this.$store.state.chosenPhotos.slice()
            }
        },
        components: {
            appCompositeContent: CompositeContent
        },
        methods:{
            placeImage() {
                var emptypng = this.compositePictures.indexOf(undefined);
                if (emptypng != -1) {
                    this.compositePictures.splice(emptypng, 1, event.target.id);
                    this.chosenPhotos.splice(this.chosenPhotos.indexOf(event.target.id), 1);
                } else {
                    if (this.compositePictures.length < 5) {
                        this.compositePictures.push(event.target.id);
                        this.chosenPhotos.splice(this.chosenPhotos.indexOf(event.target.id), 1);

                    }
                }
            },
            clearImages() {
                this.compositePictures = [];
                this.chosenPhotos = this.$store.state.chosenPhotos.slice();
            },
            changeImages() {
                this.compositePictures = [];
                this.$store.state.chosenPhotos = [];
                this.redirectToBookPage();
            }
        }
    }
</script>

<style>
    #compositeWrapperMobile {
        display: flex;
        position: absolute;
        left: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }
    #compositeMobile {
        position: relative;
        width: 100%;
        max-width: 75vh; /* НЕПОНЯТНО ПОЧЕМУ. НАШЕЛ ПОДБОРОМ*/
        height: 70.7vw;
        max-height: 80%;
        margin: auto;
        margin-top: 0;
        background-color: white;
    }

    #chosenPicturesWrapperMobile {
        display: flex;
        position: absolute;
        margin: 0;
        padding: 0;
        height: calc(100% - 70.7vw);
        min-height: 20%;
        width: 100%;
        bottom: 0;
        overflow: hidden;
        overflow-x: scroll;
    }
    #chosenPicturesContainerMobile {
        display: flex;
        height: auto;
        width: 100%;
        max-width: 75vh;
        background-color: rgba(0,0,0,0.5);
        margin-left: auto;
        margin-right: auto;
    }
    #chosenPicturesContainerMobile img {
        height: 100%;
        margin: auto;
        margin-left: 0;
        margin-right: 0;
        object-fit: contain;
    }
    #chosenPicturesContainerMobile button {
        margin: auto;
    }
</style>