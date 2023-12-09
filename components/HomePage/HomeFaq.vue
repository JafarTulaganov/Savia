<template>
  <div class="wrap">
    <div class="container">
      <Accordion>
        <AccordionItem v-for="item in faq" :key="item.id">
          <template slot="accordion-trigger">
            <p>{{ item.question }}</p>

            <div class="arrow"></div>
          </template>
          <template slot="accordion-content">
            <p v-html="item.answer"></p>
          </template>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>

<script>
import Accordion from '@/components/Accordion.vue'
import AccordionItem from '@/components/AccordionItem.vue'

export default {
  name: 'HomeFaq',

  components: {
    Accordion,
    AccordionItem,
  },

  props: ['faq'],

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.wrap {
  padding: 90px 0;
}
.accordion__content p {
  padding: 38px 24px 34px 24px;
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 155.9%;
  color: var(--green);
}
.arrow {
  width: 100%;
  max-width: 28px;
  height: 28px;
  border-radius: 50%;
  background: white;
  position: relative;
}
.arrow::after {
  width: 10px;
  height: 2px;
  content: '';
  position: absolute;
  top: 50%;
  right: 12px;
  background: var(--green);
  transform: rotate(45deg);
  transition: 0.2s;
}
.arrow::before {
  width: 10px;
  height: 2px;
  content: '';
  position: absolute;
  top: 50%;
  left: 12px;
  background: var(--green);
  transform: rotate(-45deg);
  transition: 0.2s;
}
.accordion__trigger_active .arrow::after {
  right: 8px;
  transform: translateY(-50%) rotate(45deg);
  width: 12px;
}
.accordion__trigger_active .arrow::before {
  left: 8px;
  transform: translateY(-50%) rotate(-45deg);
  width: 12px;
}
.wrap {
  padding: 60px 0;
}
</style>
