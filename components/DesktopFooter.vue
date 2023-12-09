<template>
  <div class="wrap">
    <div class="container container-small">
      <div class="flexer">
        <div class="left">
          <div class="item">
            <NuxtLink :to="`/${$route.params.lang}`" class="brand">
              <img src="@/assets/img/logo/brand.svg" alt="" />
            </NuxtLink>

            <p>
              {{ $store.state.translations['main.footer-txt1'] }}
            </p>
          </div>
        </div>
        <div class="right">
          <div class="top">
            <div class="grid">
              <div class="item form__item">
                <form @submit.prevent="onSubmit" action="">
                  <input
                    id="call"
                    v-model="nbm"
                    type="text"
                    :placeholder="$store.state.translations['main.phone']"
                    class="input"
                  />
                  <button type="submit">
                    <img src="@/assets/img/logo/arrow.svg" alt="" />
                  </button>
                </form>
              </div>
              <div class="item">
                <ul class="links">
                  <li>
                    <NuxtLink
                      class="link"
                      :to="`/${$route.params.lang}/about`"
                      >{{ $store.state.translations['main.about'] }}</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      class="link"
                      :to="`/${$route.params.lang}/products/${radiators.id}?category=${radiators.id}`"
                      >{{
                        $store.state.translations['main.radiators']
                      }}</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      class="link"
                      :to="`/${$route.params.lang}/cart`"
                      >{{ $store.state.translations['main.cart'] }}</NuxtLink
                    >
                  </li>
                  <!-- <li>
                    <NuxtLink class="link" to="/unique">{{
                      $store.state.translations['main.unique']
                    }}</NuxtLink>
                  </li> -->
                </ul>
              </div>
              <div class="item">
                <ul class="links">
                  <li>
                    <NuxtLink
                      class="link"
                      :to="`/${$route.params.lang}/shifts`"
                      >{{ $store.state.translations['main.shifts'] }}</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      class="link"
                      :to="`/${$route.params.lang}/baths`"
                      >{{ $store.state.translations['main.baths'] }}</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      class="link"
                      :to="`/${$route.params.lang}/toilet`"
                      >{{ $store.state.translations['main.toilet'] }}</NuxtLink
                    >
                  </li>
                  <!-- <li>
                    <NuxtLink class="link" to="/nonstandart">{{
                      $store.state.translations['main.nonstandart']
                    }}</NuxtLink>
                  </li> -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <p>
        <span class="green">
          {{ $store.state.translations['main.copy'] }}
        </span>
        {{ $store.state.translations['main.market'] }}
      </p>
      <p>
        <span class="green">
          - {{ $store.state.translations['main.power'] }}
        </span>
        {{ $store.state.translations['main.author'] }}
      </p>
    </div>
  </div>
</template>

<script>
import IMask from 'imask'

import formApi from '@/api/form.js'
import categoriesApi from '@/api/categories.js'

export default {
  name: 'DesktopFooter',

  data() {
    return {
      nbm: '',
      full_name: '',
      radiators: [],
    }
  },

  async fetch() {
    const radiators = await categoriesApi.getRadiators(this.$axios)

    this.radiators = radiators
  },

  mounted() {
    const element = document.getElementById('call')
    const maskOptions = {
      mask: '+{998}(00)000-00-00',
    }
    const mask = IMask(element, maskOptions)
    return mask
  },

  methods: {
    async onSubmit() {
      const formData = {
        full_name: 'subscriber',
        nbm: this.nbm,
      }

      if (this.nbm.length > 14) {
        const res = await formApi.sendApplication(formData)

        if (res && res.status === 201) {
          this.$toast.success('Successfully sent')
        } else {
          this.$toast.error('Error')
        }

        this.full_name = ''
        this.nbm = ''
      }
    },
  },
}
</script>

<style scoped>
.wrap {
  background: var(--green);
  color: white;
  padding: 64px 0 0px 0;
}
.grid {
  display: grid;
  gap: 32px;
  grid-template-columns: 6fr 2fr 2fr;
}
.flexer {
  display: grid;
  grid-template-columns: 2fr 8fr;
  gap: 32px;
}
.grid__small {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 54px;
}
.top {
  margin-bottom: 72px;
}
.mid {
  margin-bottom: 96px;
}
.bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  background: white;
  color: black;
  text-align: center;
  padding: 20px 0;
}
.bottom p {
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
}
.green {
  color: var(--green);
}
.input {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 30.268px;
  padding: 16px 24px;
  width: 100%;
  font-weight: 400;
  font-size: 20.1787px;
  line-height: 24px;
  color: white;
}
.form__item form {
  max-width: 90%;
  position: relative;
}
.form__item button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
}
.link {
  font-weight: 400;
  font-size: 15.134px;
  line-height: 19px;
  color: white;
  transition: 0.4s;
}
.link:hover {
  text-decoration: none;
  color: var(--golden);
}
.links {
  display: flex;
  flex-direction: column;
  grid-area: 8px;
}
.lil__link {
  color: #9aa694;
  font-weight: 400;
  font-size: 11.0983px;
  line-height: 17px;
  transition: 0.4s;
}
.lil__link:hover {
  text-decoration: none;
  color: var(--golden);
}
.sup {
  font-weight: 400;
  font-size: 12.1072px;
  line-height: 17px;
  margin-bottom: 6px;
}
.address__txt {
  font-weight: 400;
  font-size: 12.1072px;
  line-height: 17px;
  color: #9aa694;
}
.socials {
  display: flex;
  align-items: center;
  gap: 40px;
}
.social {
  opacity: 0.6;
  transition: 0.4s;
}
.social:hover {
  opacity: 1;
}
.txt {
  font-weight: 400;
  font-size: 10.0893px;
  line-height: 17px;
  color: #9aa694;
}
.brand {
  margin-bottom: 24px;
  display: block;
}
.left p {
  color: var(--golden);
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 32px 0 0 0;
  }
  .flexer {
    display: block;
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    width: 100%;
  }
  .form__item {
    padding-top: 24px;
    grid-column: 1 / 3;
  }
  .top {
    margin-bottom: 30px;
  }
  .grid__small {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  .mid {
    margin-bottom: 32px;
  }
  .bottom {
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 12px 0;
  }
  .socials {
    gap: 20px;
    width: 100%;
  }
  .social {
    background: rgba(255, 255, 255, 0.202);
    width: 100%;
    max-width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bottom p {
    font-size: 14px;
  }
}
</style>
