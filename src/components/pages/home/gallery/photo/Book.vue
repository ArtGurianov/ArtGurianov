<template>
    <div class="wrapper" style="overflow: hidden; display: block">
        <div id="thumbnailsGrid" class="col-xs-3 col-sm-7">
            <div class="container" id="gridWrapper">
                <div v-if="$store.state.isAdmin==1"
                     class="thumbnail col-xs-12 col-sm-3"
                     :style="{'background-image': 'url(http://www.clker.com/cliparts/A/P/L/b/V/G/blue-plus-sign-md.png)'} "
                    >
                </div>
                <div v-for="pic in allPhotos"
                     class="thumbnail col-xs-12 col-sm-3"
                     :id="pic" :style="{ 'background-image': 'url(http://localhost:3000/images/' + pic + ')' } "
                     @click="openPic">
                    <input :id="pic" :disabled="$store.state.chosenPhotos.length >= 5" type="checkbox" :value="pic" v-model="$store.state.chosenPhotos">
                </div>
            </div>
        </div>

        <div id="bigPic" class="content col-xs-9 col-sm-5" :style="{ 'background-image': 'url(http://localhost:3000/images/' + openedPic + ')' } ">
        </div>

        <div id="compositeBar" class="col-xs-9 col-sm-5">
            <div class="container-fluid" style="display:flex; height: 60%; width: 90%; margin: auto; padding: 0;">
                <button class="btn btn-info"  @click="uncheckAll" :disabled="$store.state.chosenPhotos.length == 0">CLEAR</button>
                <p style="font-size: large; color: white">{{ $store.state.chosenPhotos.length + '/5' }}</p>
                <button class="btn btn-info" @click="redirectToCompositePage" :disabled="$store.state.chosenPhotos.length < 5">PRINT</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { Media } from '../../../../../store/media';

    export default {
        data() {
            return {
                openedPic: 'one.jpg',
                allPhotos: Media.book,
                choosePhotos: 5
            }
        },
        methods: {
            openPic() {
                    this.openedPic = event.target.id;
            },
            uncheckAll() {
                this.$store.state.chosenPhotos = [];
            },
            redirectToCompositePage() {
                this.$store.state.levels = 4;
                this.$store.state.clickedEl = 'composite';
                this.$store.state.chainEl = ['home', 'gallery', 'photo', 'composite'];
                this.$router.push('composite');
            }
        }
    }
</script>

<style>
    #thumbnailsGrid {
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    #bigPic {
        height: 90%;
        margin: 0;
        padding: 0;
        background-color: rgba(0, 0, 0, 0.7);
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: center;
    }
    #compositeBar {
        display: flex;
        height: 10%;
        margin: 0;
        padding: 0;
        background-color: rgba(0,0,0,0.7);
        align-items: center;
    }
    #compositeBar button, p {
        display:flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 3px;
        float:left;
        right: 0px;
        width: 33.33%;
    }

    .thumbnail {
        margin: 0;
        padding: 0;
        height: 30%;
        display: flex;
        float: left;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.7);
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: center;
        border: none;
        border-radius: 0px;
    }
    #gridWrapper {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }


</style>