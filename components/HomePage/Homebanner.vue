<template>
  <div class="wrap">
    <div ref="swiper" class="swiper">
      <div class="swiper-wrapper">
        <div v-for="item in banners" :key="item.id" class="swiper-slide">
          <div class="content">
            <h2 class="title">
              {{ item.title }}
            </h2>
            <p class="sub" v-html="item.description"></p>

            <NuxtLink class="butn">{{ item.link }}</NuxtLink>
          </div>
          <img :src="item.image" alt="" class="pic" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'HomeHero',

  props: ['banners'],

  data() {
    return {}
  },

  mounted() {
    let slider = new Swiper(this.$refs.swiper, {
      centeredSlides: true,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        1024: {
          slidesPerView: 1.2,
          spaceBetween: 30,
        },
      },
    })
  },

  methods: {},
}
</script>

<style scoped>
.pic {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  max-width: 40%;
  height: 100%;
  object-fit: cover;
}
.wrap {
  padding: 60px 0;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 120px 16px 40px 16px;
  }
}
</style>
