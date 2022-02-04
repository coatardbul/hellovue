<template>
  <img v-bind:src="src" alt="vue ss">
<!--  网络图片地址不显示问题，以后在看-->
  <img src="../assets/5.jpeg" alt="vue ss">
  <button v-for="item,index in list" :key='item'
          @click="changePic(index)">
    {{ index + 1 }}
  </button>
</template>
<script>
export default {
  name: "Learn2",
  data() {
    return {
      src: "../assets/1.jpeg",
      list: ["../assets/1.jpeg",
        "../assets/2.jpeg",
        "../assets/3,jpeg",
        "../assets/4.jpeg",
        "../assets/5.jpeg"
      ]
    }
  },
  methods: {
    changePic(i) {
      this.src = this.list[i];
    }
  }
}
</script>
