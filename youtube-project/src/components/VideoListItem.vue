<template>
  <div>
    <div @click="onSelectVideo" class="video-list-item">
    <img :src="thumbNail" alt="#">
    <h3>{{ videoTitle | unescape }}</h3>
    <p>{{ videoDesc }}</p>
    <hr>
    </div> 
  </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'VideoListItem',
    props: {
        video: Object,
    },
    computed: {
        videoTitle() {
            return this.video.snippet.title
        },
        videoDesc() {
            return this.video.snippet.description
        },
        thumbNail() {
            return this.video.snippet.thumbnails.medium.url
        },
    },
    filters: {
        unescape(rawText) {
            return _.unescape(rawText)
      }
   },
   methods: {
      onSelectVideo() {
        this.$emit('on-select-video', this.video)
      },
    }
  }
</script>

<style>
.video-list-item:hover{
  cursor: pointer;
  background-color: #eee;
  /* width: 60%; */
}

</style>