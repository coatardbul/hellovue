<template>
  <h1>登陆界面</h1>
  <form @submit.prevent="login">
    <div>
      <label>用户名：</label>
      <input type="text" v-model="username">
    </div>
    <div>
      <label>密码：</label>
      <input type="password" v-model="password">
    </div>
    <button>登陆</button>
  </form>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    login() {
      if ("admin" === this.username && "123456" === this.password) {
        this.$router.push("/");
        localStorage.setItem("token","123456");
      }else {
        alert("用户名密码错误");
      }
    }
  }
}
</script>
