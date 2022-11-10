<template>
    <div>
      <input type="text" @keyup.enter="inputUrl">
    </div>
</template>

<script>
import axios from 'axios'

const YOUTUBE_API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search'


export default {
    name: 'TheSearchBar',
    methods: {
        async inputUrl(event) {
            const keyword = event.target.value

            // 영상을 받아올 주소? 형태가 포스트 맨에서 200 response 받아올때  'https://www.googleapis.com/youtube/v3/search'
            const config = {
                params: {
                    part: 'snippet',
                    type: 'video',
                    q: keyword,
                    key: YOUTUBE_API_KEY,
                    maxResults: 10,
                },
            }
            const response = await axios.get(YOUTUBE_API_URL, config)
            const videoList = response.data.items
            this.$emit('input-url', videoList)
            // console.log('sent!')
        },
    },
}


</script>

<style>

</style>