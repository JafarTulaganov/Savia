/* eslint-disable */

export default {
  async getInfo(axios, lang) {
    try {
      let res

      if (axios) {
        res = await axios.get('/static_infos', {
          headers: {
            Language: lang,
          },
        })
      }
      return res.data
    } catch (e) {
      console.log(e)
    }
  },
}
