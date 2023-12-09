<template>
  <div class="wrep">
    <div class="container">
      <div class="top">
        <NuxtLink class="back" :to="`/${$route.params.lang}`">
          <i class="bx bx-chevron-left"></i>
          {{ $store.state.translations['cart.back'] }}
        </NuxtLink>
        <h4 class="title">{{ $store.state.translations['main.unique'] }}</h4>
      </div>
      <div class="mid">
        <p class="sup">{{ $store.state.translations['main.categories'] }}</p>
        <!-- <div ref="slider" class="swiper slider-1" v-if="categories.length > 0">
          <div class="swiper-wrapper">
            <div
              v-for="item in categories[3].children"
              :key="item.id"
              class="swiper-slide"
            >
              <NuxtLink :to="`/products/13?category=${item.id}`">
                <div class="img">
                  <img :src="item.image" alt="" class="pic" />
                </div>
                <p class="sub">{{ item.name }}</p>
              </NuxtLink>
            </div>
          </div>
          <div class="swiper-button-next next-1 next">
            <i class="bx bx-chevron-right"></i>
          </div>
        </div>
        <div v-else>pusto</div> -->
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import categoriesApi from '@/api/categories'

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'UniquePage',

  data() {},

  async asyncData({ $axios }) {
    const categories = await categoriesApi.getCategories($axios)
    return {
      categories,
    }
  },

  mounted() {
    new Swiper(this.$refs.slider, {
      slidesPerView: 1.5,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.next-1',
      },
      breakpoints: {
        1024: {
          slidesPerView: 5,
        },
      },
    })
    new Swiper(this.$refs.slider2, {
      slidesPerView: 1.5,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.next-2',
      },
      breakpoints: {
        1024: {
          slidesPerView: 5,
        },
      },
    })
  },

  methods: {},
}
</script>

<style scoped>
.wrep {
  padding-top: 180px;
  background: #f9f9f9;
}
.top {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
}
.title {
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: var(--green);
  margin: 0;
}
.sup {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 24px;
  color: var(--green);
}
.pic {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 18px;
}
.sub {
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: var(--green);
  text-decoration: underline;
}
.slider-1 {
  padding-bottom: 60px;
}
.slider-2 {
  padding-bottom: 80px;
}
.swiper {
  position: relative;
}
.swiper::after {
  content: '';
  background: linear-gradient(
    270deg,
    #f9f9f9 33.72%,
    rgba(249, 249, 249, 0) 100%
  );
  position: absolute;
  top: 0;
  right: 0;
  width: 128px;
  height: 100%;
  z-index: 9;
}
.next::after {
  display: none;
}
.next {
  background: transparent;
  border: 2px solid var(--green);
  color: var(--green);
  width: 100%;
  max-width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 40% !important;
}
.next i {
  font-size: 28px;
}
@media screen and (max-width: 1024px) {
  .wrep {
    padding-top: 100px;
  }
}
</style>
