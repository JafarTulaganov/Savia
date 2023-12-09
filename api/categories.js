/* eslint-disable */

export default {
  async getCategories(axios, lang) {
    try {
      let res

      if (axios) {
        res = await axios.get('/categories', {
          headers: {
            Language: lang,
          },
        })
      }
      return res.data.results
    } catch (e) {
      console.log(e)
    }
  },

  async getCategoryId(id, axios, lang) {
    try {
      let res

      if (axios) {
        res = await axios.get(`/categories/${id}`, {
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

  async getRadiators(axios, lang) {
    try {
      let res

      if (axios) {
        res = await axios.get('/get_radiators', {
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
