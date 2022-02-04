<template>
  <h1>{{msg}}</h1>
  <form @submit.prevent="post">
    <input type="text" v-model.lazy="msg">
    <button>提交表单</button>
  </form>
</template>
<script>
export default {
  name: "Learn3",
  data() {
    return {
      msg: "ssss"
    }
  },
  methods: {
    post() {
      console.log("sb")
    }
  }
}
</script>
