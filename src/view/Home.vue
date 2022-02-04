<template>
  <img alt="Vue logo" src="../assets/pic.jpeg">
  <div>主页</div>
   <router-link to="/Learn1">学习一</router-link>  |
  <router-link to="/Learn2">学习二</router-link>  |
  <router-link to="/Learn3">学习三</router-link>  |
  <router-link to="/Learn4">学习四</router-link>  |
  <router-link to="/Learn5">学习五</router-link>  |
  <router-link to="/Learn6">学习六</router-link>  |
  <router-link to="/Learn7">学习七</router-link>  |

  <router-link to="/About">sssss</router-link>
  <router-link to="/About">sssss</router-link>

  <router-view/>
</template>
<script>
export default {
  name: 'Home'
}
</script>
