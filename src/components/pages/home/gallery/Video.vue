<template>
    <div class="wrapper" style="background-color: rgba(0,0,0,0.3);">
        <div v-for="video in videos" class=""></div>
    </div>
</template>

<script>
  import { Media } from '../../../../store/media';

  export default {
    data() {
      return {
        videos: Media.video
      }
    }
  }

</script>

<style>

</style>