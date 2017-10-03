<template>
    <div class="wrapper">
        <div class="inner-wrap" :style="{height: categories[component].styles.wrapperHeight}">
            <div style="height: 100%">
                <router-link tag="div"
                             v-for="(each, i) in categories[component].styles.elements"
                             :key="i"
                             :id="categories[each].id"
                             class="inner-select"
                             :style="{height: categories[component].styles.eachHeight}"
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
        component: undefined
      }
    },
    created: function () {
      this.component = this.$route.path.slice(1);
    }
  }
</script>

<style>



</style>