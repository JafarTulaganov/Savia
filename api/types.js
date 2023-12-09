/* eslint-disable */

export default {
  async getTypes(axios, lang) {
    try {
      let res

      if (axios) {
        res = await axios.get('/radiator_types', {
          headers: {
            Language: lang,
          },
        })
      } else {
        res = await $nuxt.$axios.get('/radiator_types')
      }
      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
