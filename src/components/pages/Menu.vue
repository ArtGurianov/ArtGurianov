<template>
    <div class="wrapper">
        <div class="inner-wrap" :style="{height: wrapperHeight + '%'}">
            <div style="height: 100%">
                <router-link tag="div"
                             v-for="(each, i) in categories[component].elements"
                             :key="i"
                             :id="categories[each].id"
                             class="inner-select"
                             :style="{height: eachHeight + '%'}"
                             @click.native="$store.commit('levelUp', each);"
                             :to="'/' + each">
                    <p>{{ categories[each].title }}</p>
                </router-link>
            </div>
        </div>
    </div>

</template>

<script>
  import { Categories } from '../../store/categories';

  export default {
    data: function() {
      return {
        categories: Categories,
        component: undefined,
        wrapperHeight: undefined,
        eachHeight: undefined
      }
    },
    created: function () {
      this.component = this.$route.path.slice(1);
      this.wrapperHeight = this.categories[this.component].elements.length * 25;
      this.eachHeight = 100 / this.categories[this.component].elements.length;
    }
  }
</script>

<style>



</style>