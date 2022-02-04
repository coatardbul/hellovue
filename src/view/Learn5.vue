<template>
  <h1>{{ title }}</h1>
  <h1>{{ student.name }}</h1>
  <button @click="sayHi">按钮</button>
</template>
<script>
//ref对于变量，reactive对于对象
import {ref, reactive} from "vue";

export default {
  name: "Learn5",
  setup() {
    //响应式变量
    let title = ref("Hello world");
    const student = reactive({name: "小明", age: 2});

    function sayHi() {
      title.value = "Hello Vue";
      student.name="小黄";
    }

    return {
      title,
      student,
      sayHi
    }
  }
}
</script>
