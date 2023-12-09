<template>
  <div class="wrap">
    <div class="container">
      <div class="top">
        <NuxtLink :to="`/${$route.params.lang}`" class="back">
          <i class="bx bx-chevron-left"></i>
          {{ $store.state.translations['cart.back'] }}</NuxtLink
        >
        <h4 class="title">{{ product.product.category.name }}</h4>
      </div>
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <div class="left">
            <div class="swiper mySwiper2">
              <div class="swiper-wrapper">
                <div
                  v-for="image in product.images"
                  :key="image.id"
                  class="swiper-slide"
                >
                  <img :src="image.image" />
                </div>
              </div>
            </div>
            <div thumbsSlider="" class="swiper mySwiper">
              <div class="swiper-wrapper">
                <div
                  v-for="image in product.images"
                  :key="image.id"
                  class="swiper-slide"
                >
                  <img :src="image.image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xs-12">
          <div class="right">
            <h4 class="name">{{ product.product.name }}</h4>
            <div class="selects">
              <div
                v-for="item in product.atributs"
                :key="item.id"
                class="select"
              >
                <p class="sup">{{ item.name }}</p>

                <div class="initial" @click="dropHandle = !dropHandle">
                  <p>{{ product.atributs[0].options[0].name }}</p>
                  <i class="bx bx-chevron-down"></i>
                </div>

                <div class="options" :class="{ clicked: dropHandle }">
                  <NuxtLink
                    v-for="option in item.options.filter((el) => el.variant)"
                    :key="option.id"
                    :to="`/${$route.params.lang}/product/${option.variant}`"
                    class="variant"
                  >
                    {{ option.name }}
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="colors__wrap">
              <p class="sup">
                {{ $store.state.translations['product.color'] }}
              </p>
              <div class="colors">
                <NuxtLink
                  v-for="color in product.colors"
                  :key="color.id"
                  :to="`/${$route.params.lang}/product/${
                    product.product.slug + color.slug
                  }`"
                  :style="`background-color: ${color.hex}`"
                  class="color"
                ></NuxtLink>
              </div>
            </div>
            <div class="price">
              <p class="sup">
                {{ $store.state.translations['product.price'] }}
              </p>
              <p v-if="product.contract_price == false" class="agreement">
                {{ product.price }}
              </p>
              <p v-else class="agreement">
                {{ $store.state.translations['cart.contract'] }}
              </p>
            </div>
            <div class="bottom">
              <div class="counters">
                <button @click="decreaseItem" class="counter minus">
                  <i class="bx bx-minus"></i>
                </button>
                <p class="num">{{ inc }}</p>
                <button @click="increaseItem" class="counter plus">
                  <i class="bx bx-plus"></i>
                </button>
              </div>
              <button
                class="butn"
                @click="
                  $store.commit('addToCart', {
                    id: product.id,
                    count: inc,
                  })
                "
              >
                {{ $store.state.translations['product.add_cart'] }}
              </button>
            </div>
            <p class="info" v-html="product.product.description"></p>
          </div>
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
  name: 'ProductFace',

  props: ['product'],

  data() {
    return {
      inc: 1,
      dropHandle: false,
    }
  },

  watch: {
    $route() {
      this.dropHandle = false
    },
  },

  mounted() {
    var swiper = new Swiper('.mySwiper', {
      spaceBetween: 12,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        1024: {
          spaceBetween: 20,
        },
      },
    })
    var swiper2 = new Swiper('.mySwiper2', {
      spaceBetween: 10,
      thumbs: {
        swiper: swiper,
      },
    })
  },

  methods: {
    increaseItem() {
      this.inc++
    },
    decreaseItem() {
      if (this.inc > 0) {
        this.inc--
      }
    },
  },
}
</script>

<style scoped>
.left {
  max-width: 90%;
}
.mySwiper2 {
  margin-bottom: 20px;
  height: 530px !important;
}
.mySwiper {
  height: 120px !important;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.mySwiper2 img {
  border-radius: 12px;
}
.mySwiper img {
  border-radius: 8px;
}
.right {
  max-width: 80%;
}
.name {
  font-weight: 700;
  font-size: 32px;
  line-height: 51px;
  color: var(--green);
  margin-bottom: 32px;
}
.selects {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 32px;
}
.sup {
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: var(--green);
  margin-bottom: 16px;
}
.top {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 48px;
}
.title {
  margin: 0%;
  font-weight: 700;
  font-size: 24px;
  line-height: 38px;
  color: var(--green);
}
.colors {
  width: 100%;
  max-width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}
.color {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 10px 24px;
  border-radius: 8px;
  color: white;
  height: 40px;
}
.color:nth-child(1) {
  background: #f0f0f0;
  color: black;
}
.color:nth-child(2) {
  background: black;
}
.color:nth-child(3) {
  background: palevioletred;
}
.color:nth-child(4) {
  background: var(--green);
}
.color:nth-child(5) {
  background: burlywood;
}
.bottom {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 24px;
}
.price {
  margin-bottom: 64px;
}
.agreement {
  font-weight: 700;
  font-size: 24px;
  line-height: 110%;
  color: var(--green);
}
.counters {
  display: flex;
  align-items: center;
  gap: 20px;
}
.counter {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 24px;
}
.minus {
  background: var(--green);
  color: white;
  border: 2px solid transparent;
}
.plus {
  border: 2px solid var(--green);
  color: var(--green);
}
.num {
  font-weight: 600;
  font-size: 33.0756px;
  line-height: 42px;
  color: #4f4f4f;
}
.butn {
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  background: var(--green);
  padding: 10px 44px;
  border-radius: 12px;
  color: white;
  transition: 0.4s;
}
.butn:hover {
  background: var(--golden);
  color: black;
}
.info {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--green);
}
.variant {
  color: black;
  font-weight: 600;
}
@media screen and (max-width: 1024px) {
  .top {
    margin-bottom: 20px;
  }
  .row {
    flex-direction: column-reverse;
  }
  .right {
    max-width: 100%;
  }
  .name {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
  }
  .selects {
    max-width: 90%;
    display: flex;
    gap: 20px;
    align-items: flex-start;
    flex-direction: column;
  }
  .select {
    width: 100%;
    position: relative;
  }
  .options {
    position: absolute;
    top: 0;
    left: 0;
  }
  .counter {
    height: 30px;
    width: 30px;
  }
  .counters {
    gap: 12px;
  }
  .butn {
    font-weight: 700;
    font-size: 16.7717px;
    line-height: 36px;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  .info {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 20px;
  }
  .price {
    margin-bottom: 32px;
  }
  .left {
    max-width: 100%;
  }
  .mySwiper2 {
    height: 363px !important;
    border-radius: 8px;
    margin-bottom: 12px;
  }
  .mySwiper {
    height: 78px !important;
  }
  .mySwiper2 img {
    border-radius: 8px;
  }
  .mySwiper img {
    border-radius: 6px;
  }
}
</style>
