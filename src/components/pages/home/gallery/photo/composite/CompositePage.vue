<template>
    <div class="wrapper" style="overflow: hidden; display: block;">
        
        
        <div id="card-wrapper">

            <div id="composite-card">

                <!--<app-composite-content :compositePictures="compositePictures" :chosenPhotos="chosenPhotos"></app-composite-content>-->
                <div id="contentWrapper">
                    <div id="mainCompositePictureContainer">
                        <div v-if="compositePictures[0] != undefined" id="mainCompositePicture"
                             :style="{ 'background-image': 'url(http://localhost:3000/images/' + compositePictures[0] + ')' } "
                             @click="removeImage">

                        </div>
                        <div v-else id="number1"
                             class="number"
                             :style="{'background-image': 'url(/src/assets/numbers/number1.png)'}"></div>
                    </div>

                    <div id="smallCompositePicturesContainer">

                        <div id="smallCompositePictures">

                            <div class="smallCompositePicWrapper" v-for="n in 4">
                                <div v-if="compositePictures[n] != undefined"
                                     class="smallCompositePicture"
                                     :id="'smallCompositePicture'+n"
                                     :style="{'background-image': 'url(http://localhost:3000/images/' + compositePictures[n] + ')' }"
                                     @click="removeImage">
                                </div>
                                <div v-else
                                     :id="'number'+(n+1)"
                                     class="number"
                                     :style="{'background-image': 'url(/src/assets/numbers/number'+(n+1)+'.png)'}"></div>
                            </div>

                        </div>

                    </div>
                    <div id="compositeFooter">
                        <p>information</p>
                    </div>
                </div>

            </div>

        </div>

        
        <div id="chosen-pictures-wrapper">

            <div id="chosen-pictures">

                <img v-for="img in chosenPhotos"
                     class="chosen-pic"
                     :src="'http://localhost:3000/images/' + img"
                     :id="img"
                     @click="placeImage">

                <ul v-if="chosenPhotos.length == 0">
                    <li>
                        <button v-show="chosenPhotos.length == 0" @click="clearImages" class="btn btn-danger">CLEAR</button>
                    </li>
                    <li>
                        <button v-show="chosenPhotos.length == 0" @click="generatePdf()" class="btn btn-success" :disabled="chosenPhotos.length != 0">PRINT</button>
                    </li>
                    <li>
                        <button v-show="chosenPhotos.length == 0" @click="changeImages" class="btn btn-primary">CHANGE</button>
                    </li>
                </ul>


            </div>

        </div>


    </div>
</template>

<script>
  import Api from "../../../../../../services/Api";

  export default {
    data() {
      return {
        compositePictures: [],
        chosenPhotos: this.$store.state.chosenPhotos.slice()
      }
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
      removeImage() {
        var id = event.target.id;
        var index;
        if (id == "mainCompositePicture") {
          index = 0;
        } else if (id == "smallCompositePicture1") {
          index = 1;
        } else if (id == "smallCompositePicture2") {
          index = 2;
        } else if (id == "smallCompositePicture3") {
          index = 3;
        } else if (id == "smallCompositePicture4") {
          index = 4;
        }
        var img = this.compositePictures[index];
        this.chosenPhotos.push(img);
        this.compositePictures.splice(index, 1, undefined);
      },
      clearImages() {
        this.compositePictures = [];
        this.chosenPhotos = this.$store.state.chosenPhotos.slice();
      },
      changeImages() {
        this.compositePictures = [];
        this.$store.state.chosenPhotos = [];
        this.$router.push('/book');
      },
      generatePdf() {
        var self = this;
        Api().post('generate_pdf', { pics: self.compositePictures });
        setTimeout(function() {
          window.open('http://localhost:3000/CustomComposite.pdf', '_blank');
        }, 500);
      }
    }
  }
</script>

<style>

    #card-wrapper {
        display: flex;
        padding: 0;
    }

    #chosen-pictures-wrapper {
        overflow: hidden;

    }

    #composite-card {

    }

    


    /* Desktop */
    @media only screen
    and (min-width : 768px) {
        #card-wrapper {
            position: absolute;
            height: 100%;
            margin: 0;
            width: 70%;
            top: 0;
            left: 0;
        }
        #chosen-pictures-wrapper {
            display: flex;
            position: absolute;
            height: auto;
            width: 30%;
            height: 100%;
            right: 0;
            top: 0;
            background-color: rgba(0,0,0,0.5);
            overflow: hidden;
            overflow-y: scroll;
        }
        #chosen-pictures {
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            align-items: center;

        }
        
        .chosen-pic {
            width: calc(100% - 20px);
            margin-top: 10px;
            margin-left: 10px;
            background-size: auto 100%;
            object-fit: contain;
        }

        #chosen-pictures ul {

            display: flex;
            height: 100%;
            flex-direction: column;
            list-style-type: none;
            margin: 0;
            padding: 0;
            align-items: center;
            justify-content: center;

        }
        #chosen-pictures li {
            margin-top: 20px;
            margin-bottom: 20px;
         }

        
    }

    /* Mobile */
    @media only screen
    and (max-width : 768px) {
        #card-wrapper {
            position: relative;
            margin: auto;
            width: 100%;
            top: 0;
            left: 0;
            max-width: 75vh; /* НЕПОНЯТНО ПОЧЕМУ. НАШЕЛ ПОДБОРОМ*/
            height: 70.7vw;
            max-height: 80%;
        }
        #chosen-pictures-wrapper {
            display: flex;
            position: relative;
            width: 100%;
            max-width: 75vh;
            height: calc(100% - 70.7vw);
            min-height: 20%;
            background-color: rgba(0,0,0,0.5);
            overflow: hidden;
            overflow-y: scroll;
            overflow-x: scroll;
            margin-right: auto;
            margin-left: auto;
        }
        #chosen-pictures {
            display: flex;
            margin-left: auto;
            margin-right: auto;
            height: 100%;
            align-items: center;

        }

        .chosen-pic {
            margin-left: 5px;
            margin-right: 5px;
            height: 100%;
            object-fit: contain;
            float: left;
        }
        #chosen-pictures ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        #chosen-pictures ul li {
            display: inline;
        }
    }



    /* COMPOSITE STYLES */

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
    .smallCompositePicture {
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

    .number {
        height: 50%;
        width: 50%;
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center;
    }




</style>