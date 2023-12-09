/* eslint-disable */

export default {
  async sendApplication(formData) {
    try {
      const res = await $nuxt.$axios.post('/application/create', formData)
      return res
    } catch (e) {
      console.log(e)
    }
  },
}
