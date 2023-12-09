<template>
  <div class="wrap">
    <div class="container container-big">
      <div class="top">
        <NuxtLink :to="`/${$route.params.lang}`" class="back">
          <i class="bx bx-chevron-left"></i>
          {{ $store.state.translations['cart.back'] }}
        </NuxtLink>
        <h4 class="title">
          {{ $store.state.translations['cart.cart_products'] }}
        </h4>
      </div>

      <div class="row">
        <div class="col-md-9 col-xs-12">
          <div class="items">
            <div v-if="basketProducts.length > 0">
              <div v-for="card in basketProducts" :key="card.id" class="item">
                <div class="left">
                  <div class="img">
                    <img :src="card.image" alt="" class="pic" />
                  </div>
                  <div class="content">
                    <div>
                      <span class="name">{{ card.product.name }}</span>
                      <span class="status">{{ card.product.description }}</span>
                    </div>
                    <div>
                      <p class="price">
                        {{ $store.state.translations['cart.price'] }}
                      </p>

                      <p v-if="card.contract_price == true" class="agreement">
                        {{ $store.state.translations['cart.contract'] }}
                      </p>
                      <p v-if="card.contract_price == false" class="agreement">
                        {{ card.price }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div class="plus__minus">
                    <p class="sup">
                      {{ $store.state.translations['cart.count'] }}
                    </p>
                    <div class="counters">
                      <button
                        @click="
                          $store.commit('updateCount', {
                            id: card.id,
                            type: false,
                          })
                        "
                        class="counter minus"
                      >
                        <i class="bx bx-minus"></i>
                      </button>
                      <p class="num">
                        {{ card.count }}
                      </p>
                      <button
                        @click="
                          $store.commit('updateCount', {
                            id: card.id,
                            type: true,
                          }),
                            card.price
                        "
                        class="counter plus"
                      >
                        <i class="bx bx-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="trash">
                    <button
                      @click="$store.commit('clearCart', card.id)"
                      type="button"
                      class="delete"
                    >
                      <svg
                        width="31"
                        height="34"
                        viewBox="0 0 31 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.34424 8.04878H5.2942M5.2942 8.04878H28.8939M5.2942 8.04878L5.29456 28.6983C5.29456 29.4807 5.60536 30.231 6.15858 30.7843C6.71181 31.3375 7.46214 31.6483 8.24452 31.6483H22.9943C23.7767 31.6483 24.527 31.3375 25.0803 30.7843C25.6335 30.231 25.9443 29.4807 25.9443 28.6983V8.0486L5.2942 8.04878ZM9.7195 8.0486V5.09864C9.7195 4.31626 10.0303 3.56593 10.5835 3.01271C11.1367 2.45948 11.8871 2.14868 12.6695 2.14868H18.5694C19.3518 2.14868 20.1021 2.45948 20.6553 3.01271C21.2085 3.56593 21.5193 4.31626 21.5193 5.09864V8.0486M12.6687 15.4235V24.2734M18.5694 15.4235V24.2734"
                          stroke="#E93232"
                          stroke-width="3.31871"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                    <p class="sub">
                      {{ $store.state.translations['cart.delete'] }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="empty" v-else>
              <img src="@/assets/img/logo/cart.png" alt="" />
              <p>{{ $store.state.translations['cart.empty'] }}</p>
              <NuxtLink :to="`/${$route.params.lang}`">
                {{ $store.state.translations['cart.buy'] }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-xs-12 deftones">
          <div class="cardo">
            <div class="card__top">
              <p class="question">
                {{ $store.state.translations['cart.total'] }}
              </p>
              <p class="answer">
                {{ totalPrice }}
              </p>
            </div>
            <div>
              <div class="card__mid" v-if="basketProducts.length > 0">
                <div
                  v-for="item in basketProducts"
                  :key="item.id"
                  class="mid__item"
                >
                  <p class="mid__question">{{ item.product.name }}</p>
                  <p v-if="item.contract_price == true" class="mid__answer">
                    {{ $store.state.translations['cart.contract'] }}
                  </p>
                  <p v-if="item.contract_price == false" class="mid__answer">
                    {{ item.price }}
                  </p>
                </div>
              </div>
              <div class="pt-2" v-else>
                {{ $store.state.translations['cart.empty'] }}
              </div>
            </div>
            <div class="card__bottom">
              <div v-if="basketProducts.length > 0">
                <button
                  @click="modalOpen = !modalOpen"
                  type="button"
                  class="order"
                >
                  {{ $store.state.translations['cart.order'] }}
                </button>
              </div>
              <a :href="`tel:${info.nbm}`" type="button" class="operator">
                {{ $store.state.translations['cart.call'] }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gwyn" :class="{ show: modalOpen }">
      <div class="modal__wrap" @click="modalOpen = !modalOpen"></div>
      <div class="body">
        <form @submit.prevent="onSubmit" action="">
          <div class="modal__top">
            <div class="modal__left">
              <input
                v-model="full_name"
                type="text"
                :placeholder="$store.state.translations['main.name']"
                required
              />
              <input
                id="contact"
                v-model="nbm"
                type="text"
                :placeholder="$store.state.translations['main.phone']"
                required
              />
            </div>
            <div class="modal__right">
              <div class="cardo">
                <div class="card__top">
                  <p class="question">
                    {{ $store.state.translations['cart.total'] }}
                  </p>
                  <p class="answer">{{ totalPrice }}</p>
                </div>
                <div>
                  <div class="card__mid" v-if="basketProducts.length > 0">
                    <div
                      v-for="item in basketProducts"
                      :key="item.id"
                      class="mid__item"
                    >
                      <p class="mid__question">{{ item.product.name }}</p>
                      <p v-if="item.contract_price == true" class="mid__answer">
                        {{ $store.state.translations['cart.contract'] }}
                      </p>
                      <p
                        v-if="item.contract_price == false"
                        class="mid__answer"
                      >
                        {{ item.price }}
                      </p>
                    </div>
                  </div>
                  <div v-else>
                    {{ $store.state.translations['cart.empty'] }}
                  </div>
                </div>
                <div class="card__bottom">
                  <a :href="`tel:${info.nbm}`" type="button" class="operator">
                    {{ $store.state.translations['cart.call'] }}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="modal__bottom">
            <button class="operator" @click="modalOpen = !modalOpen">
              {{ $store.state.translations['cart.cancel'] }}
            </button>
            <button type="submit" class="order">
              {{ $store.state.translations['cart.order'] }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import IMask from 'imask'

/* eslint-disable */
import cartApi from '@/api/cart.js'
import infoApi from '@/api/info.js'

export default {
  name: 'CartPage',

  data() {
    return {
      modalOpen: false,
      basketProducts: [],
      full_name: '',
      nbm: '',
      products: '',
      totalPrice: '',
    }
  },

  async asyncData({ $axios }) {
    const info = await infoApi.getInfo($axios)

    return {
      info,
    }
  },

  mounted() {
    const element = document.getElementById('contact')
    const maskOptions = {
      mask: '+{998}(00)000-00-00',
    }
    const mask = IMask(element, maskOptions)

    return mask
  },

  async created() {
    await this.GET_BASKET_PRODUCTS()
  },

  methods: {
    async GET_BASKET_PRODUCTS() {
      let card_products

      localStorage.length < 1
        ? (card_products = [])
        : (card_products = JSON.parse(localStorage.getItem('cart')))

      this.basketProducts = await this.$store.dispatch(
        'postCart',
        card_products
      )
      this.totalPrice = this.basketProducts?.reduce((sum, item) => {
        return sum + item.price * item.count
      }, 0)
    },

    async onSubmit() {
      const product = JSON.parse(localStorage.getItem('cart'))
      const formData = {
        full_name: this.full_name,
        nbm: this.nbm,
        products: product,
      }

      const res = await cartApi.sendCartView(formData)

      if (res && res.status === 201) {
        this.$toast.success('Successfully sent')
      } else {
        this.$toast.error('Error')
      }

      this.full_name = ''
      this.nbm = ''
      this.$store.commit('emptyCart', {})
      this.modalOpen = false
    },
  },

  computed: {
    storeCart() {
      return this.$store.state.cart
    },

    checkPrice() {
      const totalPrice = this.basketProducts?.reduce((sum, item) => {
        return sum + item.price
      })
      return totalPrice
    },
  },

  watch: {
    storeCart() {
      this.GET_BASKET_PRODUCTS()
    },
  },
}
</script>

<style scoped>
.wrap {
  padding: 140px 0 64px 0;
}
.top {
  display: flex;
  align-items: center;
  gap: 58px;
  margin-bottom: 48px;
}
.title {
  margin: 0;
}
.items {
  background: white;
  padding: 32px;
  border-radius: 12px;
}
.item {
  display: grid;
  grid-template-columns: 6fr 4fr;
  border-bottom: 1px solid #eeeeee;
  padding: 22px 0;
}
.item:first-child {
  padding-top: 0;
}
.item:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}
.pic {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
}
.left {
  display: flex;
  gap: 40px;
}
.right {
  display: flex;
  justify-content: space-between;
}
.name {
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: var(--green);
  margin-bottom: 12px;
  display: block;
}
.status,
.sup,
.price {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #bdbdbd;
}
.agreement {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: var(--green);
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.counter {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 24px;
}
.minus {
  background: var(--green);
  color: white;
  border: 2px solid transparent;
}
.plus {
  border: 2px solid var(--green);
  color: var(--green);
}
.num {
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #4f4f4f;
}
.counters {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 14px;
}
.trash {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  align-items: flex-end;
}
.sub {
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #bdbdbd;
}
.delete {
  background: #f8f8f8;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.delete svg {
  width: 24 px;
}
.cardo {
  padding: 30px;
  background: white;
  border-radius: 12px;
  position: sticky;
  top: 160px;
}
.card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid #f1f1f1;
}
.question {
  font-weight: 510;
  font-size: 18px;
  line-height: 21px;
  color: var(--green);
}
.answer {
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
}
.card__mid {
  padding: 20px 0;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.mid__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mid__question {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}
.mid__answer {
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
}
.card__bottom {
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding-top: 22px;
}
.order {
  background: var(--green);
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  border-radius: 10px;
  padding: 10px 0;
  width: 100%;
  color: white;
  text-align: center;
  transition: 0.4s;
}
.operator {
  background: #ebebeb;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  border-radius: 10px;
  padding: 10px 0;
  width: 100%;
  color: var(--green);
  text-align: center;
  transition: 0.4s;
}
.order:hover,
.operator:hover {
  background: var(--golden);
  color: black;
  text-decoration: none;
}
.deftones {
  position: relative;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding-top: 120px;
  }
  .items {
    padding: 20px;
  }
  .item {
    display: block;
  }
  .pic {
    width: 100%;
    max-width: 140px;
  }
  .left {
    display: grid;
    grid-template-columns: 4fr 6fr;
    gap: 20px;
    margin-bottom: 40px;
  }
  .name {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 8px;
  }
  .status,
  .sup {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
  .price {
    font-weight: 600;
    font-size: 17.3906px;
    line-height: 49px;
  }
  .delete {
    width: 40px;
    height: 40px;
    border-radius: 6px;
  }
  .delete svg {
    width: 20px;
  }
  .trash {
    gap: 16px;
  }
}
.gwyn {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.4s;
}
.gwyn.show {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
}
.modal__wrap {
  height: 100%;
  z-index: 1;
}
.body {
  width: 750px;
  padding: 48px;
  background: white;
  border-radius: 20px;
  z-index: 9;
}
.body form {
  height: 100%;
}
.modal__top {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 100px;
  gap: 24px;
}
.gwyn .cardo {
  padding: 0;
}
.modal__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.modal__wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.gwyn input {
  background: #dadbdb;
  border-radius: 12px;
  width: 100%;
  padding: 18px 24px;
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--green);
}
.empty {
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 24px;
}
.empty p {
  font-weight: 700;
  font-size: 28.0301px;
  line-height: 45px;
  color: var(--green);
}
.empty a {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  border-radius: 8px;
  background: var(--green);
  padding: 8px 12px;
  color: white;
}
.empty a:hover {
  text-decoration: none;
}
@media screen and (max-width: 1024px) {
  .body {
    width: 100%;
    max-width: 90%;
    padding: 24px;
  }
  .modal__top {
    grid-template-columns: repeat(1, 1fr);
    padding-bottom: 24px;
    gap: 0;
  }
  .modal__bottom {
    flex-direction: column;
  }
  .deftones {
    margin-top: 24px;
  }
}
</style>
