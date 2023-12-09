/* eslint-disable */

export const state = () => ({
  cart: [],
  translations: {},
  lang: 'uz',
})

export const mutations = {
  langRu(state, payload) {
    state.lang = payload
  },

  getTranslations(state, payload) {
    state.translations = payload
  },
  addToCart(state, payload) {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]))
    }
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (cart.find((item) => item.id === payload.id)) {
      const total = cart.find((item) => item.id === payload.id)

      total.count = total.count + payload.count
    } else {
      cart.push(payload)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    state.cart = cart
  },
  updateCount(state, payload) {
    const cart = JSON.parse(localStorage.getItem('cart'))

    if (payload.type) {
      cart.find((item) => item.id === payload.id).count++
    } else if (
      !payload.type &&
      cart.find((item) => item.id === payload.id).count > 1
    ) {
      cart.find((item) => item.id === payload.id).count--
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    state.cart = cart
  },
  clearCart(state, payload) {
    let cart = JSON.parse(localStorage.getItem('cart'))

    cart = cart.filter((item) => item.id !== payload)

    localStorage.setItem('cart', JSON.stringify(cart))
    state.cart = cart
  },
  emptyCart(state) {
    state.cart = []
    localStorage.removeItem('cart')
  },
}

export const actions = {
  async postCart({}, payload) {
    try {
      const res = await this.$axios.$post(`/cart_view`, { products: payload })
      return res
    } catch (e) {
      console.log('error', e)
    }
  },

  actionLangRu({ commit }, payload) {
    commit('langRu', payload)
  },
}

export const getters = {
  language(state) {
    return state.lang
  },
}
