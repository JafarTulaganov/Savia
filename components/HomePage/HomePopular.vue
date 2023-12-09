<template>
  <div class="wrap">
    <div class="container container-big">
      <h4 class="title">
        {{ $store.state.translations['main.top_products'] }}
      </h4>
      <div class="buttons">
        <NuxtLink
          :to="`/${$route.params.lang}`"
          :class="{ active: !$route.query.category }"
          class="butn"
        >
          {{ $store.state.translations['main.all'] }}
        </NuxtLink>
        <NuxtLink
          :to="`/${$route.params.lang}/?category=${category.id}`"
          v-for="category in categories"
          :key="category.id"
          class="butn"
          :class="{ active: category.id == $route.query.category }"
        >
          {{ category.name }}
        </NuxtLink>
      </div>
      <p class="info">
        {{ $store.state.translations['main.count'] }} {{ popular?.length }}
      </p>

      <div class="grid">
        <div v-for="item in popular" :key="item.id" class="cardo">
          <div>
            <NuxtLink
              :to="`/${$route.params.lang}/product/${item.slug}`"
              class=""
            >
              <div class="img">
                <img loading="lazy" :src="item.image" alt="" class="pic" />

                <div class="colors">
                  <div
                    v-for="color in item.colors"
                    :key="color.id"
                    class="color"
                    :style="`background-color: ${color.hex}`"
                  ></div>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink
              :to="`/${$route.params.lang}/product/${item.slug}`"
              class="linker"
            >
              <div class="content">
                <p class="name">{{ item.product?.name }}</p>
                <p class="category">{{ item.product.subtitle }}</p>
              </div>
            </NuxtLink>
          </div>
          <div class="btns">
            <NuxtLink
              :to="`/${$route.params.lang}/product/${item.slug}`"
              class="more"
            >
              {{ $store.state.translations['main.more'] }}
            </NuxtLink>
            <button
              @click="$store.commit('addToCart', { id: item.id, count: 1 })"
              class="cart"
            >
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5933 19.9675C11.5933 21.09 10.7009 22 9.60013 22C8.49934 22 7.607 21.09 7.607 19.9675C7.607 18.8449 8.49935 17.9349 9.60014 17.9349C10.7009 17.9349 11.5933 18.8449 11.5933 19.9675ZM17.6705 17.9349C16.5697 17.9349 15.6774 18.8449 15.6774 19.9675C15.6774 21.09 16.5697 22 17.6705 22C18.7713 22 19.6636 21.09 19.6636 19.9675C19.6636 18.8449 18.7713 17.9349 17.6705 17.9349ZM23.8574 8.39338L21.4049 15.8268C21.4049 15.8268 21.2018 16.93 20.1675 16.93C19.1331 16.93 9.01774 16.93 7.78333 16.93C6.54893 16.93 6.49705 15.5473 6.49705 15.5473C6.49705 15.5473 5.18115 5.59168 5.11594 4.99023C5.05073 4.38877 4.29646 3.94298 4.29646 3.94298L1.05112 2.39706C-0.725667 1.44955 0.0819592 -0.353279 1.05112 0.0607856C5.16632 2.04042 7.07796 3.01513 7.20096 3.79489C7.32544 4.57616 7.54179 6.45758 7.54179 6.45758V6.46966C7.56698 6.46211 7.58476 6.45758 7.58476 6.45758C7.58476 6.45758 20.2045 6.45758 22.7534 6.45758C24.585 6.45758 23.8574 8.39641 23.8574 8.39338ZM20.3097 12.5325L20.2845 12.534H8.27829L8.52576 14.5348H19.7259L20.3097 12.5325ZM21.4789 8.49766H7.78185L8.04563 10.636C10.673 10.636 18.367 10.636 20.8595 10.636L21.4789 8.49766Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div id="calc"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import productsApi from '@/api/products.js'

export default {
  props: ['categories'],

  data() {
    return {
      popular: [],
      allPopular: [],
    }
  },

  async fetch() {
    this.allPopular = await productsApi.getTopProducts(this.$axios)

    this.allPopular.forEach((item) => {
      this.popular = [...this.popular, ...item?.products]
    })
  },

  computed: {
    routerChange() {
      return this.$route.query.category
    },
  },

  watch: {
    routerChange(val) {
      if (val) {
        const totalPopular = this.allPopular.find((item) => item.id == val)
        this.popular = totalPopular?.products ? totalPopular?.products : []
      } else {
        this.popular = []
        this.allPopular.forEach((item) => {
          if (item?.products) {
            this.popular = [...this.popular, ...item?.products]
          }
        })
      }
    },
  },
}
</script>

<style scoped>
.wrap {
  padding: 100px 0 120px 0;
}
.title {
  font-weight: 700;
  font-size: 24px;
  line-height: 38px;
  margin-bottom: 32px;
  color: var(--green);
}
.buttons {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.butn {
  background: transparent;
  border: 1px solid var(--green);
  padding: 6px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: var(--green);
}
.butn.active {
  background: var(--green);
  color: white;
}
.butn:hover {
  text-decoration: none;
}
.info {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: var(--green);
  opacity: 0.6;
  margin-bottom: 32px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  padding-top: 32px;
  border-top: 1px solid #02474220;
}
.cardo {
  background: white;
  border-radius: 8px;
  padding: 8px 8px 12px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.pic {
  width: 100%;
  height: 190px;
  object-fit: contain;
  border-radius: 8px;
}
.img {
  overflow: hidden;
  margin-bottom: 12px;
}
.name {
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: var(--green);
  margin-bottom: 8px;
}
.category {
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 38px;
}
.btns {
  display: grid;
  grid-template-columns: 8fr 2fr;
  gap: 8px;
}
.more {
  background: #f3f3f3;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: var(--green);
  text-align: center;
  padding: 8px 0;
  transition: 0.4s;
}
.more:hover {
  background: var(--green);
  color: white;
  text-decoration: none;
}
.cart {
  background: #f3f3f3;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: 0.4s;
}
.cart svg {
  width: 18px !important;
}
.cart svg path {
  fill: var(--green);
  transition: 0.4s;
}
.cart:hover {
  background: var(--golden);
}
.cart:hover svg path {
  fill: black;
}
.img {
  position: relative;
}
.colors {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  align-items: center;
}
.color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 60px 0;
  }
  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 28px;
  }
  .buttons {
    flex-wrap: wrap;
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
    padding-top: 0;
    border-top: none;
    gap: 14px;
  }
  .pic {
    height: 160px;
  }
  .name {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    margin-bottom: 6px;
  }
  .category {
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
    margin-bottom: 16px;
  }
}
</style>
