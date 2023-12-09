<template>
  <div class="wrap">
    <div ref="swiper" class="swiper">
      <div class="swiper-wrapper">
        <div
          v-for="item in banners"
          :key="item.id"
          class="swiper-slide slide"
          :style="`background-color: ${item.color}`"
        >
          <div class="content">
            <div>
              <h2 class="title">
                {{ item.title }}
              </h2>

              <a
                v-show="item.unique == true"
                :href="`tel:${info.nbm}`"
                class="spanner"
              >
                {{ $store.state.translations['main.banner-2'] }}
              </a>

              <p class="sub" v-html="item.description"></p>
            </div>

            <a :href="`${item.link}`" target="_blank" class="butn">
              {{ $store.state.translations['main.banner-more'] }}
            </a>

            <div
              class="gradient"
              :style="`background: linear-gradient(to left, rgba(0, 0, 0, 0), ${item.color})`"
            ></div>
          </div>
          <img loading="lazy" :src="item.image" alt="" class="pic" />
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

  props: ['banners', 'info'],

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
.slide {
  height: 370px;
  border-radius: 12px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 6fr 4fr;
  gap: 40px;
}
.pic {
  width: 100%;
  height: 370px;
  object-fit: cover;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  color: white;
  position: relative;
}
.title {
  font-weight: 700;
  font-size: 40px;
  line-height: 44px;
  margin-bottom: 24px;
  max-width: 90%;
}
.sub {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}
.butn {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: white;
  padding: 6px 24px;
  border: 1px solid white;
  border-radius: 50px;
  display: inline-block;
  width: 100%;
  max-width: 200px;
  text-align: center;
  transition: 0.4s;
}
.butn:hover {
  color: black;
  background: white;
  text-decoration: none;
}
.wrap {
  padding: 140px 0 60px 0;
}
.gradient {
  position: absolute;
  top: 0;
  right: -230px;
  width: 200px;
  height: 100%;
}
.initial__slide {
  background: var(--green);
}
.initial__gradient {
  background: linear-gradient(to left, rgba(0, 0, 0, 0), var(--green));
}
.spanner {
  font-weight: 800;
  font-size: 18.5819px;
  line-height: 28px;
  color: var(--green);
  background: white;
  background: #ffffff;
  border: 1.16137px solid #ffffff;
  border-radius: 61.5525px;
  padding: 8px 28px;
  margin-bottom: 12px;
  display: inline-flex;
}
.spanner:hover {
  text-decoration: none;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 120px 16px 40px 16px;
  }
  .slide {
    height: 100%;
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .sub {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    max-width: 100%;
    margin-bottom: 24px;
  }
  .butn {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
  .gradient {
    display: none;
  }
  .pic {
    height: 190px;
  }
  .content {
    padding: 24px;
  }
  .spanner {
    display: block;
    padding: 4px 8px;
  }
}
</style>
