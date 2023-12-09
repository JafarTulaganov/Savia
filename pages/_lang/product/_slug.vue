<template>
  <div class="wrep">
    <ProductFace :product="product" />
    <div v-if="products.length > 0">
      <ProductMore :products="products" />
    </div>
  </div>
</template>

<script>
import productsApi from '@/api/products'

import ProductFace from '@/components/ProductInner/ProductFace'
import ProductMore from '@/components/ProductInner/ProductMore'

export default {
  name: 'ProductsInner',

  components: {
    ProductFace,
    ProductMore,
  },

  async asyncData({ $axios, params }) {
    const product = await productsApi.getProduct(
      params.slug,
      $axios,
      params.lang
    )

    return {
      product,
    }
  },

  data() {
    return {
      products: [],
    }
  },

  mounted() {
    this.sortCategories()
  },

  methods: {
    async sortCategories() {
      this.products = await productsApi.getProductsCategory(
        this.product.product.category.id,
        this.$axios
      )
      this.products = this.products.filter(
        (item) => item.id !== this.product.id
      )
    },
  },
}
</script>

<style scoped>
.wrep {
  background: white;
  padding: 132px 0 120px 0;
}
@media screen and (max-width: 1024px) {
  .wrep {
    padding-top: 120px;
  }
}
</style>
