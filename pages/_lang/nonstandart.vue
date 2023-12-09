<template>
  <div class="wrep">
    <div class="container-big container">
      <div class="top">
        <NuxtLink class="back" :to="`/${$route.params.lang}`">
          <i class="bx bx-chevron-left"></i>
          {{ $store.state.translations['cart.back'] }}
        </NuxtLink>
        <h4 class="title">
          {{ $store.state.translations['main.nonstandart'] }}
        </h4>
      </div>
      <div class="body">
        <div class="img">
          <img src="@/assets/img/nonstandart.jpg" alt="" class="pic" />
        </div>
        <p class="text">
          {{ $store.state.translations['main.nonstandart-txt'] }}
        </p>
        <div class="items">
          <div class="item">
            <div class="logo">
              <img src="@/assets/img/logo/shift-1.svg" alt="" class="" />
            </div>
            <p class="txt">{{ $store.state.translations['about.non-1'] }}</p>
          </div>
          <div class="item">
            <div class="logo">
              <img src="@/assets/img/logo/shift-2.svg" alt="" class="" />
            </div>
            <p class="txt">{{ $store.state.translations['about.non-2'] }}</p>
          </div>
          <div class="item">
            <div class="logo">
              <img src="@/assets/img/logo/shift-3.svg" alt="" class="" />
            </div>
            <p class="txt">{{ $store.state.translations['about.non-3'] }}</p>
          </div>
          <div class="item">
            <div class="logo">
              <img src="@/assets/img/logo/shift-4.svg" alt="" class="" />
            </div>
            <p class="txt">{{ $store.state.translations['about.non-4'] }}</p>
          </div>
          <div class="item">
            <div class="logo">
              <img src="@/assets/img/logo/shift-5.svg" alt="" class="" />
            </div>
            <p class="txt">{{ $store.state.translations['about.non-5'] }}</p>
          </div>
          <div class="item">
            <div class="logo">
              <img src="@/assets/img/logo/shift-6.svg" alt="" class="" />
            </div>
            <p class="txt">{{ $store.state.translations['about.non-6'] }}</p>
          </div>
        </div>
      </div>
    </div>
    <AboutInfo />
    <HomeForm :info="info" />
  </div>
</template>

<script>
import AboutInfo from '@/components/AboutPage/AboutInfo.vue'

import infoApi from '@/api/info'

export default {
  name: 'Nonstandart',

  components: {
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
  padding-top: 120px;
  background: white;
}
.top {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
}
.title {
  margin: 0;
}

.title {
  font-weight: 700;
  font-size: 24px;
  line-height: 38px;
  color: var(--green);
}
.pic {
  width: 100%;
  height: 337px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 24px;
}
.text {
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 72px;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 44px 90px;
  max-width: 70%;
  margin: 0 auto;
}
.body {
  padding-bottom: 32px;
}
.item {
  display: flex;
  align-items: center;
  gap: 14px;
}
.txt {
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: var(--green);
}
.logo {
  mix-blend-mode: multiply;
}
.logo img {
  max-width: 38px;
  height: 38px;
  object-fit: contain;
}
@media screen and (max-width: 1024px) {
  .wrep {
    padding-top: 120px;
  }
  .title {
    font-weight: 700;
    font-size: 19.2615px;
    line-height: 31px;
  }
  .pic {
    height: 72px;
    border-radius: 4px;
  }
  .text {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 40px;
  }
  .items {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }
}
</style>
