<template>
    <h1>HELLO ADMIN</h1>
</template>

<script>

 import { store } from '../../store/store';

 export default {
   data() {
     return {

     }
   },
   beforeRouteEnter(to, from, next) {
     store.state.isAdmin == 1 ? next() : next('/auth');
   }
 }
</script>

<style>

</style>