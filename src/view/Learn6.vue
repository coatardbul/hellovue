<template>
  <h1>水果列表</h1>
  <button @click="getMsg">查询</button>
  <h2>ssss</h2>
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
import {
  computed,
  reactive,
  ref
} from "vue";

import axios from 'axios';

export default {
  name: "Learn4",
  setup() {
    const name = ref("");
    const price = ref(0);
    const totalPrice=computed(()=>{
      let sum=0;
      list.forEach(v=>{
        sum+=v.price *2;
      })
      return sum;
    })
    const list = reactive([])
    function insert() {
      const fruit=reactive({
        name: name.value,
        price: price.value,
        count: 1
      })
      this.list.push(fruit);
    }

    function decrease(i) {
      this.list[i].count--;
    }

    function increase(i) {
      this.list[i].count++;
    }
     function getMsg() {
       axios.get("/api/stockTemplate/getList").then((res)=>{
         //数组
         res.forEach(v=>{
           let newObject={};
           newObject.name=v.name;
           newObject.price=v.id;
           newObject.count=1;
           list.push(newObject);
         });
        })
      }
    return {
      name,
      price,
      list,
      totalPrice,
      insert,
      decrease,
      increase,
      getMsg
    }
  }
}

</script>
