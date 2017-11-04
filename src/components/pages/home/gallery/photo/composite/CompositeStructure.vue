<template>
    <div class="wrapper" style="overflow: hidden; display: block;">
        
        
        <div id="card-wrapper">

            <div id="composite-card">

                <app-composite-content :compositePictures="compositePictures" :chosenPhotos="chosenPhotos"></app-composite-content>

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
                        <button v-show="chosenPhotos.length == 0" @click="submit(chosenPhotos)" class="btn btn-success" :disabled="chosenPhotos.length != 0">PRINT</button>
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





</style>