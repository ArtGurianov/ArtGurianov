<template>
    <div class="wrapper" style="display: block; background-color: rgba(0,0,0,0.6);">
        <div class="countries"
             v-for="(each, i) in media.agencies"
             :style="{ 'background-image': 'url(../../../src/assets/agencies/' + media.agencies[i].image + ')' } "
             :key="i"
             @mouseover="mouseOver"
             @mouseleave="mouseLeave">
                <div :id="media.agencies[i].id" class="wrapper" v-show="target != media.agencies[i].id" style="display: flex; align-items: center; text-align: center; font-size: x-large; justify-content: center;">
                    {{media.agencies[i].title}}
                </div>
                <div :id="media.agencies[i].id" v-if="media.agencies[i].id!='others-select'" class="wrapper information" v-show="target == media.agencies[i].id">
                    City: {{media.agencies[i].city}} </br>
                    Agency: {{media.agencies[i].agency}} </br>
                    Website: {{media.agencies[i].website}} </br>
                    Booker: {{media.agencies[i].booker}} </br>
                    Email: {{media.agencies[i].email}} </br>
                </div>
                <div :id="media.agencies[i].id" v-if="media.agencies[i].id=='others-select'" class="wrapper information" v-show="target == media.agencies[i].id">
                    If you're an agency, </br> please contact me </br> through an email or </br> use the contact page </br> on this website! </br> Thank you.
                </div>
        </div>
        </div>
</template>

<script>
    import { Media } from '../../../store/media';

    export default {
        data() {
            return {
                media: Media,
                target: undefined
            }
        },
        methods: {
          mouseOver: function () {
            this.target = event.target.id;
          },
          mouseLeave: function () {
            this.target = undefined
          }
        }
    }
</script>

<style>

    @media only screen
    and (min-width : 768px) {
        .countries {
            margin: 10px;
            height: calc(50% - 20px);
            width: calc(33.333% - 20px);
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            color: white;
            float: left;
            border: 1px solid white;
            border-radius: 30px;
            background-size: 100% 100%;
            background-color: white;
            text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
            overflow: hidden
        }
        .information {
            background-color: firebrick;
            display: flex;
            align-items: center;
            text-align: center;
            font-size: 21px;
            justify-content: center;
        }
    }

    /* Smartphones (portrait and landscape) ----------- */
    @media only screen
    and (max-width : 768px) {
        .countries {
            margin: 5px;
            height: calc(33.333% - 10px);
            width: calc(50% - 10px);
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            color: white;
            display: flex;
            align-items: center;
            text-align: center;
            font-size: x-large;
            justify-content: center;
            float: left;
            cursor: pointer;
            border: 1px solid white;
            border-radius: 10px;
            background-size: 100% 100%;
            background-color: white;
            text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
            overflow: hidden
        }
        .information {
            background-color: firebrick;
            display: flex;
            align-items: center;
            text-align: center;
            font-size: 17px;
            justify-content: center;
        }
    }
    @media only screen
    and (max-width : 480px) {
        .information {
            background-color: firebrick;
            display: flex;
            align-items: center;
            text-align: center;
            font-size: 12px;
            justify-content: center;
        }
    }


</style>