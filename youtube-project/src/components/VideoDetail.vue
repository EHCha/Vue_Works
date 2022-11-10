<template>
  <div class="video-detail" v-if="video">
    <div class="detail-container">
    <iframe width="640" height="360" :src="videoUrl" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
    name: 'VideoDetail',
    props: {
        video: Object,
    },
    computed: {
        videoUrl() {
            const videoId = this.video.id.videoId
            return `https://www.youtube.com/embed/${videoId}`
        },
    },
}
</script>

<style>
.video-detail{
    width: 70%;
    padding: 1rem;
}
.detail-container{
    position: relative;
    padding-top: 5%;

}

</style>