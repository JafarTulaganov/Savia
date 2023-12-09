<template>
  <div class="wrap">
    <div class="container">
      <div class="grid">
        <div v-for="item in categories" :key="item.id" class="cardo">
          <NuxtLink
            :to="`/${$route.params.lang}/products/${item.id}/?category=${item.id}`"
          >
            <p class="title">{{ item.name }}</p>
            <img :src="item.image" alt="" class="pic" />
          </NuxtLink>
        </div>
        <div class="cardo">
          <NuxtLink :to="`/${$route.params.lang}/baths`">
            <p class="title">
              {{ $store.state.translations['main.category-soon-1'] }}
            </p>
            <img src="@/assets/img/cat-2.png" alt="" class="pic" />
            <div class="badge">
              {{ $store.state.translations['main.soon'] }}
            </div>
          </NuxtLink>
        </div>
        <div class="cardo">
          <NuxtLink :to="`/${$route.params.lang}/toilet`">
            <p class="title">
              {{ $store.state.translations['main.category-soon-2'] }}
            </p>
            <img src="@/assets/img/toilet.png" alt="" class="pic" />
            <div class="badge">
              {{ $store.state.translations['main.soon'] }}
            </div>
          </NuxtLink>
        </div>
        <div class="cardo">
          <NuxtLink :to="`/${$route.params.lang}/shifts`">
            <p class="title">
              {{ $store.state.translations['main.category-soon-3'] }}
            </p>
            <img src="@/assets/img/cat-3.png" alt="" class="pic" />
            <div class="badge">
              {{ $store.state.translations['main.soon'] }}
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'HomeCategories',

  props: ['categories', 'categoriesId'],

  data() {
    return {}
  },

  mounted() {
    // this.sortCategories()
  },

  methods: {
    // sortCategories() {
    //   this.categories = this.categories.filter((obj) => obj.id !== 13)
    // },
  },
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.cardo {
  border-radius: 12px;
  position: relative;
  width: 100%;
  height: 246px;
  overflow: hidden;
}
.badge {
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26.225px; /* 145.696% */
  border-radius: 20px;
  background: #036b64;
  padding: 8px 16px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 16px;
}
.cardo:first-child {
  background: #f7fffe;
}
.cardo:nth-child(2),
.cardo:nth-child(4) {
  background: white;
}
.cardo:nth-child(3) {
  background: #fff7ef;
}
.cardo {
  background: white;
}
.cardo a {
  padding: 20px 24px;
  display: block;
  text-decoration: none;
  color: var(--green);
  height: 100%;
}
.pic {
  position: absolute;
  bottom: 0;
  right: 0;
  transition: 0.4s;
  width: 200px;
  height: 200px;
  object-fit: contain;
}
.title {
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  position: relative;
  z-index: 9;
}
.cardo:hover .pic {
  transform: scale(1.1);
}
@media screen and (max-width: 1024px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .cardo {
    height: 120px;
  }
  .cardo a {
    padding: 12px;
  }
  .cardo img {
    max-height: 72px;
  }
  .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
  }
  .badge {
    font-size: 12px;
    line-height: 150%;
    padding: 2px 8px;
    bottom: 4px;
  }
}
</style>
