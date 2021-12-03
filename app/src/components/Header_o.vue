<template>
  <div class="header_o">
    <div class="title">
      <van-icon name="arrow-left" size="16px" @click="back()" />
      <p>{{ Title }}</p>
      <div></div>
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
  name: "Header_o",
  props: ["Title"],
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.header_o {
  width: 100%;
  box-sizing: border-box;
  height: 45px;

  .title {
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    background: #ef5648;
    position: fixed;
    top: 0;
    left: 0;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    z-index: 9999;
    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
