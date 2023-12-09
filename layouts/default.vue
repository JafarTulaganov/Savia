<template>
  <div class="wrapper">
    <DesktopNavbar class="nav" />
    <MobileHeader />

    <main id="main">
      <nuxt />
    </main>
    <DesktopFooter />

    <button id="upBtn" class="up__btn" @click="toTop">
      <svg
        width="16"
        height="9"
        viewBox="0 0 16 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.29289 8.20711C7.68342 8.59763 8.31658 8.59763 8.70711 8.20711L15.0711 1.84315C15.4616 1.45262 15.4616 0.819457 15.0711 0.428932C14.6805 0.0384078 14.0474 0.0384078 13.6569 0.428932L8 6.08579L2.34315 0.428932C1.95262 0.0384078 1.31946 0.0384078 0.928932 0.428932C0.538408 0.819457 0.538408 1.45262 0.928932 1.84315L7.29289 8.20711ZM7 6.5V7.5H9V6.5H7Z"
          fill="#024742"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import translationsApi from '@/api/translations.js'

import DesktopNavbar from '@/components/DesktopNavbar.vue'
import DesktopFooter from '@/components/DesktopFooter.vue'
import MobileHeader from '@/components/MobileHeader.vue'

export default {
  name: 'DefaultLayout',

  components: {
    DesktopNavbar,
    DesktopFooter,
    MobileHeader,
  },

  data() {
    return {
      scTimer: 0,
      scY: 0,
    }
  },

  computed: {
    currentLang() {
      return this.$route.params.lang
    },
  },

  watch: {
    currentLang(val) {
      this.__GET_TRANSLATIONS()
    },
  },

  mounted() {
    const navbar = document.getElementById('navbar')
    function showBtn() {
      const upBtn = document.getElementById('upBtn')
      if (this.scrollY >= 50) {
        upBtn.classList.add('visible')
      } else {
        upBtn.classList.remove('visible')
        navbar.classList.remove('scroll-header')
      }
    }
    window.addEventListener('scroll', showBtn)
    window.addEventListener('scroll', this.handleScroll)

    this.__GET_TRANSLATIONS()
  },

  methods: {
    handleScroll: function () {
      if (this.scTimer) return
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },

    async __GET_TRANSLATIONS() {
      const translations = await translationsApi.getTranslations(
        this.$axios,
        this.$route.params.lang
      )
      await this.$store.commit('getTranslations', translations)
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1 1 auto;
}
@media screen and (max-width: 1024px) {
  .nav {
    display: none;
  }
}
</style>
