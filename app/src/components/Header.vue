<template>
  <div class="header">
    <div class="title">
      <p>{{ Title }}</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
import { Badge } from "vant";

Vue.use(Badge);
Vue.use(Icon);
export default {
  name: "Header",
  props: ["Title"],
  methods: {
    back() {
      this.$router.push({ name: "About" });
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  .title {
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background: #fff;
    z-index: 9999;
    color: #fff;
    background: #ef5648;
    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
