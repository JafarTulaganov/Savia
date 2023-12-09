<template>
  <div class="wrap">
    <div class="container container-big">
      <div class="row">
        <div class="col-md-6 col-xs-12 horizon">
          <div class="content">
            <h4 class="title">
              {{ $store.state.translations['main.radiators'] }}
            </h4>
            <p class="sub">
              {{ $store.state.translations['main.radiators_txt'] }}
            </p>
          </div>
          <div class="banner">
            <div class="ban__left">
              <p class="ban__title">
                {{ $store.state.translations['main.unique'] }}
              </p>
              <!-- <NuxtLink to="/unique" class="butn">{{
                $store.state.translations['main.see_all']
              }}</NuxtLink> -->
            </div>
            <div class="ban__img">
              <img
                loading="lazy"
                src="@/assets/img/rad.png"
                alt=""
                class="ban__pic"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xs-12 p-0 img">
          <img
            loading="lazy"
            src="@/assets/img/rad-big.webp"
            alt=""
            class="pic"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeUnique',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  color: var(--green);
  position: relative;
  background: white;
}
.row {
  min-height: 90vh;
}
.title {
  font-weight: 700;
  font-size: 45px;
  line-height: 38px;
  margin-bottom: 24px;
}
.content {
  margin-bottom: 48px;
}
.sub {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  max-width: 629px;
}
.img {
  position: static;
}
.pic {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  object-fit: cover;
}
.horizon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 115px 72px 50px 16px;
}
.banner {
  border-radius: 20px;
  background: #f7f7f7;
  padding: 22px;
  position: relative;
  min-height: 174px;
}
.ban__pic {
  position: absolute;
  top: 0;
  right: 0;
}
.ban__left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 40%;
  height: 100%;
}
.ban__title {
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
}
.butn {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  background: var(--green);
  padding: 8px 24px;
  color: white;
  border-radius: 50px;
  max-width: 180px;
  text-align: center;
  transition: 0.4s;
}
.butn:hover {
  background: var(--golden);
  color: black;
  text-decoration: none;
}
@media screen and (max-width: 1024px) {
  .horizon {
    padding: 24px;
  }
  .img {
    padding: 0 24px 24px 24px !important;
  }
  .pic {
    position: static;
    width: 100%;
    height: 300px;
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
    margin-bottom: 24px;
  }
  .row {
    height: auto;
  }
  .banner {
    padding: 18px;
    overflow: hidden;
  }
  .ban__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    margin-bottom: 16px;
  }
  .butn {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    border-radius: 40px;
    max-width: fit-content;
    padding: 8px 16px;
  }
  .ban__left {
    max-width: 50%;
  }
  .ban__pic {
    height: 100%;
    width: 100%;
    object-fit: cover;
    right: -200px;
  }
}
</style>
