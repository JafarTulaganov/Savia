<template>
  <div class="wrep">
    <HomeShift />
  </div>
</template>

<script>
import HomeShift from '@/components/HomePage/HomeShift.vue'

export default {
  name: 'ShiftsPage',

  components: {
    HomeShift,
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
    padding-top: 120px;
  }
}
</style>
