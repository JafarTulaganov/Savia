<template>
  <div class="wrep">
    <HomeAbout class="about" :info="info" />
    <AboutInfo />
    <HomeShowroom :info="info" class="showroom" />
  </div>
</template>

<script>
import HomeAbout from '@/components/HomePage/HomeAbout.vue'
import AboutInfo from '@/components/AboutPage/AboutInfo.vue'
import HomeShowroom from '@/components/HomePage/HomeShowroom.vue'

import infoApi from '@/api/info.js'

export default {
  name: 'AboutPage',

  components: {
    HomeAbout,
    HomeShowroom,
    AboutInfo,
  },

  async asyncData({ $axios }) {
    const info = await infoApi.getInfo($axios)

    return {
      info,
    }
  },

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrep {
  padding: 130px 0 60px 0;
  background: #f9f9f9;
}
.wrep .wrap {
  margin: 0 !important;
}
.about {
  padding: 60px 0 !important;
  background: white !important;
}
.showroom {
  padding-top: 32px;
}

@media screen and (max-width: 1024px) {
  .wrep {
    padding-top: 50px;
  }
}
</style>
