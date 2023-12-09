<template>
  <div class="wrep">
    <HomeBath />
  </div>
</template>

<script>
import HomeBath from '@/components/HomePage/HomeBath.vue'

export default {
  name: 'BathsPage',

  components: {
    HomeBath,
  },

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrep {
  padding-top: 80px;
}
@media screen and (max-width: 1024px) {
  .wrep {
    margin-top: -160px;
  }
}
</style>
