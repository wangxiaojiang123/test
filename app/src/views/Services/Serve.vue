<template>
  <div class="serve">
    <ul>
      <li>
        <span>设备数量：</span>
        <p>1台</p>
      </li>
      <li>
        <span>服务类型：</span>
        <p>保养</p>
      </li>
      <li>
        <span>服务费用：</span>
        <p>1元</p>
      </li>
      <li>
        <span>期望完成时间：</span>
        <p>2021-12-02</p>
      </li>
      <li>
        <span>服务单号：</span>
        <p>202111021938528045</p>
      </li>
      <li>
        <span>支付方式：</span>
        <p>线下支付</p>
      </li>
      <li class="describe">
        <span>故障描述</span>
        <p>纯属娱乐</p>
        <img src="@/assets/hot1.jpg" alt="" />
        <img src="@/assets/hot1.jpg" alt="" />
        <img src="@/assets/hot1.jpg" alt="" />
      </li>
      <li>
        <span>企业名称：</span>
        <p>广州</p>
      </li>
      <li>
        <span>所属区域：</span>
        <p>重庆市南岸区</p>
      </li>
      <li>
        <span>发布时间：</span>
        <p>2021-11-02</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Serve",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.serve {
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  ul {
    li {
      width: 100%;
      display: flex;
      padding: 5px 0;
      font-size: 14px;
      justify-content: space-between;
      &.describe {
        display: block;
        border-top: 1px solid #b1b1b1;
        border-bottom: 1px solid #b1b1b1;
        p {
          margin: 10px 0;
        }
        img {
          width: 30%;
          border-radius: 5px;
          margin-right: 10px;
        }
      }
      span {
        color: #696969;
      }
      p {
        color: #000;
      }
    }
  }
}
</style>
