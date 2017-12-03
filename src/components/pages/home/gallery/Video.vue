<template>
    <div class="wrapper" style="background-color: rgba(0,0,0,0.6);">
        <div id="videos-container">
            <div id="vid-container">
                <div id="videos-wrapper">
                    <transition-group :name="transition" mode="out-in" tag="div">
                        <div v-for="(video, index) in videos" v-show="currentVideo == index" class="video-item" :key="index">
                                <div v-show="currentVideo == index" style="height: 100%; width: 100%; margin: 0; padding: 0; display: flex; justify-content: center; align-content: center; align-items: center;">
                                    <iframe :src="'http://player.vimeo.com/video/'+video[0]" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                                </div>
                        </div>
                    </transition-group>
                </div>
                <div id="descriptions-wrapper">
                    <transition-group :name="transition" mode="out-in" tag="div">
                        <div v-for="(video, index) in videos" v-show="currentVideo == index" class="description-item" :key="index">
                                <div v-show="currentVideo == index" style="color:white; height: 100%; width: 100%; margin: 0; padding: 0; display: flex; justify-content: center; align-content: center; align-items: center;">
                                    {{video[1]}}</div>
                        </div>
                    </transition-group>
                </div>
            </div>
        </div>
        <div @click.prevent="prev" class="nav-btn" id="prev">
            <img src="../../../../assets/prev.png">
        </div>
        <div @click.prevent="next" class="nav-btn" id="next">
            <img src="../../../../assets/next.png">
        </div>
    </div>
</template>

<script>
  import { Media } from '../../../../store/media';

  export default {
    data() {
      return {
        videos: Media.video,
        currentVideo: 0,
        transition: null //forward //backward
      }
    },
    methods: {
      prev: function () {
        if (this.currentVideo != 0) {
          this.currentVideo -= 1;

        } else {
          this.currentVideo = this.videos.length - 1;
        }
        this.transition = 'backward';
      },
      next: function () {
        if (this.currentVideo != this.videos.length - 1) {
          this.currentVideo += 1;
        } else {
          this.currentVideo = 0;
        }
        this.transition = 'forward';
      }
    }
  }

</script>

<style>
    #videos-wrapper {
        margin: 0;
        padding: 0;
        height: 85%;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
    }
    #descriptions-wrapper {
        margin: 0;
        padding: 0;
        height: 15%;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
    }
    .video-item {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: inline-block;
        margin: 0;
        padding: 0;
        height: 85%;
        width: 100%;


    }
    .description-item {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: inline-block;
        margin: 0;
        padding: 0;
        height: 15%;
        width: 100%;
    }
    .nav-btn {
        position: absolute;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        cursor: pointer;
    }
    .nav-btn img {
        opacity: 0.6;
    }
    .nav-btn img:hover {
        opacity: 1;
    }
    iframe,
    object,
    embed {
        width: 95%;
        height: 95%;
    }



    /* DESKTOP */
    @media only screen
    and (min-width : 768px) {
        #vid-container {
            margin: 0;
            padding: 0;
            position: absolute;
            height: 100%;
            width: 80%;
            top: 0;
            left: 10%;
            height: 100%;
        }
        #prev {
            height: 100%;
            width: 10%;
            left: 0;
        }
        #next {
            height: 100%;
            width: 10%;
            right: 0;
        }
        .nav-btn img {
            width: 90%;
            object-fit: contain;
        }
    }

    /* MOBILE */
    @media only screen
    and (max-width : 768px) {
        #vid-container {
            margin: 0;
            padding: 0;
            position: absolute;
            height: 85%;
            width: 100%;
            top: 0;
            left: 0;
        }
        #prev {
            height: 15%;
            width: 50%;
            left: 0;
            bottom: 0;
        }
        #next {
            height: 15%;
            width: 50%;
            right: 0;
            bottom: 0;
        }
        .nav-btn img {
            height: 90%;
            object-fit: contain;
        }
    }



    .forward-enter-to {
        animation: slideRightIn .5s;

    }
    /*.forward-leave-to {
        animation: slideRightOut .5s;

    }*/
    @keyframes slideRightIn {
        from { transform: translateX(-100%); }
        to { transform: translateX(0); }
    }
    @keyframes slideRightOut {
        from { transform: translateX(0); }
        to { transform: translateX(100%); }
    }

    .backward-enter-to {
        animation: slideLeftIn .5s;

    }
    /*.backward-leave-to {
        animation: slideLeftOut .5s;

    }*/
    @keyframes slideLeftIn {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
    @keyframes slideLeftOut {
        from { transform: translateX(0); }
        to { transform: translateX(-100%); }
    }
</style>