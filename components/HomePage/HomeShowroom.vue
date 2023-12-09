<template>
  <div class="wrap">
    <div class="container">
      <div class="background">
        <h4 class="title">{{ $store.state.translations['main.show'] }}</h4>
        <p class="sub">
          {{ $store.state.translations['main.show_txt'] }}
        </p>
        <div class="items">
          <div class="item">
            <img src="@/assets/img/logo/show-1.svg" alt="" class="logo" />
            <p class="txt">{{ info.work_time }}</p>
          </div>
          <div class="item">
            <img src="@/assets/img/logo/show-3.svg" alt="" class="logo" />
            <p class="txt">{{ info.adres }}</p>
          </div>
          <div class="item">
            <img src="@/assets/img/logo/show-2.svg" alt="" class="logo" />
            <p class="txt">{{ info.work_time }}</p>
          </div>
        </div>
        <div class="btns">
          <a
            href="https://www.google.com/maps/place/41%C2%B021'23.4%22N+69%C2%B015'01.7%22E/@41.356499,69.250474,16z/data=!4m4!3m3!8m2!3d41.356499!4d69.250474"
            type="button"
            class="link address"
            target="_blank"
          >
            {{ $store.state.translations['main.address'] }}
          </a>
          <a :href="`tel: ${info.nbm}`" class="link connect">{{
            $store.state.translations['main.connection']
          }}</a>
        </div>
      </div>
    </div>

    <div class="moda" :class="{ active: modalHandle }">
      <div class="wrapper" @click="modalHandle = !modalHandle"></div>
      <div class="body">
        https://www.google.com/maps/place/41%C2%B021'23.4%22N+69%C2%B015'01.7%22E/@41.356499,69.250474,16z/data=!4m4!3m3!8m2!3d41.356499!4d69.250474
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SAVIAHomeShowroom',

  props: ['info'],

  data() {
    return {
      modalHandle: false,
    }
  },

  watch: {
    $route() {
      this.modalHandle = false
    },
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.background {
  background: url('@/assets/img/show.webp') center no-repeat;
  background-size: cover;
  border-radius: 16px;
  overflow: hidden;
  color: white;
  padding: 48px 56px;
}
.title {
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 24px;
}
.sub {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  max-width: 795px;
  margin-bottom: 48px;
}
.items {
  display: flex;
  align-items: center;
  gap: 48px;
  margin-bottom: 48px;
}
.item {
  display: flex;
  align-items: center;
  gap: 12px;
}
.txt {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  max-width: 270px;
}
.btns {
  display: flex;
  align-items: center;
  gap: 20px;
}
.link {
  padding: 6px 24px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid transparent;
  transition: 0.4s;
}
.address {
  background: white;
  color: var(--green);
}
.connect {
  background: transparent;
  border-color: white;
  color: white;
}
.address:hover {
  background: transparent;
  border-color: white;
  text-decoration: none;
  color: white;
}
.connect:hover {
  background: white;
  border-color: white;
  text-decoration: none;
  color: var(--green);
}

.moda {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 888;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.4s;
}
.moda.active {
  opacity: 1;
  visibility: visible;
  z-index: 99;
  pointer-events: initial;
}
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.body {
  min-width: 700px;
  height: 400px;
  z-index: 889;
}
@media screen and (max-width: 1024px) {
  .background {
    padding: 18px;
  }
  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    margin-bottom: 14px;
  }
  .sub {
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    margin-bottom: 20px;
  }
  .items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 20px;
  }
}
</style>
