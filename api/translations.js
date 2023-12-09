/* eslint-disable */

export default {
  async getTranslations(axios, lang) {
    try {
      let res

      if (axios) {
        res = await axios.get('/translations', {
          headers: {
            Language: lang,
          },
        })
      } else {
        res = await $nuxt.$axios.get('/translations')
      }
      return res.data
    } catch (e) {
      console.log(e)
    }
  },
}
