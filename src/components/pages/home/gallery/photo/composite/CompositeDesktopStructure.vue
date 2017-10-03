<template>
    <div class="wrapper" style="overflow: hidden; display: block">
            <div id="compositeWrapperDesktop">
                <div id="compositeDesktopHeader"><h2 style="text-align: center; color: white; font-family: SansSerif">Fill out the Composite Card</h2></div>
                <div id="compositeDesktop">

                    <app-composite-content :compositePictures="compositePictures" :chosenPhotos="chosenPhotos"></app-composite-content>

                </div>
                <div id="compositeDesktopFooter">
                    <button @click="clearImages" class="btn btn-danger">CLEAR</button>
                    <button @click="submit(chosenPhotos)" class="btn btn-success" :disabled="chosenPhotos.length != 0">PRINT</button>
                    <button @click="changeImages" class="btn btn-primary">CHANGE</button>
                </div>
            </div>
            <div id="chosenPicturesWrapperDesktop">
                <div id="chosenPicturesContainerDesktop">
                    <img v-for="img in chosenPhotos"
                         :src="'/src/assets/book/' + img"
                         :id="img"
                         @click="placeImage">
                </div>
            </div>
    </div>
</template>

<script>
    import CompositeContent from './CompositeContent.vue';
    import GeneratePdf from '../../../../../../../src/services/GeneratePdf';
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
                this.$store.state.chosenPhotos.splice(0,5);
                this.redirectToBookPage();
            },
            redirectToBookPage() {
                this.$store.state.levels = 4;
                this.$store.state.clickedEl = 'book';
                this.$store.state.chainEl = ['home', 'gallery', 'photo', 'book'];
                this.$router.push('book');
            },
            submit(pictures) {
                GeneratePdf.sendPictures(pictures);
            }

        }

    }
</script>

<style>
    #compositeWrapperDesktop {
        display: flex;
        position: absolute;
        left: 0;
        margin: 0;
        padding: 0;
        width: 50%;
        height: 100%;
    }

    #compositeDesktopHeader {
        position: absolute;
        width: 100%;
        height: 15%;
        top: 0;
        background-color: rgba(0,0,0,0.5);
    }
    #compositeDesktop {
        position: relative;
        width: 100%;
        padding-top: 70.7%;
        margin: auto;
        background-color: white;
    }
    #compositeDesktopFooter{
        position: absolute;
        display: flex;
        width: 100%;
        height: 15%;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
    }
    #compositeDesktopFooter button {
        height: 50%;
        width: 20%;
        margin: auto;
    }
    #chosenPicturesWrapperDesktop {
        display: flex;
        position: absolute;
        left:50%;
        margin: 0;
        padding: 0;
        width: 50%;
        height: 100%;
        overflow: hidden;
        overflow-x: scroll;
    }
    #chosenPicturesContainerDesktop {
        display: flex;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        padding-right: 10px;
    }
    #chosenPicturesContainerDesktop img {
        height: calc(100% - 20px);
        margin: 10px;
        margin-right: 0;
    }
</style>
