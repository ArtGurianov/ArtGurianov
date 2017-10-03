<template>
    <div id="contentWrapper">
        <div id="mainCompositePictureContainer">
            <div v-if="compositePictures[0] != undefined" id="mainCompositePicture"
                 :style="{ 'background-image': 'url(/src/assets/book/' + compositePictures[0] + ')' } "
                 @click="removeImage">

            </div>
            <div v-else id="numberOne"></div>
        </div>

        <div id="smallCompositePicturesContainer">

            <div id="smallCompositePictures">
                <div class="smallCompositePicWrapper">
                    <div v-if="compositePictures[1] != undefined" id="smallCompositePicture1"
                         :style="{ 'background-image': 'url(/src/assets/book/' + compositePictures[1] + ')' } "
                         @click="removeImage">
                    </div>
                    <div v-else id="numberTwo"></div>
                </div>
                <div class="smallCompositePicWrapper">
                    <div v-if="compositePictures[2] != undefined" id="smallCompositePicture2"
                         :style="{ 'background-image': 'url(/src/assets/book/' + compositePictures[2] + ')' } "
                         @click="removeImage">
                    </div>
                    <div v-else id="numberThree"></div>
                </div>
                <div class="smallCompositePicWrapper">
                    <div v-if="compositePictures[3] != undefined" id="smallCompositePicture3"
                         :style="{ 'background-image': 'url(/src/assets/book/' + compositePictures[3] + ')' } "
                         @click="removeImage">
                    </div>
                    <div v-else id="numberFour"></div>
                </div>
                <div class="smallCompositePicWrapper">
                    <div v-if="compositePictures[4] != undefined" id="smallCompositePicture4"
                         :style="{ 'background-image': 'url(/src/assets/book/' + compositePictures[4] + ')' } "
                         @click="removeImage">
                    </div>
                    <div v-else id="numberFive" ></div>
                </div>


            </div>


        </div>
        <div id="compositeFooter">
            <p>information</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                compositePictures: [],
                chosenPhotos: this.$store.state.chosenPhotos.slice()
            }
        },
        props: ['compositePictures', 'chosenPhotos']
        ,
        methods: {

            removeImage() {
                var id = event.target.id;
                var index;
                if (id == "mainCompositePicture" || id == "numberOne") {
                    index = 0;
                } else if (id == "smallCompositePicture1" || id == "numberTwo") {
                    index = 1;
                } else if (id == "smallCompositePicture2" || id == "numberThree") {
                    index = 2;
                } else if (id == "smallCompositePicture3" || id == "numberFour") {
                    index = 3;
                } else if (id == "smallCompositePicture4" || id == "numberFive") {
                    index = 4;
                } else {
                    alert("something went wrong!");
                }
                var img = this.compositePictures[index];
                this.chosenPhotos.push(img);
                this.compositePictures.splice(index, 1, undefined);
            }
        }
    }
</script>

<style>
    #contentWrapper {
        height: 100%;
        width: 100%;
        background-color: lightgray;
        position: absolute;
        top: 0; bottom: 0; left: 0; right: 0;
        font-size: 24px;
        text-align: center;
    }
    #mainCompositePictureContainer {
        height: calc(93% - 10px);
        width: calc(50% - 10px);
        margin: 5px;
        background-color: lightgray;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;

    }
    #smallCompositePicturesContainer {
        height: 93%;
        width: 50%;
        background-color: lightgray;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #compositeFooter {
        height: 7%;
        width: 90%;
        margin: 0 5% 0 5%;
        background-color: lightgray;
        float: left;
        align-content: center;
        text-align: left;
        justify-content: center;
        color: black;
        font-style: italic;
        font-size: 60%;
    }

    #mainCompositePicture {

        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;

    }
    #smallCompositePictures {
        height: 95%;
        width: 95%;
        background-color: lightgray;

    }
    .smallCompositePicWrapper {
        height: calc(50% - 2px);
        width: calc(50% - 2px);
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        margin: 1px;
    }
    #smallCompositePicture1 {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;

    }
    #smallCompositePicture2 {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;

    }
    #smallCompositePicture3 {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;

    }
    #smallCompositePicture4 {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;

    }

    #numberOne{
        height: 50%;
        width: 50%;
        background-image: url(/src/assets/numbers/numberOne.png);
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center;
    }
    #numberTwo{
        height: 50%;
        width: 50%;
        background-image: url(/src/assets/numbers/numberTwo.png);
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center;

    }
    #numberThree{
        height: 50%;
        width: 50%;
        background-image: url(/src/assets/numbers/numberThree.png);
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center;
    }
    #numberFour{
        height: 50%;
        width: 50%;
        background-image: url(/src/assets/numbers/numberFour.png);
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center;
    }
    #numberFive{
        height: 50%;
        width: 50%;
        background-image: url(/src/assets/numbers/numberFive.png);
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>
