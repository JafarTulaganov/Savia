<template>
  <div class="wrap" id="navbar">
    <div class="top">
      <div class="container container-big">
        <div class="left">
          <div class="brand__wrap">
            <Nuxt-link :to="`/${$route.params.lang}`">
              <img src="@/assets/img/logo/brand.svg" alt="" class="brand" />
            </Nuxt-link>
          </div>
          <div class="links">
            <ul>
              <li>
                <Nuxt-link class="link" :to="`/${$route.params.lang}/about`">{{
                  $store.state.translations['main.about']
                }}</Nuxt-link>
              </li>
              <li>
                <Nuxt-link class="link" :to="`/${$route.params.lang}/#calc`">{{
                  $store.state.translations['main.request']
                }}</Nuxt-link>
              </li>
              <li>
                <Nuxt-link class="link" :to="`/${$route.params.lang}/#show`">{{
                  $store.state.translations['main.showroom']
                }}</Nuxt-link>
              </li>
              <li>
                <Nuxt-link class="link" :to="`/${$route.params.lang}/#adv`">{{
                  $store.state.translations['main.why']
                }}</Nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <div class="nav__lang">
            <p class="current__lang" @click="langHandle = !langHandle">
              {{ $route.params.lang }} <i class="bx bx-chevron-down"></i>
            </p>
            <div class="lang__drop" :class="{ show: langHandle }">
              <p
                :class="{ disable: $route.params.lang == 'uz' }"
                @click="changeLang('uz')"
                class="next__lang"
              >
                O'zbekcha
              </p>
              <p
                :class="{ disable: $route.params.lang == 'ru' }"
                @click="changeLang('ru')"
                class="next__lang"
              >
                Русский
              </p>
              <p
                :class="{ disable: $route.params.lang == 'en' }"
                @click="changeLang('en')"
                class="next__lang"
              >
                English
              </p>
            </div>
          </div>

          <button class="butn" @click="activeInput()">
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7111 18.2168L14.0273 13.2662C15.2316 11.8113 15.8914 9.98069 15.8914 8.07499C15.8914 3.62251 12.3269 0 7.94571 0C3.56452 0 0 3.62251 0 8.07499C0 12.5275 3.56452 16.15 7.94571 16.15C9.59048 16.15 11.1579 15.6458 12.4979 14.6888L17.2173 19.677C17.4146 19.8852 17.6799 20 17.9642 20C18.2333 20 18.4886 19.8957 18.6824 19.7061C19.0942 19.3034 19.1074 18.6357 18.7111 18.2168ZM7.94571 2.10652C11.1841 2.10652 13.8186 4.78391 13.8186 8.07499C13.8186 11.3661 11.1841 14.0435 7.94571 14.0435C4.70732 14.0435 2.07279 11.3661 2.07279 8.07499C2.07279 4.78391 4.70732 2.10652 7.94571 2.10652Z"
                fill="white"
              />
            </svg>
          </button>
          <NuxtLink :to="`/${$route.params.lang}/cart`" class="butn">
            <div v-if="$store.state.cart.length > 0" class="banshee"></div>
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5933 19.9675C11.5933 21.09 10.7009 22 9.60013 22C8.49934 22 7.607 21.09 7.607 19.9675C7.607 18.8449 8.49935 17.9349 9.60014 17.9349C10.7009 17.9349 11.5933 18.8449 11.5933 19.9675ZM17.6705 17.9349C16.5697 17.9349 15.6774 18.8449 15.6774 19.9675C15.6774 21.09 16.5697 22 17.6705 22C18.7713 22 19.6636 21.09 19.6636 19.9675C19.6636 18.8449 18.7713 17.9349 17.6705 17.9349ZM23.8574 8.39338L21.4049 15.8268C21.4049 15.8268 21.2018 16.93 20.1675 16.93C19.1331 16.93 9.01774 16.93 7.78333 16.93C6.54893 16.93 6.49705 15.5473 6.49705 15.5473C6.49705 15.5473 5.18115 5.59168 5.11594 4.99023C5.05073 4.38877 4.29646 3.94298 4.29646 3.94298L1.05112 2.39706C-0.725667 1.44955 0.0819592 -0.353279 1.05112 0.0607856C5.16632 2.04042 7.07796 3.01513 7.20096 3.79489C7.32544 4.57616 7.54179 6.45758 7.54179 6.45758V6.46966C7.56698 6.46211 7.58476 6.45758 7.58476 6.45758C7.58476 6.45758 20.2045 6.45758 22.7534 6.45758C24.585 6.45758 23.8574 8.39641 23.8574 8.39338ZM20.3097 12.5325L20.2845 12.534H8.27829L8.52576 14.5348H19.7259L20.3097 12.5325ZM21.4789 8.49766H7.78185L8.04563 10.636C10.673 10.636 18.367 10.636 20.8595 10.636L21.4789 8.49766Z"
                fill="white"
              />
            </svg>
          </NuxtLink>
          <a :href="`tel:${info.nbm}`" class="butn connect__btn">{{
            $store.state.translations['main.connect']
          }}</a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="container container-big">
        <div class="rel">
          <button class="catalog__btn" @click="dropHandle = !dropHandle">
            <svg
              width="20"
              height="14"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9473 1.79997C15.0713 1.70074 15.15 1.55805 15.15 1.4C15.15 1.24195 15.0713 1.09926 14.9473 1.00003C14.8241 0.90149 14.6629 0.85 14.5 0.85H1.5C1.33711 0.85 1.17591 0.90149 1.05274 1.00003C0.928702 1.09926 0.85 1.24195 0.85 1.4C0.85 1.55805 0.928702 1.70074 1.05274 1.79997C1.17591 1.89851 1.33711 1.95 1.5 1.95H14.5C14.6629 1.95 14.8241 1.89851 14.9473 1.79997ZM12.5 4.45H1.5C1.33711 4.45 1.17591 4.50149 1.05274 4.60003C0.928702 4.69926 0.85 4.84195 0.85 5C0.85 5.15805 0.928702 5.30074 1.05274 5.39997C1.17591 5.49851 1.33711 5.55 1.5 5.55H12.5C12.6629 5.55 12.8241 5.49851 12.9473 5.39997C13.0713 5.30074 13.15 5.15805 13.15 5C13.15 4.84195 13.0713 4.69926 12.9473 4.60003C12.8241 4.50149 12.6629 4.45 12.5 4.45ZM8 8.05H1.5C1.33711 8.05 1.17591 8.10149 1.05274 8.20003C0.928702 8.29926 0.85 8.44195 0.85 8.6C0.85 8.75805 0.928702 8.90074 1.05274 8.99997C1.17591 9.09851 1.33711 9.15 1.5 9.15H8C8.16289 9.15 8.32409 9.09851 8.44726 8.99997C8.5713 8.90074 8.65 8.75805 8.65 8.6C8.65 8.44195 8.5713 8.29926 8.44726 8.20003C8.32409 8.10149 8.16289 8.05 8 8.05Z"
                fill="white"
                stroke="white"
                stroke-width="0.3"
              />
            </svg>
            {{ $store.state.translations['main.catalog'] }}
          </button>
          <div id="dropdown" class="dropdown" :class="{ show: dropHandle }">
            <div class="drop__wrap"></div>
            <div class="drop__body row">
              <div class="drop__left col-6">
                <button
                  v-for="item in categories"
                  :key="item.id"
                  class="drop__btn"
                  @click="categoriesChild = item"
                >
                  {{ item.name }} <i class="bx bx-chevron-right"></i>
                </button>
              </div>
              <div class="drop__right col-6">
                <div v-for="child in categoriesChild?.children" :key="child.id">
                  <ul>
                    <li>
                      <NuxtLink
                        :to="`/${$route.params.lang}/products/${categoriesChild.id}?category=${child.id}`"
                        class="drop__link"
                        >{{ child.name }}</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom__links">
          <ul>
            <li>
              <Nuxt-link
                :to="`/${$route.params.lang}/products/${radiators.id}/?category=${radiators.id}`"
                class="bottom__link"
              >
                <svg
                  width="28"
                  height="19"
                  viewBox="0 0 28 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.975 0C10.1406 0 9.46187 0.645498 9.46187 1.43911V17.5609C9.46187 18.3545 10.1406 19 10.975 19C11.8092 19 12.4881 18.3545 12.4881 17.5609V1.43911C12.4881 0.645498 11.8094 0 10.975 0Z"
                    fill="#024742"
                  />
                  <path
                    d="M15.642 0C14.8075 0 14.1288 0.645498 14.1288 1.43911V17.5609C14.1288 18.3545 14.8077 19 15.642 19C16.4764 19 17.1551 18.3545 17.1551 17.5609V1.43911C17.1551 0.645498 16.4764 0 15.642 0Z"
                    fill="#024742"
                  />
                  <path
                    d="M20.3089 0C19.4747 0 18.7958 0.645498 18.7958 1.43911V17.5609C18.7958 18.3545 19.4747 19 20.3089 19C21.1433 19 21.8223 18.3545 21.8223 17.5609V1.43911C21.8223 0.645498 21.1433 0 20.3089 0Z"
                    fill="#024742"
                  />
                  <path
                    d="M4.7947 7.9595V17.5609C4.7947 18.3545 5.47362 19 6.30805 19C7.14228 19 7.82119 18.3545 7.82119 17.5609V1.43911C7.82119 0.645498 7.14228 0 6.30805 0C5.47362 0 4.7947 0.645498 4.7947 1.43911V3.27584H1.64196V4.83747H0V6.39788H1.64196V7.9595H4.7947Z"
                    fill="#024742"
                  />
                  <path
                    d="M26.4892 3.27584V1.43911C26.4892 0.645498 25.8103 0 24.9761 0C24.1416 0 23.4629 0.645498 23.4629 1.43911V17.5609C23.4629 18.3545 24.1416 19 24.9761 19C25.8103 19 26.4892 18.3545 26.4892 17.5609V4.83625H28V3.27584H26.4892Z"
                    fill="#024742"
                  />
                </svg>
                {{ $store.state.translations['main.radiators'] }}
              </Nuxt-link>
            </li>
            <li>
              <Nuxt-link
                :to="`/${$route.params.lang}/shifts`"
                class="bottom__link"
              >
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.8346 13.9644C16.2952 13.2532 15.3191 12.2268 15.3191 12.2268C15.3191 12.2268 14.3431 13.2532 13.8037 13.9645C13.0195 14.9984 12.6383 15.7925 12.6383 16.3922C12.6383 17.8301 13.8409 19 15.3191 19C16.7974 19 18 17.8301 18 16.3922C18 15.7925 17.6188 14.9984 16.8346 13.9644Z"
                    fill="#024742"
                  />
                  <path
                    d="M12.0456 5.57054L11.8518 5.57251C11.6021 5.57505 11.3673 5.48251 11.1899 5.31184C11.0126 5.14114 10.9149 4.91347 10.9149 4.6708V2.79412H9.19149V1.67647H12.0638V0.558824H9.19149V0H8.04255V0.558824H5.17021V1.67647H8.04255V2.79412H6.31915V4.53258C6.31915 5.11469 5.83235 5.58824 5.23394 5.58824H3.78077C3.81248 5.75257 3.82979 5.92174 3.82979 6.09486V8.99337C3.82979 9.16649 3.81244 9.33567 3.78077 9.5H12.0638C12.6974 9.5 13.2128 10.0014 13.2128 10.6176V11.1765H17.234V10.6176C17.234 7.83467 14.9065 5.57054 12.0456 5.57054Z"
                    fill="#024742"
                  />
                  <path
                    d="M1.0111 4.47059H0V10.6176H1.0111C1.93178 10.6176 2.68085 9.88898 2.68085 8.99337V6.09486C2.68085 5.19926 1.93178 4.47059 1.0111 4.47059Z"
                    fill="#024742"
                  />
                </svg>
                {{ $store.state.translations['main.shifts'] }}
              </Nuxt-link>
            </li>
            <li>
              <Nuxt-link
                :to="`/${$route.params.lang}/baths`"
                class="bottom__link"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.32922 18.1345C2.158 18.3903 2.2274 18.7359 2.4842 18.9064C2.5795 18.9697 2.68717 19 2.79368 19C2.97425 19 3.15147 18.9129 3.25914 18.752L3.68504 18.1157C3.34028 17.965 3.0118 17.7839 2.70341 17.5754L2.32922 18.1345Z"
                    fill="#024742"
                  />
                  <path
                    d="M16.2967 17.5754C15.9883 17.7839 15.6598 17.965 15.3151 18.1157L15.7409 18.752C15.8487 18.9129 16.0258 19 16.2064 19C16.3129 19 16.4206 18.9697 16.5159 18.9064C16.7727 18.7359 16.8421 18.3903 16.6709 18.1345L16.2967 17.5754Z"
                    fill="#024742"
                  />
                  <path
                    d="M1.11773 10.767V12.5059C1.11773 15.2682 3.37392 17.5156 6.14713 17.5156H12.853C15.6262 17.5156 17.8824 15.2682 17.8824 12.5059V12.1817H8.64849C6.0506 12.1817 3.52182 11.7059 1.11773 10.767Z"
                    fill="#024742"
                  />
                  <path
                    d="M2.98025 6.56053V2.04102C2.98025 1.52946 3.39806 1.11328 3.91162 1.11328H4.65672C5.17027 1.11328 5.58809 1.52946 5.58809 2.04102V2.30512C4.72422 2.55305 4.09789 3.36063 4.09789 4.29856V4.45312C4.09789 4.76054 4.3481 5.00977 4.65672 5.00977H7.6371C7.94572 5.00977 8.19592 4.76054 8.19592 4.45312V4.26758C8.19592 3.33513 7.56471 2.54719 6.70573 2.30423V2.04102C6.70573 0.9156 5.78654 0 4.65672 0H3.91162C2.78179 0 1.8626 0.9156 1.8626 2.04102V6.11355C1.9506 6.14049 2.03748 6.17214 2.12276 6.20981C2.40623 6.33531 2.69216 6.45202 2.98025 6.56053Z"
                    fill="#024742"
                  />
                  <path
                    d="M17.8124 8.70278H8.64849C6.22831 8.70278 3.88077 8.20644 1.67011 7.22768C1.06979 6.96279 0.368985 7.23117 0.102651 7.82796C-0.163684 8.42479 0.106115 9.12401 0.705284 9.3893C3.22173 10.5036 5.89395 11.0685 8.64853 11.0685H17.8125C18.4685 11.0685 19 10.539 19 9.8856C18.9999 9.23218 18.4684 8.70278 17.8124 8.70278Z"
                    fill="#024742"
                  />
                </svg>
                {{ $store.state.translations['main.baths'] }}
              </Nuxt-link>
            </li>
            <li>
              <Nuxt-link
                :to="`/${$route.params.lang}/toilet`"
                class="bottom__link"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.33335 0.95V0.316654C6.33335 0.141758 6.19159 0 6.01669 0H0.316691C0.141795 0 0 0.141758 0 0.316654V0.95C0 1.1249 0.141758 1.26665 0.316654 1.26665H6.01665C6.19159 1.26665 6.33335 1.1249 6.33335 0.95Z"
                    fill="#024742"
                  />
                  <path
                    d="M9.60769 13.8637C7.88504 13.2145 6.62785 11.7958 6.38404 10.0985C6.36619 9.93733 6.22951 9.81569 6.06738 9.81665H1.634C1.45914 9.81439 1.31553 9.95433 1.31326 10.1292C1.31304 10.1476 1.31438 10.1659 1.31731 10.184C1.58331 11.647 2.94181 12.2867 3.79996 12.958C5.00646 13.908 5.89946 15.4913 5.44981 18.6327C5.42183 18.8053 5.53906 18.9679 5.71169 18.9959C5.7298 18.9988 5.74813 19.0002 5.76646 19H8.68931C8.80717 19.0008 8.91575 18.9362 8.97115 18.8321C9.65831 17.48 9.81665 15.808 9.81665 14.1613C9.81662 14.028 9.73305 13.909 9.60769 13.8637Z"
                    fill="#024742"
                  />
                  <path
                    d="M5.7 8.86665V4.11665H6.33335C6.50824 4.11665 6.65 3.9749 6.65 3.8C6.65 3.6251 6.50824 3.48335 6.33335 3.48335H5.7V2.21665C5.7 2.04176 5.55821 1.9 5.38335 1.9H0.95C0.775104 1.9 0.633346 2.04176 0.633346 2.21665V8.86665C0.633346 9.04155 0.775104 9.18331 0.95 9.18331H5.38335C5.55824 9.18335 5.7 9.04155 5.7 8.86665Z"
                    fill="#024742"
                  />
                  <path
                    d="M14.25 14.4843C14.2515 14.3094 14.1109 14.1665 13.936 14.165C13.9214 14.1649 13.9067 14.1658 13.8922 14.1677C13.5918 14.2186 13.2879 14.2462 12.9833 14.25H11.7167C11.4112 14.2495 11.1063 14.2251 10.8047 14.1772C10.6312 14.1544 10.4722 14.2766 10.4495 14.45C10.4476 14.4645 10.4467 14.4792 10.4468 14.4938C10.4404 15.8869 10.1874 17.2677 9.69946 18.5725C9.63823 18.7363 9.72139 18.9188 9.8852 18.98C9.919 18.9926 9.9547 18.9994 9.99077 19H14.7091C14.884 18.9984 15.0245 18.8554 15.0229 18.6805C15.0225 18.6413 15.0149 18.6026 15.0005 18.5662C14.5112 17.2606 14.2571 15.8786 14.25 14.4843Z"
                    fill="#024742"
                  />
                  <path
                    d="M18.525 8.23335H6.80835C6.54602 8.23335 6.33335 8.44602 6.33335 8.70835C6.33335 8.97067 6.54602 9.18335 6.80835 9.18335H18.525C18.7873 9.18335 19 8.97067 19 8.70835C19 8.44598 18.7874 8.23335 18.525 8.23335Z"
                    fill="#024742"
                  />
                  <path
                    d="M17.4136 9.82304C17.3917 9.81855 17.3694 9.81643 17.347 9.81665H7.353C7.17814 9.81313 7.03353 9.95199 7.03 10.1269C7.02952 10.1503 7.03167 10.1737 7.03635 10.1967C7.42269 12.1347 9.37019 13.6167 11.7167 13.6167H12.9833C15.3298 13.6167 17.2773 12.1347 17.6605 10.1967C17.6955 10.0253 17.5849 9.85803 17.4136 9.82304Z"
                    fill="#024742"
                  />
                </svg>
                {{ $store.state.translations['main.toilet'] }}
              </Nuxt-link>
            </li>
            <!-- <li>
              <Nuxt-link to="/nonstandart" class="bottom__link">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6111 0H3.16667C2.32758 0.00250598 1.52359 0.336941 0.930264 0.930264C0.336941 1.52359 0.00250598 2.32758 0 3.16667V11.6111C0.00250598 12.4502 0.336941 13.2542 0.930264 13.8475C1.52359 14.4408 2.32758 14.7753 3.16667 14.7778H11.6111C12.4502 14.7753 13.2542 14.4408 13.8475 13.8475C14.4408 13.2542 14.7753 12.4502 14.7778 11.6111V3.16667C14.7753 2.32758 14.4408 1.52359 13.8475 0.930264C13.2542 0.336941 12.4502 0.00250598 11.6111 0ZM9.5 8.44444H8.44444V9.5C8.44444 9.77995 8.33323 10.0484 8.13528 10.2464C7.93732 10.4443 7.66884 10.5556 7.38889 10.5556C7.10894 10.5556 6.84045 10.4443 6.6425 10.2464C6.44454 10.0484 6.33333 9.77995 6.33333 9.5V8.44444H5.27778C4.99783 8.44444 4.72934 8.33323 4.53139 8.13528C4.33343 7.93732 4.22222 7.66884 4.22222 7.38889C4.22222 7.10894 4.33343 6.84045 4.53139 6.6425C4.72934 6.44454 4.99783 6.33333 5.27778 6.33333H6.33333V5.27778C6.33333 4.99783 6.44454 4.72934 6.6425 4.53139C6.84045 4.33343 7.10894 4.22222 7.38889 4.22222C7.66884 4.22222 7.93732 4.33343 8.13528 4.53139C8.33323 4.72934 8.44444 4.99783 8.44444 5.27778V6.33333H9.5C9.77995 6.33333 10.0484 6.44454 10.2464 6.6425C10.4443 6.84045 10.5556 7.10894 10.5556 7.38889C10.5556 7.66884 10.4443 7.93732 10.2464 8.13528C10.0484 8.33323 9.77995 8.44444 9.5 8.44444Z"
                    fill="#024742"
                  />
                  <path
                    d="M13.7222 19H4.22222C3.94227 19 3.67379 18.8888 3.47583 18.6908C3.27788 18.4929 3.16667 18.2244 3.16667 17.9444C3.16667 17.6645 3.27788 17.396 3.47583 17.1981C3.67379 17.0001 3.94227 16.8889 4.22222 16.8889H13.7222C14.5621 16.8889 15.3675 16.5553 15.9614 15.9614C16.5553 15.3675 16.8889 14.5621 16.8889 13.7222V4.22222C16.8889 3.94227 17.0001 3.67379 17.1981 3.47583C17.396 3.27788 17.6645 3.16667 17.9444 3.16667C18.2244 3.16667 18.4929 3.27788 18.6908 3.47583C18.8888 3.67379 19 3.94227 19 4.22222V13.7222C18.9983 15.1215 18.4417 16.4629 17.4523 17.4523C16.4629 18.4417 15.1215 18.9983 13.7222 19Z"
                    fill="#024742"
                  />
                </svg>
                {{ $store.state.translations['main.nonstandart'] }}
              </Nuxt-link>
            </li> -->
          </ul>
        </div>
      </div>
    </div>

    <div id="search" class="search" :class="{ show: searchHandle }">
      <div class="search__wrao" @click="searchHandle = !searchHandle"></div>
      <div class="search__body">
        <h4 class="search__title">
          {{ $store.state.translations['main.search'] }}
        </h4>
        <div class="search__card">
          <div class="search__top">
            <p>
              <i class="bx bx-search"></i>
            </p>
            <input
              ref="searchInput"
              v-model="searcher"
              type="text"
              class="search__input"
              :placeholder="$store.state.translations['main.search']"
              autofocus
            />
          </div>
          <div class="search__body">
            <ul>
              <li
                class="search__field"
                v-for="item in findItems"
                :key="item.id"
              >
                <NuxtLink
                  class="search__link"
                  :to="`/${$route.params.lang}/product/${item.slug}`"
                >
                  {{ item.product.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchApi from '@/api/search.js'
import categoriesApi from '@/api/categories.js'

import infoApi from '@/api/info.js'

export default {
  name: 'DesktopNavbar',

  data() {
    return {
      dropShow: 1,
      dropHandle: false,
      searchHandle: false,
      langHandle: false,
      value: [],
      searcher: '',
      findItems: [],
      categories: [],
      categoriesChild: [],
      radiators: [],
      info: {},
    }
  },

  async fetch() {
    const categories = await categoriesApi.getCategories(
      this.$axios,
      this.$route.params.lang
    )
    const info = await infoApi.getInfo(this.$axios)
    const radiators = await categoriesApi.getRadiators(this.$axios)

    this.categories = categories
    this.categoriesChild = categories[0]
    this.info = info
    this.radiators = radiators
  },

  computed: {
    getLang() {
      return this.$store.getters.language
    },
  },

  watch: {
    $route() {
      this.dropHandle = false
      this.searchHandle = false
      this.langHandle = false
    },

    searcher(val) {
      if (val.length > 2) {
        const seek = {}
        seek.search = val
        seek.category = ''
        this.searchAny(seek)
      }
    },

    searchHandle(val) {
      if (!val) {
        this.findItems = {}
        this.searcher = ''
      }
    },
  },

  mounted() {
    const navbar = document.getElementById('navbar')
    const dropdown = document.getElementById('dropdown')

    window.addEventListener('wheel', function (event) {
      if (event.deltaY < 0) {
        navbar.classList.remove('scroll-header')
        dropdown.style.display = 'block'
      } else if (event.deltaY > 0) {
        navbar.classList.add('scroll-header')
        dropdown.style.display = 'none'
      }
    })
  },

  methods: {
    async searchAny(value) {
      this.findItems = await searchApi.getSearch(value)
    },

    activeInput() {
      this.searchHandle = !this.searchHandle
      setTimeout(() => {
        this.$refs.searchInput.focus()
      }, 500)
    },

    changeLang(code) {
      this.$store.dispatch('actionLangRu', code)
      this.$router.replace({
        params: {
          lang: code,
        },
        query: this.$route.query,
      })
      localStorage.setItem('Lang', code)
    },
  },
}
</script>

<style scoped>
.top,
.bottom {
  width: 100%;
}
.search__field {
  padding-top: 12px;
}
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  transition: 0.4s;
}
.top {
  padding: 14px 0;
  background: var(--green);
  z-index: 88;
  position: relative;
}
.top .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left {
  display: flex;
  align-items: center;
  gap: 50px;
}
.links ul {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 40px;
}
.bottom {
  padding: 10px 0;
  background: white;
  transition: 0.4s;
  position: relative;
  z-index: 80;
  backdrop-filter: blur(15px);
}
.scroll-header .bottom {
  transform: translateY(-100%);
}
.scroll-header .top {
  transition: 0.4s;
  backdrop-filter: blur(15px);
}
.bottom .container {
  display: flex;
  align-items: center;
  gap: 53px;
}
.bottom__links ul {
  display: flex;
  align-items: center;
  margin: 0;
}
.bottom__link {
  padding: 0px 28px;
  border-right: 1px solid #02474220;
}
.bottom ul li:last-child .bottom__link {
  border-right: 0;
}
.bottom ul li:first-child .bottom__link {
  padding-left: 0;
}
.brand {
  width: 120px;
  height: auto;
  object-fit: contain;
}
.link {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: white;
  transition: 0.4s;
  position: relative;
}
.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0%;
  height: 2px;
  background: var(--golden);
  transition: 0.4s;
}
.link:hover {
  text-decoration: none;
  color: var(--golden);
}
.link:hover::after {
  width: 50%;
}
.nuxt-link-exact-active {
  color: var(--golden);
}
.nuxt-link-exact-active::after {
  width: 50%;
}
.butn {
  background: #036b64;
  border-radius: 10px;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: 0.4s;
  position: relative;
}
.banshee {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ff5b5b;
  position: absolute;
  top: -2px;
  right: -2px;
  z-index: 999;
}
.butn:hover {
  background: var(--golden);
  color: black;
  text-decoration: none;
}
.butn svg path {
  transition: 0.4s;
}
.butn:hover svg path {
  fill: black;
}
.right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.connect__btn {
  width: initial;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: white;
  padding: 10px 16px;
}

.catalog__btn {
  background: var(--green);
  border-radius: 10px;
  color: white;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: -0.03em;
  padding: 8px 0;
  width: 120px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  transition: 0.4s;
}
.catalog__btn:hover {
  background: var(--golden);
  color: black;
}
.catalog__btn:hover svg path {
  fill: black;
  stroke: black;
}
.catalog__btn svg {
  width: 20px;
  height: 16px;
}
.catalog__btn svg path {
  transition: 0.4s;
  width: 20px;
}
.bottom__link {
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: var(--green);
  display: flex;
  gap: 8px;
  align-items: center;
  position: relative;
}
.bottom__link:hover {
  text-decoration: none;
}
.rel {
  position: relative;
}
.dropdown {
  position: absolute;
  top: 56px;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.2s;
}
.drop__wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: 0.2s;
}
.dropdown.up {
  transform: translateY(-56px);
}
.drop__body {
  position: absolute;
  top: 0px;
  width: 100%;
  min-width: 630px;
  max-width: 730px;
  background: white;
  border-radius: 16px;
  padding: 24px 32px;
  -webkit-box-shadow: 0px 3px 12px -4px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 3px 12px -4px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 3px 12px -4px rgba(34, 60, 80, 0.2);
}
.dropdown.show {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
}
.drop__left {
  display: flex;
  flex-direction: column;
}
.drop__right {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.drop__btn {
  padding: 8px 0;
  border-bottom: 1px solid #02474220;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: var(--green);
  white-space: nowrap;
}
.drop__btn:first-child {
  padding-top: 0;
}
.drop__btn:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}
.drop__right ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 72px;
  margin: 0;
}
.drop__link {
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: var(--green);
}
.drop__link:hover {
  text-decoration: none;
}
.search {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.4s;
}
.search.show {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
}
.search__wrao {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.305);
}
.search__body {
  z-index: 99;
  position: relative;
}
.search__card {
  background: white;
  border-radius: 24px;
  padding: 16px 28px;
  width: 100%;
  min-width: 684px;
}
.search__card ul {
  margin: 0%;
}
.search__title {
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;
  color: white;
  text-align: center;
  margin-bottom: 30px;
}
.search__top {
  display: flex;
  align-items: center;
  gap: 16px;
}
.search__top p {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search__input {
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
}
.search__input::placeholder {
  color: #757575;
}
.search__sup {
  display: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  margin-bottom: 22px;
}
.search__body ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.search__link {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: black !important;
}
.nav__lang {
  position: relative;
}
.current__lang {
  padding: 8px 24px;
  background: #036b64;
  border: 0.93236px solid #036b64;
  backdrop-filter: blur(9.25px);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
  text-transform: capitalize;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 500;
  font-size: 14.0318px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: -0.333925px;
  color: #ffffff;
  cursor: pointer;
}
.lang__drop {
  position: absolute;
  top: 110%;
  left: 0;
  padding: 8px 24px;
  background: #036b64;
  border: 0.93236px solid #036b64;
  backdrop-filter: blur(9.25px);
  border-radius: 10px;
  text-transform: capitalize;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 500;
  font-size: 14.0318px;
  line-height: 21px;
  letter-spacing: -0.333925px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  display: none;
}
.lang__drop.show {
  display: flex;
}
.lang__drop p {
  cursor: pointer;
}
.disable {
  pointer-events: none;
}
</style>
