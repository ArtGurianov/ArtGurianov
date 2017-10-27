<template>
    <transition name="nav-fadein">
        <div v-if="showNav" id="nav">
            <ul class="progressbar">
                    <li v-for="elem in $route.path.split('/').slice(1)"
                        :id="elem + '-nav'"
                        :style="{ width: singleWidth + '%' }"
                        @click="$router.push($route.path.split(elem)[0]+elem)">  {{ categories[elem].title }}
                    </li>
            </ul>
        </div>
    </transition>
</template>

<script>
    import { Categories } from '../store/categories';

    export default {
        data(){
            return {
                categories: Categories,
                showNav: false
            }
        },
        mounted: function () {
            var reference = this;
            setTimeout(function () {
                reference.showNav = true;
            }, 3000);
        },
        computed: {
            singleWidth: function () {
                return 100/(this.$route.path.split('/').length - 1);
            }
        }
    }
</script>

<style scoped>

    #nav {
        position: relative;
        display:table;
        height: 70px;
        width: 100%;
        padding: 0;
        margin: 0;
        margin-left: -15px;
    }
    .progressbar {
        counter-reset: step;

    }

    .progressbar li {
        list-style-type: none;
        float: left;
        position: relative;
        text-align: center;
        color: white;
    }
    .progressbar li:before {
        content: counter(step);
        counter-increment: step;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border: 2px solid white;
        display: block;
        text-align: center;
        margin: 5px auto 5px auto;
        border-radius: 50%;
        cursor: pointer;
    }
    .progressbar li:after {
        content: '';
        position: absolute;
        width: calc(100% - 30px);
        margin-left: 15px;
        height: 2px;
        background-color: white;
        top: 20px;
        left: -50%;
        z-index: 1;
    }
    .progressbar li:first-child:after {
        display: none;
    }
    /*.progressbar li.active {
        color:green;
    }
    .progressbar li.active:before {
        border-color:green;
    }
    .progressbar li.active + li:after {
        background-color: green;
    }*/



    .nav-fadein-enter-active {
        animation: fade-in 500ms ease-in-out;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

</style>