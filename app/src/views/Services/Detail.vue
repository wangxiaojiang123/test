<template>
  <div class="detail">
    <Header_d :Title="this.title" />
    <div class="bg"></div>
    <div class="title">
      <h1>贴片机</h1>
      <div>
        <router-link :to="{ name: 'Serve' }">服务信息</router-link>
        <router-link :to="{ name: 'Handle' }"> 处理信息 </router-link>
      </div>
    </div>
    <div class="message">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header_d from "../../components/Header_d.vue";
export default {
  name: "Detail",
  components: {
    Header_d,
  },
  data() {
    return { title: "发布详情" };
  },
};
</script>

<style lang="less" scoped>
.detail {
  width: 100%;
  height: 100vh;
  background: #f1f1f1;
  .bg {
    width: 100%;
    height: 60px;
    background: red;
  }
  .title {
    padding: 10px 0;
    background: #fff;
    width: 95%;
    margin: 0 auto;
    position: relative;
    top: -15px;
    border-radius: 10px;
    h1 {
      font-size: 22px;
      text-align: center;
      margin-bottom: 15px;
    }
    div {
      display: flex;
      justify-content: space-around;
      margin-bottom: 10px;
      a {
        color: #000;
        font-weight: 400;
        &.router-link-exact-active {
          color: #ef5648;
          font-weight: 800;
          border-bottom: 2px solid #ef5648;
        }
      }
    }
  }
  .message {
    padding: 15px 0 10px;
    background: #fff;
    width: 95%;
    margin: 0 auto;
    border-radius: 10px;
  }
}
</style>
