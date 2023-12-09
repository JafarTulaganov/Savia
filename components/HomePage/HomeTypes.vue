<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">
        {{ $store.state.translations['main.radiator_title'] }}
      </h4>
      <div class="grid">
        <div v-for="item in types" :key="item.id" class="item">
          <img loading="lazy" :src="item.image" class="pic" alt="" />
          <p class="txt">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeTypes',

  props: ['types'],

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  background: white;
  padding: 100px 0;
}
.title {
  margin-bottom: 44px;
  font-weight: 600;
  font-size: 24px;
  line-height: 38px;
  color: #004d48;
  text-align: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}
.item {
  position: relative;
  min-height: 300px;
  border-radius: 12px;
  overflow: hidden;
}
.pic {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s;
}
.txt {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
  color: black;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
}
.item:hover .pic {
  transform: scale(1.1);
}
.sub {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #004d48;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 60px 0;
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }
  .item {
    height: 200px;
  }
  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    margin-bottom: 24px;
  }
}
</style>
