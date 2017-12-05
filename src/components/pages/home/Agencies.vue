<template>
    <div class="wrapper" style="display: block; background-color: rgba(0,0,0,0.6);">
        <div class="countries"
             v-for="(each, i) in media.agencies"
             :key="i"
             @click="showInfo"
             @mouseleave="hideInfo">
            <transition name="resizing-flag" mode="out-in">
                <div :id="media.agencies[i].id" class="wrapper miniature" v-show="target != media.agencies[i].id" style="display: flex; align-items: center; text-align: center; font-size: x-large; justify-content: center; background-size: cover; background-position: center;" :style="{ 'background-image': 'url(../../../src/assets/agencies/' + media.agencies[i].image + ')' } "><!--{{media.agencies[i].country}}-->
                    <transition name="opacity-ghost">
                        <div :id="media.agencies[i].id" class="wrapper information" v-show="target != media.agencies[i].id" style="width: 100%; height: 100%; background-color: firebrick; border-radius: 50%; opacity: 0; pointer-events:none;" v-if="media.agencies[i].id!='others-select'">
                            <p style="display: inline-block !important;">
                                City: {{media.agencies[i].city}} </br>
                                Agency: {{media.agencies[i].agency}} </br>
                                Website: <span @click="this.window.open('http://www.' + media.agencies[i].website)" class="links">{{media.agencies[i].website}}</span></br>
                                Booker: {{media.agencies[i].booker}} </br>
                                <span @click="this.window.open('mailto:'+ media.agencies[i].email +'?subject=Booking for Art G.')" class="links">{{media.agencies[i].email}}</span></p>
                        </div>
                    </transition>
                    <transition name="opacity-ghost">
                        <div :id="media.agencies[i].id" class="wrapper information" v-show="target != media.agencies[i].id" style="width: 100%; height: 100%; background-color: firebrick; border-radius: 50%; opacity: 0; pointer-events:none;" v-if="media.agencies[i].id=='others-select'">
                            <p style="display: inline-block !important;">If you're an agency, </br> please send me an <span @click="this.window.open('mailto:artgurianov@yandex.ru?subject=Redirected from ArtGurianov.com')" class="links">email</span> or </br> use the <span @click="$router.push('contact');" class="links">contact page</span> </br> on this website! </br> Thank you.</p>
                        </div>
                    </transition>
                </div>
            </transition>
            <transition name="resizing-info" mode="out-in">
                <div :id="media.agencies[i].id" v-if="media.agencies[i].id!='others-select'" class="wrapper information" v-show="target == media.agencies[i].id">
                    <p style="display: inline-block !important;">
                        City: {{media.agencies[i].city}} </br>
                        Agency: {{media.agencies[i].agency}} </br>
                        Website: <span @click="this.window.open('http://www.' + media.agencies[i].website)" class="links">{{media.agencies[i].website}}</span></br>
                        Booker: {{media.agencies[i].booker}} </br>
                        <span @click="this.window.open('mailto:'+ media.agencies[i].email +'?subject=Booking for Art G.')" class="links">{{media.agencies[i].email}}</span></p>
                </div>
            </transition>
            <transition name="resizing-info" mode="out-in">
                <div :id="media.agencies[i].id" v-if="media.agencies[i].id=='others-select'" class="wrapper information" v-show="target == media.agencies[i].id">
                    <p style="display: inline-block !important;">If you're an agency, </br> please send me an <span @click="this.window.open('mailto:artgurianov@yandex.ru?subject=Redirected from ArtGurianov.com')" class="links">email</span> or </br> use the <span @click="$router.push('contact');" class="links">contact page</span> </br> on this website! </br> Thank you.</p>
                </div>
            </transition>
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
          showInfo: function () {
            this.target = event.target.id;
          },
          hideInfo: function () {
            this.target = undefined
          }
        }
    }
</script>

<style>

    @media only screen
    and (min-width : 785px) {
        .countries {
            margin: 10px;
            height: calc(50% - 20px);
            width: calc(33.333% - 20px);
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            color: white;
            float: left;
            border-radius: 10px;
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
            white-space: nowrap;
            font-style: italic;
        }
        .miniature {
            height: 100%;
            width: 35vh;
            margin: 0 auto;
            border-radius: 50%;
            border: 2px solid white;
            cursor: pointer;
        }
        .links {
            text-decoration: underline;
            cursor: pointer;
        }
    }

    /* Smartphones (portrait and landscape) ----------- */
    @media only screen
    and (max-width : 785px) {
        .countries {
            margin: 5px;
            height: calc(33.333% - 10px);
            width: calc(50% - 10px);
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            color: white;
            float: left;
            cursor: pointer;
            border-radius: 10px;
            text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
            overflow: hidden
        }
        .information {
            background-color: firebrick;
            display: flex;
            align-items: center;
            text-align: center;
            font-size: 12px;
            justify-content: center;
        }
        .miniature {
            height: 100%;
            width: 25vh;
            margin: 0 auto;
            border-radius: 50%;
            border: 2px solid white;
        }
    }



    .resizing-flag-enter-active {
        animation: resizingFlagIn .5s;
    }
    .resizing-flag-leave-active {
        animation: resizingFlagOut .5s;
    }

    @keyframes resizingFlagIn {
        from { border-radius: 10px; border: none; width: 100%; background-color: firebrick; background-image: none; }
        to { border-radius: 50%; /*border: 1px solid white;*/ background-color: transparent; }
    }
    @keyframes resizingFlagOut {
        from { border-radius: 50%; /*border: 1px solid white;*/ background-color: transparent; }
        to { border-radius: 10px; border: none; width: 100%; background-color: firebrick; background-image: none; }
    }

    /*.resizing-info-enter-active {
        animation: resizingInfoIn .5s;
    }
    .resizing-info-leave-active {
        animation: resizingInfoOut .5s;
    }

    @keyframes resizingInfoIn {
        from { border-radius: 50%; border: 1px solid white; background-color: transparent; }
        to { border-radius: 10px; border: none; width: 100%; background-color: firebrick; background-image: none; }
    }
    @keyframes resizingInfoOut {
        from { border-radius: 10px; border: none; width: 100%; background-color: firebrick; background-image: none; }
        to { border-radius: 50%; border: 1px solid white; background-color: transparent; }
    }*/

    .opacity-ghost-enter-active {
        animation: opacityGhostIn .5s;
    }
    .opacity-ghost-leave-active {
        animation: opacityGhostOut .5s;
    }
    @keyframes opacityGhostIn {
        from { opacity: 1; border-radius: 10px;}
        to { opacity: 0; border-radius: 50%;}
    }
    @keyframes opacityGhostOut {
        from { opacity: 0; border-radius: 50%;}
        to { opacity: 1; border-radius: 10px;}
    }
</style>