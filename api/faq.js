/* eslint-disable */

export default {
  async getFaq(axios, lang) {
    try {
      let res

      if (axios) {
        res = await axios.get('/faq', {
          headers: {
            Language: lang,
          },
        })
      } else {
        res = await $nuxt.$axios.get('/faq')
      }
      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },
}
