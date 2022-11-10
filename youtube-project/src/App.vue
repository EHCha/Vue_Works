<template>
  <div id="app">
    <header>
    <h1>My First Youtube Project</h1>
    <TheSearchBar @input-url="inputUrl"/>
    </header>
    <br>
    <section>
    <VideoDetail :video="video"
    />
    <VideoList
    :videoList="videoList"
    @on-select-video="onSelectVideo"
    />
    </section>
  </div>
</template>

<script>
import TheSearchBar from '@/components/TheSearchBar'
import VideoList from '@/components/VideoList'
import VideoDetail from '@/components/VideoDetail'

export default {
  name: 'App',
  components: {
    TheSearchBar,
    VideoList,
    VideoDetail,
  },
  data() {
    return {
      videoList: [],
      video: null,
    }
  },
  methods: {
    inputUrl(videoList) {
      this.videoList = videoList
      // console.log(videoList)
    },
    onSelectVideo(video) {
      console.log(video)
      this.video = video
    },
  },
}
</script>

<style>
section, header {
  width: 80%;
  margin: 0 auto;
  padding: 1rem 0;
}
section {
  display: flex;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
