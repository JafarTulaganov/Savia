<template>
  <div class="app">
    <div class="wrapper">
      <div v-if="error.statusCode === 404" class="wrap">
        <img src="@/assets/img/404.svg" class="pic" alt="" />
        <h4 class="title">{{ $store.state.translations['main.no_page'] }}</h4>
      </div>
      <!-- <h1 v-else>
        {{ otherError }}
      </h1> -->
      <a :href="`${$forceUpdate.params.lang}/`" class="butn">
        {{ $store.state.translations['main.main_page'] }}
      </a>
    </div>
  </div>
</template>

<script>
import translationsApi from '@/api/translations.js'
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {},
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
  mounted() {
    this.__GET_TRANSLATIONS()
  },
  methods: {
    async __GET_TRANSLATIONS() {
      const translations = await translationsApi.getTranslations(this.$axios)
      await this.$store.commit('getTranslations', translations)
    },
  },
  computed: {
    // currentLang() {
    //   return this.$store.state.lang
    // },
  },

  watch: {
    // currentLang(val) {},
  },
}
</script>

<style scoped>
.app {
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pic {
  width: 100%;
  max-width: 800px;
  height: auto;
  object-fit: contain;
}
.wrapper {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  margin-top: -200px;
}
.title {
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: var(--green);
  margin: 20px;
}
.butn {
  background: var(--green);
  border-radius: 50px;
  font-weight: 500;
  font-size: 21.6697px;
  line-height: 25px;
  padding: 10px 44px;
  color: white;
}
.butn:hover {
  text-decoration: none;
}
</style>
