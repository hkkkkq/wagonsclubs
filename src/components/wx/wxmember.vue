<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
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
    var vm = this;
    //获取openid
    if (this.$route.query.WAG) {
      this.$store.commit("setOpenId", this.$route.query.WAG);
    }
    // this.$store.commit("setOpenId", "oEUUVv_6lXDk2XuAwSIWaqtvXbDI");
    //isbinding
    this.$ajax({
      url: BASE_URL + "/car/isBinding",
      method: "GET",
      headers: { WAG: this.WAG }
    }).then(res => {
      //没绑定
      if (res.data.success == false) {
        this.$router.push("/wx/login");
      } else {
        //绑定了
        this.$ajax({
          url: BASE_URL + "/wxPrivilege",
          method: "GET",
          headers: { WAG: this.WAG }
        }).then(res => {
          if (res.data.code == -100) {
            this.$router.push("/app/join");
          }
          if (res.data.data.member.memberType == 0) {
            this.$router.push("/app/join");
          } else if (
            res.data.data.member.memberType == 1 ||
            res.data.data.member.memberType == 2 ||
            res.data.data.member.memberType == 3
          ) {
            this.$router.push("/wx/wxmember/memshow");
          } else if (res.data.data.member.memberType == 5) {
            this.$router.push("/wx/wxmember/pending");
          } else if (res.data.data.member.memberType == 6) {
            this.$router.push("/wx/wxmember/review");
          } else {
            alert("出现了不可预知的问题");
          }
        });
      }
    });
  }
};
</script>

<style scoped>

</style>
