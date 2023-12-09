<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-6 left">
          <h4 class="title">{{ $store.state.translations['main.toilet'] }}</h4>
          <p class="sub">
            {{ $store.state.translations['about.nonstandart-txt'] }}
          </p>
          <div class="items">
            <div class="item">
              <div class="logo">
                <img src="@/assets/img/logo/shift-1.svg" alt="" class="" />
              </div>
              <p class="txt">{{ $store.state.translations['about.non-1'] }}</p>
            </div>
            <div class="item">
              <div class="logo">
                <img src="@/assets/img/logo/shift-2.svg" alt="" class="" />
              </div>
              <p class="txt">{{ $store.state.translations['about.non-2'] }}</p>
            </div>
            <div class="item">
              <div class="logo">
                <img src="@/assets/img/logo/shift-3.svg" alt="" class="" />
              </div>
              <p class="txt">{{ $store.state.translations['about.non-3'] }}</p>
            </div>
            <div class="item">
              <div class="logo">
                <img src="@/assets/img/logo/shift-4.svg" alt="" class="" />
              </div>
              <p class="txt">{{ $store.state.translations['about.non-4'] }}</p>
            </div>
            <div class="item">
              <div class="logo">
                <img src="@/assets/img/logo/shift-5.svg" alt="" class="" />
              </div>
              <p class="txt">{{ $store.state.translations['about.non-5'] }}</p>
            </div>
            <div class="item">
              <div class="logo">
                <img src="@/assets/img/logo/shift-6.svg" alt="" class="" />
              </div>
              <p class="txt">{{ $store.state.translations['about.non-6'] }}</p>
            </div>
          </div>
          <div class="label">
            <p class="label__title">
              {{ $store.state.translations['main.badge_title'] }}
            </p>
            <p class="label__txt">
              {{ $store.state.translations['main.badge_txt'] }}
            </p>
            <div class="label__tag">
              <div class="tag__wrap">
                <p class="tag__title">
                  {{ $store.state.translations['main.badge_sub'] }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="img">
          <img src="@/assets/img/toilet.png" alt="" class="pic" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeShift',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  padding: 200px 0 120px 0;
  position: relative;
  overflow-x: hidden;
}
.pic {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -40px;
  width: 30%;
  height: 75%;
  object-fit: contain;
}
.title {
  font-weight: 700;
  font-size: 45px;
  line-height: 120%;
  margin-bottom: 24px;
  color: var(--green);
}
.sub {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  max-width: 832px;
  color: var(--green);
  margin-bottom: 50px;
}
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 80px;
  margin-bottom: 56px;
}
.item {
  display: flex;
  align-items: center;
  gap: 14px;
}
.txt {
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: var(--green);
  max-width: 218px;
  margin: 0;
}
.label {
  background: var(--green);
  border-radius: 20px;
  padding: 24px;
  color: white;
  position: relative;
}
.label__title {
  font-weight: 700;
  font-size: 36px;
  line-height: 48px;
  margin-bottom: 18px;
}
.label__txt {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  max-width: 370px;
}
.label__tag {
  position: absolute;
  top: -10px;
  right: 0;
  background: #0e857c;
  width: 288px;
  border-radius: 12px;
  padding: 8px;
  transform: rotate(-10deg);
  filter: drop-shadow(16px 24px 20px #0000007e);
}
.tag__wrap {
  border: 2px solid white;
  padding: 22px;
  border-radius: 12px;
}
.tag__title {
  font-weight: 900;
  font-size: 37.4723px;
  line-height: 49px;
  text-align: center;
}
.logo {
  mix-blend-mode: multiply;
}
.logo img {
  max-width: 38px;
  height: 38px;
  object-fit: contain;
}
@media screen and (max-width: 1024px) {
  .left {
    display: block !important;
    max-width: 100% !important;
    flex: 100% !important;
  }
  .wrap {
    padding: 120px 0 64px 0;
  }
  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    margin-bottom: 18px;
  }
  .sub {
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
  }
  .items {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }
  .txt {
    font-weight: 500;
    font-size: 16.3312px;
    line-height: 21px;
  }
  .label__tag {
    width: 150px;
    top: -50px;
  }
  .tag__wrap {
    padding: 10px;
  }
  .tag__title {
    font-weight: 900;
    font-size: 14.9378px;
    line-height: 20px;
  }
  .label__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 10px;
  }
  .label__txt {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
  .label {
    padding: 18px;
  }
  .pic {
    width: 100%;
    height: 300px;
    top: 100%;
    pointer-events: none;
    transform: none;
    position: static;
  }
  .img {
    padding-top: 32px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
</style>
