<template>
    <div class="wrapper">
        <div :class="[{ 'agencyMobile': $store.state.mobileVersion }, 'agencyDesktop']"
             v-for="(each, i) in ['Russia', 'France', 'Italy', 'Japan', 'Korea', 'Others']"
             :style="{ 'background-image': 'url(../../../src/assets/agencies/' + categories.agencies.content[each].title + '-flag.png)' } "
             :key="i"> {{categories.agencies.content[each].title}}</div>
        </div>
</template>

<script>
    import { Categories } from '../../../store/categories';

    export default {
        data() {
            return {
                categories: Categories
            }
        }
    }
</script>

<style>
    .agencyDesktop {
        margin: 10px;
        height: calc(50% - 20px);
        width: calc(33.333% - 20px);
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
        border-radius: 30px;
        background-size: 100% 100%;
        background-color: white;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
    .agencyMobile {
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
    }
</style>