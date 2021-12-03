<template>
  <div class="address">
    <Header_p :Title="this.title" />
    <van-address-edit
      :area-list="areaList"
      show-search-result
      :save-button-text="save"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import Header_p from "../../components/Header_p.vue";
import { mapState, mapMutations } from "vuex";
import Vue from "vue";
import { AddressEdit } from "vant";
import { Toast } from "vant";
import { areaList } from "@vant/area-data";

Vue.use(Toast);
Vue.use(AddressEdit);
export default {
  name: "Address",
  components: { Header_p },
  data() {
    return {
      title: "联系方式",
      areaList,
      searchResult: [],
      save: "确定",
    };
  },
  computed: {
    ...mapState({
      address: "address",
    }),
  },
  methods: {
    onSave(content) {
      console.log(content);
      this.$store.state.address = {
        name: content.name,
        tel: content.tel,
        addressDetail: `${content.province}${content.city}${content.county}${content.addressDetail}`,
      };
      // console.log(this.$store.state.address);
      this.$router.go(-1);
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "青青草原",
            address: "狼堡与羊村",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  mounted() {
    var name = document.querySelectorAll(".van-field__control")[0];
    var iPhone = document.querySelectorAll(".van-field__control")[1];
    name.setAttribute("placeholder", "请填写联系人姓名");
    iPhone.setAttribute("placeholder", "请填写联系电话");
  },
};
</script>

<style lang="less" scoped></style>
