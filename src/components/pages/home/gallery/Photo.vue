<template>
    <div class="wrapper">
        <router-link tag="div" v-for="(each, i) in ['book', 'composite', 'snapshots']" :key="i"
                     :id="categories[each].id"
                     class="inner-select"
                     @click.native="$store.commit('levelUp', each);"
                     :to="'/'+each"><p>{{categories[each].title}}</p></router-link>
    </div>
</template>

<script>
    import { Categories } from '../../../../store/categories';

    export default {
        data() {
            return {
                categories: Categories

            }
        },
        computed: {

        }
    }
</script>

<style>

</style>