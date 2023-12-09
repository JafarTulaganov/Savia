<template>
  <div class="wrap">
    <div class="container container-extra-small">
      <div class="items">
        <div class="item active">
          <ICountUp
            class="num"
            :delay="delay"
            :endVal="endVal"
            :options="options"
            @ready="onReady"
          />
          <p class="sub">{{ $store.state.translations['about.txt-1'] }}</p>
        </div>
        <div class="item">
          <ICountUp
            class="num"
            :delay="delay"
            :endVal="endVal1"
            :options="options"
            @ready="onReady"
          />
          <p class="sub">{{ $store.state.translations['about.txt-2'] }}</p>
        </div>
        <div class="item">
          <ICountUp
            class="num"
            :delay="delay"
            :endVal="endVal2"
            :options="options"
            @ready="onReady"
          />
          <p class="sub">{{ $store.state.translations['about.txt-3'] }}</p>
        </div>
        <div class="item">
          <ICountUp
            class="num"
            :delay="delay"
            :endVal="endVal3"
            :options="options"
            @ready="onReady"
          />
          <p class="sub">{{ $store.state.translations['about.txt-4'] }}</p>
        </div>
      </div>
      <p class="txt">
        {{ $store.state.translations['about.sub'] }}
      </p>
    </div>
  </div>
</template>

<script>
import ICountUp from 'vue-countup-v2'

export default {
  name: 'AboutInfo',

  components: {
    ICountUp,
  },

  data() {
    return {
      delay: 1000,
      endVal: 1000,
      endVal1: 300,
      endVal2: 600,
      endVal3: 150,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: '',
      },
    }
  },
  methods: {
    // onReady: function (instance, CountUp) {
    //   const that = this
    //   instance.update(that.endVal + 100)
    // },
  },
}
</script>

<style scoped>
.wrap {
  background: #eff2f2;
  padding: 64px 0 64px 0;
  margin: 48px 0;
}
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 80%;
  margin: 0 auto 55px auto;
}
.num {
  font-weight: 700;
  font-size: 65px;
  line-height: 120%;
  color: var(--green);
  opacity: 0.2;
  margin-bottom: 12px;
  transition: 0.4s;
  z-index: 2;
  position: relative;
}
.sub {
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: var(--green);
  transition: 0.4s;
  opacity: 0;
  visibility: hidden;
  margin-left: 6px;
  z-index: 2;
  position: relative;
}
.txt {
  position: relative;
  z-index: 2;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: var(--green);
}
.item {
  position: relative;
}
.item:hover {
  cursor: pointer;
}
.item:hover .num {
  opacity: 1;
}
.item:hover .sub {
  opacity: 1;
  visibility: visible;
}
.item::after {
  width: 203px;
  height: 300px;
  background: #e1e8e8;
  border-radius: 225px;
  content: '';
  position: absolute;
  top: -32px;
  left: 36px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.4s;
  z-index: 1;
}
.item:hover::after {
  opacity: 1;
  visibility: visible;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding-top: 60px;
    margin-top: 0;
  }
  .items {
    gap: 0px;
    max-width: 90%;
    margin-bottom: 55px;
  }
  .item {
    text-align: center;
  }
  .item::after {
    width: 40px;
    height: 80px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .num {
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
  }
  .sub {
    font-weight: 400;
    font-size: 10px;
    line-height: 6px;
    white-space: nowrap;
  }
  .txt {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  }
}
</style>
