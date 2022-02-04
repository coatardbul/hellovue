<template>
  <div>学习一</div>
  <div id="app">
    <button v-on:click="decrease">-</button>
    <span>{{ number }}</span>
    <button v-on:click="increase">+</button>
  </div>
</template>
<script>
export default {
  name: 'Learn1',
  data() {
    return {
      number: 0
    }
  },
  methods: {
    decrease() {
      this.number--;
    },
    increase() {
      this.number++;
    }
  }
}
</script>
