/* eslint-disable */

export default {
  async getProducts(axios, lang) {
    try {
      let res

      if (axios) {
        res = await axios.get('/products', {
          headers: {
            Language: lang,
          },
        })
      } else {
        res = await $nuxt.$axios.get('/products')
      }
      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },

  async getProduct(slug, axios, lang) {
    try {
      let res

      if (axios) {
        res = await axios.get(`/products/${slug}`, {
          headers: {
            Language: lang,
          },
        })
      } else {
        res = await $nuxt.$axios.get(`/products/${slug}`)
      }
      return res.data
    } catch (e) {
      console.log(e)
    }
  },

  async getProductsCategory(query, axios, lang) {
    try {
      let res

      if (axios) {
        res = await axios.get('/products', {
          params: { category: query, page_size: 40 },
          headers: {
            Language: lang,
          },
        })
      } else {
        res = await $nuxt.$axios.get('/products', {
          params: { category: query, page_size: 40 },
        })
      }
      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },

  async getTopProducts(axios, lang) {
    try {
      let res

      if (axios) {
        res = await axios.get('/top_products', {
          headers: {
            Language: lang,
          },
        })
      } else {
        res = await $nuxt.$axios.get('/top_products')
      }
      return res.data.products
    } catch (e) {
      console.log(e)
    }
  },
}
