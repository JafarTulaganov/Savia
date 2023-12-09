<template>
  <div class="wrap">
    <div class="container container-small">
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <h4 class="title">
            {{ $store.state.translations['main.about_title'] }}
          </h4>
          <p class="txt">
            {{ $store.state.translations['main.about_txt'] }}
          </p>
          <div class="buttons">
            <!-- <NuxtLink to="/about" class="more">
              {{ $store.state.translations['main.more'] }}
            </NuxtLink> -->
            <a
              target="_black"
              href="https://youtube.com/shorts/0a_s2GogRf4?feature=share"
              class="video"
            >
              {{ $store.state.translations['main.about_video'] }}
              <img src="@/assets/img/logo/play.svg" alt="" />
            </a>
            <a
              :href="info.telegram"
              class="link"
              target="_blank"
              rel="nofollow"
            >
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.84784 11.8632L7.517 16.8888C7.99034 16.8888 8.19535 16.6692 8.44118 16.4055L10.6604 14.115L15.2588 17.7519C16.1022 18.2595 16.6964 17.9922 16.9239 16.914L19.9423 1.63926L19.9431 1.63836C20.2106 0.291963 19.4923 -0.234534 18.6706 0.0957645L0.928504 7.43163C-0.282359 7.93922 -0.264025 8.66822 0.722666 8.99852L5.25861 10.5222L15.7947 3.40235C16.2905 3.04775 16.7414 3.24395 16.3705 3.59855L7.84784 11.8632Z"
                  fill="#024742"
                />
              </svg>
            </a>
            <a
              :href="info.instagram"
              class="link"
              target="_blank"
              rel="nofollow"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1276 0H4.87244C2.18573 0 0 2.18573 0 4.87244V13.1277C0 15.8143 2.18573 18 4.87244 18H13.1277C15.8143 18 18 15.8143 18 13.1277V4.87244C18 2.18573 15.8143 0 13.1276 0ZM9 13.9217C6.2861 13.9217 4.07826 11.7139 4.07826 9C4.07826 6.2861 6.2861 4.07826 9 4.07826C11.7139 4.07826 13.9217 6.2861 13.9217 9C13.9217 11.7139 11.7139 13.9217 9 13.9217ZM14.0394 5.23897C13.2374 5.23897 12.5851 4.58665 12.5851 3.78465C12.5851 2.98265 13.2374 2.3302 14.0394 2.3302C14.8414 2.3302 15.4939 2.98265 15.4939 3.78465C15.4939 4.58665 14.8414 5.23897 14.0394 5.23897Z"
                  fill="#024742"
                />
                <path
                  d="M9 5.1335C6.8681 5.1335 5.1335 6.86797 5.1335 9C5.1335 11.1319 6.8681 12.8665 9 12.8665C11.132 12.8665 12.8665 11.1319 12.8665 9C12.8665 6.86797 11.132 5.1335 9 5.1335Z"
                  fill="#024742"
                />
                <path
                  d="M14.0394 3.38557C13.8194 3.38557 13.6404 3.56465 13.6404 3.78465C13.6404 4.00465 13.8194 4.18373 14.0394 4.18373C14.2596 4.18373 14.4386 4.00479 14.4386 3.78465C14.4386 3.56451 14.2596 3.38557 14.0394 3.38557Z"
                  fill="#024742"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-12">
          <img src="@/assets/img/about.webp" alt="" class="pic" />
        </div>
      </div>
    </div>

    <div id="adv"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeAbout',

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
.wrap {
  padding-top: 90px;
  padding-bottom: 60px;
  background: white;
  margin-top: 32px;
}
.title {
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  margin-bottom: 22px;
  color: var(--green);
}
.txt {
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: var(--green);
  max-width: 500px;
  margin-bottom: 48px;
}
.pic {
  width: 100%;
  height: 308px;
  object-fit: cover;
  border-radius: 16px;
}
.buttons {
  display: flex;
  align-items: center;
  gap: 20px;
}
.more {
  background: var(--green);
  padding: 11px 0;
  width: 183px;
  text-align: center;
  border-radius: 50px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: white;
  transition: 0.4s;
}
.video {
  background: #f2f2f2;
  padding: 11px 0;
  width: 183px;
  text-align: center;
  border-radius: 50px;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: var(--green);
  transition: 0.4s;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
}
.link {
  width: 100%;
  max-width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
}
.link path {
  transition: 0.4s;
}
.more:hover,
.video:hover {
  background: var(--golden);
  color: black;
  text-decoration: none;
}
.link:hover {
  background: var(--golden);
}
.link:hover path {
  fill: black;
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

.about .more {
  display: none;
}
@media screen and (max-width: 1024px) {
  .txt {
    margin-bottom: 16px;
  }
  .buttons {
    margin-bottom: 24px;
  }
  .wrap {
    padding-bottom: 60px;
    padding-top: 60px;
  }
  .pic {
    height: 220px;
  }
}
</style>
