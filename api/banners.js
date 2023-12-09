/* eslint-disable */

export default {
  async getBanners(axios, lang) {
    try {
      let res

      if (axios) {
        res = await axios.get('/baners', {
          headers: {
            Language: lang,
          },
        })
      } else {
        res = await $nuxt.$axios.get('/baners')
      }
      return res.data
    } catch (e) {
      console.log(e)
    }
  },
}
