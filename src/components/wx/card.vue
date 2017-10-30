<template>
<transition name="fade">
  <router-view class="child-view"></router-view>

</transition>
</template>

<script>
require("../app/rem.js")(window, document);
export default {
  data() {
    return {};
  },
  computed: {
    WAG() {
      return this.$store.state.WAG;
    }
  },
  created() {
    // this.$store.commit("setOpenId", "oEUUVv_6lXDk2XuAwSIWaqtvXbDI");
    // if (this.$route.query.WAG) {
    //   this.$store.commit("setOpenId", this.$route.query.WAG);
    // }
    var vm = this;
    this.$ajax({
      url: BASE_URL + "/car/isBinding",
      method: "GET",
      headers: { WAG: vm.WAG }
    }).then(res => {
      if (res.data.success == false) {
        this.$router.push("/wx/login");
      } else {
      }
    });
    // console.log(this.$route.query.WAG)
  }
};
</script>

<style lang="scss" scoped>
.child-view {
  position: absolute;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
  opacity: 1;
  background: #333333;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

