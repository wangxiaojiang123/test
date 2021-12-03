<template>
  <div class="services">
    <Header :Title="this.title" />
    <van-tabs v-model="active">
      <van-tab title="全部">
        <div v-if="true" class="all">
          <ul>
            <li>
              <router-link :to="{ path: '/detail' }">
                <p class="title"><span>保养</span> 2021-11-20 19:30:33</p>
                <div class="goods">
                  <img src="@/assets/hot4.jpg" alt="" />
                  <div>
                    <h1>贴片机</h1>
                    <p>设备数量：1台</p>
                    <p>区域：重庆市南岸区</p>
                    <p>费用：详议</p>
                  </div>
                  <span>已取消</span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div v-if="false">
          <van-empty description="您还没有相关服务单">
            <van-button round type="danger" class="bottom-button"
              >我要保修</van-button
            >
          </van-empty>
        </div>
      </van-tab>
      <van-tab title="待派单">
        <van-empty description="您还没有相关服务单">
          <van-button round type="danger" class="bottom-button"
            >我要保修</van-button
          >
        </van-empty>
      </van-tab>
      <van-tab title="服务中">
        <van-empty description="您还没有相关服务单">
          <van-button round type="danger" class="bottom-button"
            >我要保修</van-button
          >
        </van-empty>
      </van-tab>
      <van-tab title="待验收">
        <van-empty description="您还没有相关服务单">
          <van-button round type="danger" class="bottom-button"
            >我要保修</van-button
          >
        </van-empty>
      </van-tab>
    </van-tabs>
    <Bottom />
  </div>
</template>

<script>
import Bottom from "@/components/Bottom";
import Header from "@/components/Header";
import Vue from "vue";
import { Tab, Tabs } from "vant";
import { Empty } from "vant";
import { Button } from "vant";

Vue.use(Empty);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Button);
export default {
  name: "Services",
  components: {
    Bottom,
    Header,
  },
  data() {
    return {
      title: "服务单",
      active: 0,
    };
  },
};
</script>

<style scoped lang="less">
.services {
  width: 100%;
  height: 100vh;
  background-color: #f1f1f1;
  .bottom-button {
    width: 160px;
    height: 40px;
  }
  .all {
    width: 100%;
    ul {
      width: 100%;
      box-sizing: border-box;
      padding: 0 7px;
      li {
        width: 100%;
        background: #fff;
        box-sizing: border-box;
        border-radius: 5px;
        margin-top: 15px;
        padding: 8px 10px;
        a {
          color: #000;
        }
        .title {
          font-size: 14px;
          padding: 5px 0 10px;
          margin-bottom: 10px;
          border-bottom: 1px solid #b0b0b0;
          span {
            font-size: 12px;
            padding: 2px 10px;
            color: #3cb371;
            border: 1px solid #3cb371;
          }
        }
        .goods {
          display: flex;
          img {
            border: 1px solid #000;
            width: 120px;
            height: 90px;
          }
          div {
            margin-left: 10px;
            font-size: 14px;
            h1 {
              font-size: 20px;
              margin-bottom: 10px;
            }
            p {
              margin-bottom: 4px;
            }
          }
          span {
            flex-grow: 1;
            text-align: center;
            color: #b0b0b0;
            align-self: center;
          }
        }
      }
    }
  }
}
</style>
