<template>
  <div class="wrep">
    <ProductsGrid :categories="categories" :categoryId="categoryId" />
  </div>
</template>

<script>
import ProductsGrid from '@/components/ProductsPage/ProductsGrid.vue'
import categoriesApi from '@/api/categories'

export default {
  name: 'ProductsPage',

  components: {
    ProductsGrid,
  },

  async asyncData({ params, $axios }) {
    const categories = await categoriesApi.getCategories($axios, params.lang)
    const categoryId = await categoriesApi.getCategoryId(
      params.index,
      $axios,
      params.lang
    )
    return {
      categories,
      categoryId,
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
  padding-top: 80px;
}
</style>
