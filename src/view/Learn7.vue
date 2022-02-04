<script>
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  reactive,
  toRefs,
} from "vue";
export default defineComponent({
  name: "demo",
  props: "",
  components: "",
  setup( ) {
    //引用全局变量
    const { ctx } = getCurrentInstance();
    let state = reactive({
      buttonName: "点击发送请求",
    });
    //dom挂载后
    onMounted(() => {
      sendHttp();
    });

    function sendHttp() {
      ctx.$http
          .post("/test", {
            id: 1,
            name: "test",
          })
          .then((res) => {
            //请求成功
            console.log(res)
          })
    }
    return {
      ...toRefs(state),
      sendHttp,
    };
  },
});
</script>
