<template>
    <div id="snapshots-wrapper">

        <div id="snapshots-header">
            <div id="buttons-wrap">
                <div id="photo-button" @click="toggleContent()" :class="{pressed : show=='photo'}">
                    <span class="glyphicons glyphicons-camera"></span>
                </div>
                <div id="video-button" @click="toggleContent()" :class="{pressed : show=='video'}">
                    <span class="glyphicons glyphicons-facetime-video"></span>
                </div>
            </div>
            <h2>Updated: 05.11.2017</h2>
        </div>
        <div id="photo-container" v-show="show=='photo'">
            <img v-for="snap in snapshots" :src="'http://localhost:3000/images/snapshots/' + snap.filename" class="snapshot" :id="snap.filename"></img>
        </div>
        <div id="video-container" v-show="show=='video'">
            <div class='embed-container'>
                <iframe :src="'http://player.vimeo.com/video/'+snapvideo[0].filename" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
            </div>
            <div class='embed-container'>
                <iframe :src="'http://player.vimeo.com/video/'+snapvideo[1].filename" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
            </div>
        </div>

    </div>
</template>

<script>

  export default {
    data() {
      return {
        show: 'photo',
        snapshots: this.$store.state.db_snapshots,
        snapvideo: this.$store.state.db_snapvideo
      }
    },
    methods: {
        toggleContent() {
          event.target.id == 'photo-button' ? this.show = 'photo' : this.show = 'video';
          console.log(this.show);
        }
    },
    mounted: function () {
      console.log(this.$store.state.db_snapvideo);
    }
  }

</script>

<style>

    #snapshots-wrapper {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        background-color: rgba(0,0,0,0.3);
    }
    #snapshots-header {
        display: flex;
        height: 10%;
        min-height: 30px;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    #snapshots-header h2 {
        color: white;
        padding: 10px;
        margin: 0;
    }
    #buttons-wrap {
        width: auto;
        height: 100%;
    }
    #photo-container {
        width: 100%;
        height: 90%;
        overflow: hidden;
        overflow-x: scroll;
        display: flex;
        flex-wrap: nowrap;
    }
    #video-container {
        width: 100%;
        height: 90%;
    }
    .embed-container {
        display: flex;
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
        max-width: 100%;
        justify-content: center;
        align-items: center;
    }
    .embed-container iframe,
    .embed-container object,
    .embed-container embed {
        width: 95%;
        height: 95%;
    }
    .snapshot {
        height: 100%;
        width: auto;
        margin-right: 5px;
        flex: 0 0 auto;
    }
    #photo-button {
        height: 95%;
        width: 48px;
        background-color: rgba(255,255,255,0.8);
        background-image: url('/src/assets/glyphicons-12-camera.png');
        background-size: 60% 50%;
        background-repeat: no-repeat;
        background-position: center;
        float: left;
        border: 2px solid black;
        border-radius: 10%;
    }
    #video-button {
        height: 95%;
        width: 48px;
        background-color: rgba(255,255,255,0.8);
        background-image: url('/src/assets/glyphicons-181-facetime-video.png');
        background-size: 60% 50%;
        background-repeat: no-repeat;
        background-position: center;
        float: left;
        border: 2px solid black;
        border-radius: 10%;
    }
    .pressed {
        height: 100% !important;
        width: 50px !important;
        background-color: rgba(255,255,255,1) !important;
    }

    /* MOBILE */
    @media only screen
    and (max-width : 768px) {
        #snapshots-header h2 {
            font-size: 25px;
        }
        #video-container div {
            width: 100%;
            height: 50%;
            float: left;
            border: 1px solid black;
        }
    }
    /* DESKTOP */
    @media only screen
    and (min-width : 768px) {
        #snapshots-header h2 {
            font-size: 30px;
        }
        #video-container div {
            width: 50%;
            height: 100%;
            float: left;
            border: 1px solid black;
        }
    }

</style>