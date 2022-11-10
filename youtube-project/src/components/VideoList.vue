<template>
  
  <div v-if="videoList.length">
    <H2>Playlist</H2>
    <VideoListItem 
    v-for="video in videoList" 
    :video="video" 
    :key="video.id.videoId"
    @on-select-video="onSelectVideo"
    />
    
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem'

export default {
    name: 'VideoList',
    components: {
        VideoListItem,
    },
    props: {
        videoList: Array,
    },
    methods: {
      onSelectVideo(video) {
        this.$emit('on-select-video', video)
      },
  },
   
}
</script>

<style>

</style>