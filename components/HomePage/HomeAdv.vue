<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-6 left">
          <h4 class="title">
            {{ $store.state.translations['main.advantages'] }}
          </h4>
          <div class="items">
            <div class="item">
              <div class="back">
                <img src="@/assets/img/logo/adv-1.svg" alt="" class="logo" />

                <img src="@/assets/img/logo/liner.png" alt="" class="line" />
              </div>
              <div class="rel">
                <p class="name">
                  {{ $store.state.translations['main.adv_1'] }}
                </p>

                <div class="idea">
                  <p>
                    {{ $store.state.translations['main.advtxt_1'] }}
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="back">
                <img src="@/assets/img/logo/adv-2.svg" alt="" class="logo" />

                <img
                  src="@/assets/img/logo/liner.png"
                  alt=""
                  class="line line-2"
                />
              </div>
              <div class="rel">
                <p class="name">
                  {{ $store.state.translations['main.adv_2'] }}
                </p>

                <div class="idea">
                  <p>
                    {{ $store.state.translations['main.advtxt_2'] }}
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="back">
                <img src="@/assets/img/logo/adv-3.svg" alt="" class="logo" />

                <img
                  src="@/assets/img/logo/liner.png"
                  alt=""
                  class="line line-3"
                />
              </div>
              <div class="rel">
                <p class="name">
                  {{ $store.state.translations['main.adv_3'] }}
                </p>

                <div class="idea">
                  <p>
                    {{ $store.state.translations['main.advtxt_3'] }}
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="back">
                <img src="@/assets/img/logo/adv-4.svg" alt="" class="logo" />

                <img
                  src="@/assets/img/logo/liner.png"
                  alt=""
                  class="line line-4"
                />
              </div>
              <div class="rel">
                <p class="name">
                  {{ $store.state.translations['main.adv_4'] }}
                </p>

                <div class="idea">
                  <p>
                    {{ $store.state.translations['main.advtxt_4'] }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <NuxtLink :to="`/${$route.params.lang}/about`" class="butn">{{
            $store.state.translations['main.more']
          }}</NuxtLink>
        </div>
        <div class="col-8 static">
          <img src="@/assets/img/adv.webp" alt="" class="pic" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeAdv',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  background: var(--golden);
  overflow: hidden;
  position: relative;
  padding: 104px 0;
}
.title {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 60px;
  color: var(--green);
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.pic {
  position: absolute;
  top: 0;
  right: 0;
}
.static {
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
.back {
  width: 100%;
  max-width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--green);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.item {
  display: flex;
  align-items: center;
  gap: 38px;
  cursor: pointer;
}
.name {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: var(--green);
  margin: 0;
  position: relative;
}
.items {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 80px;
}
.item:nth-child(2) {
  margin-left: 10%;
}
.item:nth-child(3) {
  margin-left: 20%;
}
.item:nth-child(4) {
  margin-left: 30%;
}
.butn {
  background: var(--green);
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: white;
  padding: 6px;
  width: 320px;
  text-align: center;
  transition: 0.4s;
  border: 2px solid transparent;
}
.butn:hover {
  background: var(--golden);
  color: black;
  border-color: black;
  text-decoration: none;
}
.line {
  position: absolute;
  top: 110%;
  left: 50%;
  width: 1px;
  max-height: none;
  height: 366px;
  object-fit: cover;
}
.line-2 {
  height: 262px;
}
.line-3 {
  height: 168px;
}
.line-4 {
  height: 56px;
}
.rel {
  position: relative;
  min-width: 100px;
}
.idea {
  position: absolute;
  left: 130%;
  top: 50%;
  transform: translateY(-50%);
  width: 380px;
  background: white;
  padding: 10px;
  border-radius: 12px;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  transition: 0.4s;
  pointer-events: none;
}
.idea p {
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  margin: 0;
}
.idea::after {
  width: 16px;
  height: 16px;
  background: white;
  position: absolute;
  left: -5px;
  top: 50%;
  z-index: -1;
  transform: translateY(-50%) rotate(45deg);
  content: '';
}
.item:hover .idea {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
}
@media screen and (max-width: 1024px) {
  .wrap {
    background: #f3f3f3;
    padding: 0 0 48px 0;
  }
  .static {
    display: none;
  }
  .left {
    width: 100% !important;
    max-width: 100% !important;
    display: block !important;
    flex: 100% !important;
  }
  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    margin-bottom: 40px;
  }
  .item {
    margin: 0 !important;
    gap: 24px;
  }
  .back {
    max-width: 50px;
    height: 50px;
  }
  .back::after {
    display: none;
  }
  .logo {
    width: 30px;
  }
  .items {
    margin-bottom: 48px;
  }
  .butn {
    width: 100%;
  }
  .line {
    display: none;
  }
}
</style>
