<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-xs-12">
          <div class="cardo">
            <div class="left">
              <h4 class="cardo__title">
                {{ $store.state.translations['main.question'] }}
              </h4>
              <div class="cardo__bottom">
                <a :href="`tel:${info.nbm}`" class="tel">{{ info.nbm }}</a>
                <a :href="info.facebook" target="_blank" class="link">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4767 10.0767C19.4767 4.80277 15.2037 0.529686 9.92969 0.529686C4.65571 0.529686 0.382628 4.80277 0.382628 10.0767C0.382628 14.8503 3.84729 18.8154 8.42834 19.5083V12.8485H6.00307V10.0767H8.42834V7.99795C8.42834 5.61119 9.8527 4.26382 12.0085 4.26382C13.0864 4.26382 14.1643 4.4563 14.1643 4.4563V6.80457H12.9709C11.7775 6.80457 11.3925 7.536 11.3925 8.30592V10.0767H14.0488L13.6253 12.8485H11.3925V19.5083C15.9736 18.8154 19.4767 14.8503 19.4767 10.0767Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a :href="info.telegram" target="_blank" class="link">
                  <i class="bx bxl-telegram"></i>
                </a>
                <a :href="info.instagram" target="_blank" class="link">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.42188 5.13089C6.96769 5.13089 5.01201 7.12491 5.01201 9.54076C5.01201 11.9949 6.96769 13.9506 9.42188 13.9506C11.8377 13.9506 13.8317 11.9949 13.8317 9.54076C13.8317 7.12491 11.8377 5.13089 9.42188 5.13089ZM9.42188 12.4168C7.84966 12.4168 6.54587 11.1513 6.54587 9.54076C6.54587 7.96854 7.81131 6.7031 9.42188 6.7031C10.9941 6.7031 12.2595 7.96854 12.2595 9.54076C12.2595 11.1513 10.9941 12.4168 9.42188 12.4168ZM15.0205 4.9775C15.0205 4.4023 14.5603 3.94214 13.9851 3.94214C13.4099 3.94214 12.9498 4.4023 12.9498 4.9775C12.9498 5.5527 13.4099 6.01286 13.9851 6.01286C14.5603 6.01286 15.0205 5.5527 15.0205 4.9775ZM17.9348 6.01286C17.8581 4.63238 17.5514 3.40528 16.5544 2.40827C15.5573 1.41126 14.3303 1.10448 12.9498 1.02779C11.5309 0.951096 7.27446 0.951096 5.85563 1.02779C4.47515 1.10448 3.2864 1.41126 2.25104 2.40827C1.25403 3.40528 0.947256 4.63238 0.870563 6.01286C0.79387 7.43169 0.79387 11.6882 0.870563 13.107C0.947256 14.4875 1.25403 15.6762 2.25104 16.7116C3.2864 17.7086 4.47515 18.0154 5.85563 18.0921C7.27446 18.1688 11.5309 18.1688 12.9498 18.0921C14.3303 18.0154 15.5573 17.7086 16.5544 16.7116C17.5514 15.6762 17.8581 14.4875 17.9348 13.107C18.0115 11.6882 18.0115 7.43169 17.9348 6.01286ZM16.0942 14.6025C15.8258 15.3695 15.2122 15.9447 14.4836 16.2514C13.3332 16.7116 10.649 16.5965 9.42188 16.5965C8.15643 16.5965 5.47217 16.7116 4.36011 16.2514C3.59318 15.9447 3.01798 15.3695 2.7112 14.6025C2.25104 13.4905 2.36608 10.8062 2.36608 9.54076C2.36608 8.31366 2.25104 5.62939 2.7112 4.47899C3.01798 3.7504 3.59318 3.1752 4.36011 2.86843C5.47217 2.40827 8.15643 2.52331 9.42188 2.52331C10.649 2.52331 13.3332 2.40827 14.4836 2.86843C15.2122 3.13686 15.7874 3.7504 16.0942 4.47899C16.5544 5.62939 16.4393 8.31366 16.4393 9.54076C16.4393 10.8062 16.5544 13.4905 16.0942 14.6025Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a :href="info.youtube" target="_blank" class="link">
                  <i class="bx bxl-youtube"></i>
                </a>
              </div>
            </div>
            <div class="right">
              <form @submit.prevent="onSubmit">
                <input
                  v-model="full_name"
                  type="text"
                  class="input"
                  :placeholder="$store.state.translations['main.name']"
                  required
                />
                <input
                  id="number"
                  v-model="nbm"
                  type="text"
                  class="input"
                  :placeholder="$store.state.translations['main.phone']"
                  required
                />
                <button type="submit" class="butn">
                  {{ $store.state.translations['main.send'] }}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-5 col-xs-12 end">
          <h4 class="title">{{ $store.state.translations['main.chant'] }}</h4>
          <p class="sub">
            {{ $store.state.translations['main.chant_txt'] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IMask from 'imask'

import formApi from '@/api/form.js'

export default {
  name: 'HomeForm',

  props: ['info'],

  data() {
    return {
      full_name: '',
      nbm: '',
    }
  },

  mounted() {
    const element = document.getElementById('number')
    const maskOptions = {
      mask: '+{998}(00)000-00-00',
    }
    const mask = IMask(element, maskOptions)

    return mask
  },

  methods: {
    async onSubmit() {
      const formData = {
        full_name: this.full_name,
        nbm: this.nbm,
      }

      if (this.nbm.length > 14) {
        const res = await formApi.sendApplication(formData)

        if (res && res.status === 201) {
          this.$toast.success('Successfully sent')
        } else {
          this.$toast.error('Error')
        }

        this.full_name = ''
        this.nbm = ''
      }
    },
  },
}
</script>

<style scoped>
.wrap {
  padding-bottom: 72px;
}
.left {
  background: url('@/assets/img/form.webp') no-repeat left;
  background-size: 100%;
  padding: 32px 34px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cardo {
  display: grid;
  grid-template-columns: 6fr 4fr;
  background: var(--green);
  border-radius: 12px;
  color: white;
}
.cardo__title {
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
}
.tel {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  border-radius: 12px;
  padding: 14px 24px;
  font-weight: 600;
  font-size: 14px;
  line-height: 12px;
  color: white;
  transition: 0.4s;
}
.tel:hover {
  background: var(--golden);
  color: black;
  text-decoration: none;
}
.cardo__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.link {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  border-radius: 50%;
  max-width: 40px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
  font-size: 20px;
  color: white;
}
.right {
  padding: 24px;
}
.right form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 14px;
}
.input {
  font-weight: 300;
  font-size: 14px;
  line-height: 22px;
  padding: 16px 24px;
  background: rgba(255, 242, 216, 0.1);
  border-radius: 12px;
  color: white;
}
.input::placeholder {
  color: rgba(255, 255, 255, 0.69307);
}
.butn {
  background: white;
  border-radius: 12px;
  padding: 16px 0;
  width: 100%;
  text-align: center;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  color: var(--green);
  transition: 0.4s;
}
.butn:hover {
  background: var(--golden);
  color: black;
}
.link svg path {
  transition: 0.4s;
}
.link:hover {
  background: var(--golden);
  text-decoration: none;
  color: black;
}
.link:hover svg path {
  fill: black;
}
.title {
  font-weight: 700;
  font-size: 55.4913px;
  line-height: 59px;
  color: var(--green);
}
.sub {
  font-weight: 400;
  font-size: 16px;
  line-height: 155.9%;
  color: var(--green);
}
.end {
  padding: 16px 80px 16px 52px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media screen and (max-width: 1024px) {
  .cardo {
    grid-template-columns: repeat(1, 1fr);
  }
  .cardo__bottom {
    justify-content: flex-start;
    gap: 20px;
  }
  .tel {
    display: none;
  }
  .left {
    background: none;
    padding: 18px 18px 0 18px;
  }
  .right {
    padding: 18px;
  }
  .link {
    max-width: 50px;
    height: 50px;
  }
  .cardo__title {
    margin-bottom: 18px;
  }
  .end {
    padding: 24px 16px 0 16px;
  }
  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    margin-bottom: 18px;
    max-width: 70%;
  }
  .sub {
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
  }
  .wrap {
    padding-bottom: 60px;
  }
}
</style>
