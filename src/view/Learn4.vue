<template>
  <h1>水果列表</h1>
  <form @submit.prevent="insert">
    <input type="text" v-model="name">
    <input type="text" v-model.number="price">
    <button>添加</button>
  </form>
  <ul>
    <li v-for="item,index in list" :key="item">
      名称：{{ item.name }},
      单价:{{ item.price }},
      数量：
      <button v-on:click="decrease(index)">-</button>
      <span>{{ item.count }}</span>
      <button v-on:click="increase(index)">+</button>
    </li>
  </ul>
  <h3>总价:{{ totalPrice }}</h3>
</template>
<script>
export default {
  name: "Learn4",
  data() {
    return {
      name: "",
      price: 0,
      list: [
      ]
    }
  },
  methods: {
    insert() {
      this.list.push({

        name: this.name,
        price: this.price,
        count: 1

      })
    },
    decrease(i) {
      this.list[i].count--;
    },
    increase(i) {
      this.list[i].count++;
    }
  },
  computed:{
    totalPrice(){
      let sum=0;
      this.list.forEach(v=>{
        sum+=(v.price*v.count);
      });
      return sum;
    }
  }
}

</script>
