<template>
    <div class="wrapper" style="background-color: rgba(0,0,0,0.6); display: inline-block;">
        <app-carousel>
            <app-carousel-slide v-for="(video, index) in videos" :index="index">
                <div class="content-wrap">
                    <div class="iframe-wrap">
                        <div class="iframe-resize">
                            <iframe :src="'http://player.vimeo.com/video/'+video[0]" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>
                    </div>
                    <div class="description-wrap">
                        {{video[1]}}
                    </div>
                </div>
            </app-carousel-slide>
        </app-carousel>
    </div>
</template>

<script>
  import { Media } from '../../../../store/media';
  import Carousel from '../../../carousel/Carousel.vue';
  import CarouselSlide from '../../../carousel/CarouselSlide.vue'

  export default {
    data() {
      return {
        videos: Media.video
      }
    },
    components: {
      appCarousel: Carousel,
      appCarouselSlide: CarouselSlide
    }
  }

</script>

<style>

    /* MOBILE */
    @media only screen
    and (max-width : 768px) {
        .content-wrap {
            position: absolute;
            width: 100%;
            height: 85%;
            top: 0;
            bottom: 15%;
        }
        .iframe-wrap {
            position: absolute;
            top: 0;
            width: 100%;
            height: 85%;
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
        }

        .description-wrap {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 15%;
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
            color: white;
        }
        iframe,
        object,
        embed {
            width: 100%;
            height: 100%;
        }
    }

    /* DESKTOP */
    @media only screen
    and (min-width : 768px) {
        .content-wrap {
            position: absolute;
            width: 100%;
            height: 85%;
            top: 0;
            bottom: 15%;
        }
        .iframe-wrap {
            position: absolute;
            top: 0;
            width: 100%;
            height: 85%;
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
        }
        .description-wrap {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 15%;
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
            color: white;
        }
        iframe,
        object,
        embed {
            height: 100%;
            width: 100%;
        }
    }

    .iframe-resize{
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }
</style>