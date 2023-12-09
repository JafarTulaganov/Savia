/* eslint-disable */

export default {
  async getSearch(query, axios) {
    console.log(query)
    try {
      let res

      if (axios) {
        res = await axios.get('/products', {
          params: { q: query.search, category: query.category },
        })
      } else {
        res = await $nuxt.$axios.get('/products', {
          params: { q: query.search, category: query.category },
        })
      }
      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
