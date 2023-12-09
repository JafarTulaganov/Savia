/* eslint-disable */

export default {
  async sendCartView(formData) {
    try {
      const res = await $nuxt.$axios.post('/order/create', formData)
      return res
    } catch (e) {
      console.log(e)
    }
  },
}
