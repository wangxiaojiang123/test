<template>
  <div class="public">
    <Header_o :Title="this.title" />
    <!-- 头部 -->
    <ul class="header">
      <li
        v-for="(list, index) in lists"
        :key="index"
        @click="change(index)"
        :class="{ active: active === index }"
      >
        <img :src="list.path" alt="" />
        <p>{{ list.text }}</p>
      </li>
    </ul>
    <!-- 设备 -->
    <ul class="device">
      <li>
        <span>*设备名称</span>
        <input type="text" placeholder="请输入设备名称" />
      </li>
      <li>
        <span>*设备类型</span>
        <router-link :to="{ name: 'Devtype' }"
          ><p v-if="devtype == '' ? true : false">请选择设备类型</p>
          <p v-if="devtype == '' ? false : true">{{ devtype }}</p>
          <van-icon name="arrow"
        /></router-link>
      </li>
      <li>
        <span>*设备数量（台）</span>
        <input type="number" placeholder="请输入设备数量" />
      </li>
    </ul>
    <!-- 类型 -->
    <div class="where">
      <h1>*故障类型</h1>
      <ul class="type">
        <li
          v-for="(type, index) in types"
          :key="index"
          @click="changeType(index)"
          :class="{ typeActive: typeActive === index }"
        >
          {{ type.text }}
        </li>
      </ul>
      <div class="describe">
        <h1>*故障描述</h1>
        <textarea
          type="text"
          rows="3"
          placeholder="请尽可能详细地描述设备异常情况以及损坏原因(如线路损坏，接触不良等)，这样有助于您快速匹配工程师！"
        />
        <van-uploader v-model="fileList" :after-read="afterRead" />
      </div>
    </div>
    <!--期望  -->
    <ul class="finish">
      <li>
        <van-cell
          title=" *期望服务完成时间"
          :value="date"
          @click="show = true"
        />
        <div>
          <van-calendar v-model="show" @confirm="onConfirm" /><van-icon
            name="arrow"
          />
        </div>
      </li>
      <li>
        预计费用
        <p><input type="number" placeholder="预计费用仅供师傅报价参考" />元</p>
      </li>
      <li>
        *联系方式
        <div class="touch">
          <router-link :to="{ name: 'Address' }">
            <span v-if="address == '' ? true : false">请选择设备类型</span>
            <div v-if="address == '' ? false : true">
              <p>{{ address.addressDetail }}</p>
              <p>{{ address.name }}&nbsp;{{ address.tel }}</p>
            </div></router-link
          ><van-icon name="arrow" />
        </div>
      </li>
      <li>
        *支付方式
        <p><span>线下支付</span> <van-icon name="arrow" /></p>
      </li>
    </ul>
    <!-- 发布 -->
    <div class="send">
      <div>
        <button>发布服务单并匹配维修工程师</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header_o from "../../components/Header_o.vue";
import { mapState } from "vuex";
import Vue from "vue";
import { Button } from "vant";
import { Uploader } from "vant";
import { Picker } from "vant";
import { Toast } from "vant";
import { Calendar } from "vant";
import { Cell, CellGroup } from "vant";
Vue.use(Cell);
Vue.use(CellGroup);

Vue.use(Calendar);
Vue.use(Toast);
Vue.use(Picker);
Vue.use(Uploader);
Vue.use(Button);
export default {
  components: { Header_o },
  name: "Public",
  data() {
    return {
      title: "发布服务单",
      active: 1,
      typeActive: 1,
      fileList: [],
      date: "",
      show: false,
    };
  },
  computed: {
    ...mapState({
      lists: "lists",
      types: "types",
      devtype: "devtype",
      address: "address",
    }),
  },
  methods: {
    change(i) {
      this.active = i;
    },
    changeType(i) {
      this.typeActive = i;
    },
    // 上传图片
    afterRead(file) {
      console.log(file);
    },
    formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  },
  mounted() {
    // console.log(this.$store.state.devtype);
  },
};
</script>

<style lang="less" scoped>
.public {
  width: 100%;
  background: #f1f1f1;
  .wh() {
    width: 100%;
    box-sizing: border-box;
    padding: 5px 15px 0 15px;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .header {
    display: flex;
    li {
      flex-grow: 1;
      text-align: center;
      padding: 10px 0;
      img {
        width: 30px;
        height: 30px;
      }
      &.active {
        color: white;
        background-color: rgb(247, 97, 72);
      }
    }
  }
  .device {
    .wh();
    li {
      padding: 10px 0;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f1f1f1;
      justify-content: space-between;
      span {
        font-weight: 800;
      }
      input {
        border: 0;
        text-align: right;
      }
      a {
        color: rgb(118, 118, 118);
        display: flex;
        align-items: center;
      }
    }
  }
  .where {
    .wh();
    h1 {
      font-size: 16px;
      margin: 10px 0;
    }
    .type {
      width: 100%;
      display: flex;
      justify-content: space-between;
      li {
        font-size: 14px;
        padding: 5px;
        background-color: fff;
        color: #b0b0b0;
        border: 1px solid #b0b0b0;
        border-radius: 5px;
        &.typeActive {
          color: #fff;
          border: 1px solid rgb(247, 97, 72);
          background-color: rgb(247, 97, 72);
        }
      }
    }
    .describe {
      textarea {
        width: 100%;
        font-size: 14px;
        border: 0;
        resize: none;
      }
      /deep/ .van-image.van-uploader__preview-image {
        border-radius: 5px;
      }
      /deep/.van-uploader__preview-delete {
        background: red;
      }
      /deep/.van-uploader__wrapper {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .finish {
    .wh();
    li {
      display: flex;
      font-size: 16px;
      padding: 10px 0;
      border-bottom: 1px solid #f1f1f1;
      font-weight: 800;
      justify-content: space-between;
      align-items: center;
      .touch {
        font-weight: 400;
        font-size: 14px;
        display: flex;
        align-items: center;
        span {
          color: rgb(118, 118, 118);
        }
        div {
          color: #000;
          p {
            width: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
            /*禁止换行显示*/
            white-space: nowrap;
            text-align: right;
          }
        }
      }
      .van-cell {
        padding: 0;
        span {
          font-size: 16px;
          font-weight: 800;
          color: #000;
        }
      }
      .van-cell__value {
        span {
          font-weight: 400;
        }
      }
      &:nth-child(4) {
        margin: 10px 0 30px;
      }
      p {
        font-weight: 400;
        font-size: 14px;
        input {
          border: 0;
          padding-right: 5px;
          text-align: right;
        }
        span {
          color: rgb(118, 118, 118);
        }
      }
    }
  }
  .send {
    width: 100%;
    height: 58px;
    div {
      width: 100%;
      background-color: #fff;
      text-align: center;
      box-sizing: border-box;
      padding: 10px 20px;
      position: fixed;
      bottom: 0;
      button {
        font-size: 14px;
        border: 0;
        padding: 10px 70px;
        background-color: rgb(247, 97, 72);
        color: #fff;
        border-radius: 5px;
      }
    }
  }
}
</style>
