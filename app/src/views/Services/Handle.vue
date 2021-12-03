<template>
  <div class="handle">已取消</div>
</template>

<script>
import Header_o from "@/components/Header_o";
export default {
  name: "Handle",
  components: {
    Header_o,
  },
  data() {
    return {};
  },
};
</script>

<style>
.handle {
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>
