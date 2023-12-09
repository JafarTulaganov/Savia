<template>
  <div>
    <HomeHero class="banner" :banners="banners" :info="info" />
    <HomeCategories :categories="categories" />
    <HomePopular :popular="popular" :categories="categories" />
    <HomeCalc />
    <HomeUnique />
    <HomeTypes :types="types" />
    <HomeAbout :info="info" />
    <HomeAdv />
    <HomeShift />
    <HomeBath />
    <HomeShowroom :info="info" />
    <HomeFaq :faq="faq" />
    <HomeForm :info="info" />
  </div>
</template>

<script>
/* eslint-disable */

import HomeHero from '@/components/HomePage/HomeHero.vue'
import HomeCategories from '@/components/HomePage/HomeCategories.vue'
import HomePopular from '@/components/HomePage/HomePopular.vue'
import HomeCalc from '@/components/HomePage/HomeCalc.vue'
import HomeAbout from '@/components/HomePage/HomeAbout.vue'
import HomeAdv from '@/components/HomePage/HomeAdv.vue'
import HomeShift from '@/components/HomePage/HomeShift.vue'
import HomeBath from '@/components/HomePage/HomeBath.vue'
import HomeShowroom from '@/components/HomePage/HomeShowroom.vue'
import HomeFaq from '@/components/HomePage/HomeFaq.vue'
import HomeForm from '@/components/HomePage/HomeForm.vue'
import HomeUnique from '@/components/HomePage/HomeUnique.vue'
import HomeTypes from '@/components/HomePage/HomeTypes.vue'

import categoriesApi from '@/api/categories'
import productsApi from '@/api/products'
import faqApi from '@/api/faq'
import bannersApi from '@/api/banners'
import typesApi from '@/api/types.js'
import infoApi from '@/api/info.js'

export default {
  name: 'IndexPage',

  // head() {
  //   return {
  //     title: 'Savia |' + ` ${this.$store.state.translations['main.main_page']}`,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: 'My custom description',
  //       },
  //     ],
  //   }
  // },

  components: {
    HomeHero,
    HomeCategories,
    HomePopular,
    HomeCalc,
    HomeAbout,
    HomeAdv,
    HomeShift,
    HomeBath,
    HomeShowroom,
    HomeFaq,
    HomeForm,
    HomeUnique,
    HomeTypes,
  },

  async asyncData({ $axios, params }) {
    const categories = await categoriesApi.getCategories($axios, params.lang)
    const popular = await productsApi.getTopProducts($axios, params.lang)
    const faq = await faqApi.getFaq($axios, params.lang)
    const banners = await bannersApi.getBanners($axios, params.lang)
    const types = await typesApi.getTypes($axios, params.lang)
    const info = await infoApi.getInfo($axios, params.lang)

    return {
      categories,
      popular,
      faq,
      banners,
      types,
      info,
    }
  },

  mounted() {},
}
</script>

<style scoped>
@media screen and (max-width: 1024px) {
}
</style>
