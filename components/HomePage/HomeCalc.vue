<template>
  <div id="calc" class="wrap">
    <div class="container">
      <div class="back">
        <div class="min-width">
          <div class="top">
            <img src="@/assets/img/logo/brand.svg" alt="" class="brand" />
          </div>
          <div class="selects">
            <form @submit.prevent="onSubmit" action="">
              <div class="upper">
                <p class="sup">
                  {{ $store.state.translations['main.question'] }}
                </p>
              </div>

              <input
                v-model="full_name"
                type="text"
                :placeholder="$store.state.translations['main.name']"
                required
              />
              <input
                id="keitai"
                v-model="nbm"
                type="text"
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
    </div>
  </div>
</template>

<script>
import IMask from 'imask'

import formApi from '@/api/form.js'

export default {
  name: 'HomeCalc',

  data() {
    return {
      nbm: '',
      full_name: '',
    }
  },

  mounted() {
    const element = document.getElementById('keitai')
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
  padding-bottom: 120px;
}
.back {
  background: url(@/assets/img/calc.webp) no-repeat center;
  background-size: cover;
  border-radius: 16px;
  padding: 38px 42px;
  color: white;
}
.top {
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 24px;
}
.brand {
  width: 84px;
  object-fit: contain;
  height: auto;
  margin-bottom: 24px;
}
.title {
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
}
.txt {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  max-width: 616px;
  margin-bottom: 32px;
}
.sup {
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 0;
}
.upper {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.select,
.el-select {
  background: #036b64;
  border-radius: 8px;
  padding: 10px 18px;
  max-width: 400px;
}

.butn {
  font-weight: 800;
  font-size: 19.0728px;
  line-height: 24px;
  color: var(--green);
  background: white;
  border-radius: 54px;
  transition: 0.4s;
  text-align: center;
  border-radius: 14.3046px;
  padding: 20px 24px;
}
.butn:hover {
  background: var(--golden);
  color: black;
}
.min-width {
  min-width: 400px;
}
.min-width input {
  background: rgba(255, 242, 216, 0.1);
  border-radius: 14.3046px;
  padding: 20px 24px;
  font-weight: 400;
  font-size: 16.6887px;
  line-height: 27px;
}
.min-width input::placeholder {
  color: rgba(255, 255, 255, 0.69307);
}
.min-width form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding-bottom: 60px;
  }
  .back {
    background-image: none;
    background: var(--green);
    display: block;
    padding: 24px;
  }
  .butn {
    border-radius: 12px;
  }
  .min-width {
    min-width: 100%;
  }
  .back .row {
    margin: 0 !important;
  }
  .upper {
    margin-bottom: 0px;
  }
}
</style>
