<template>
    <div class="wrapper">


            <router-link
                    tag="div"
                    v-for="(each, i) in ['gallery', 'agencies', 'contact', 'web']"
                    :key="i"
                    :id="categories[each].id"
                    class="inner-select"
                    @click.native="$store.commit('levelUp', each);"
                    :to="'/' + each">
                        <p>{{ categories[each].title }}</p>
            </router-link>


    </div>

</template>

<script>
    import Carousel from '../../components/carousel/Carousel.vue';
    import CarouselSlide from '../../components/carousel/CarouselSlide.vue';
    import { Categories } from '../../store/categories';

    export default {
        data: function() {
            return {
                slides: 4,
                categories: Categories
            }
        },
        components: {
            Carousel,
            CarouselSlide
        }
    }
</script>

<style>



</style>