<template>
  <div>
    <input @change="baseimg()" accept="image/*" ref="file1" type="file">
    <input @change="baseimg()" accept="image/*" ref="file2" type="file">
    <img :src='src' style="height:100px;width:100px">
    <button @click="ss">上传</button>
    <!-- <form name="form" action="/dd" method="post" enctype="multipart/form-data" target="uploadFrame">
      姓名<input name="name" type="text">
      照片<input name="img" type="file">
      <button type="submit">提交</button>
    </form> -->
    <div v-if="env == 'development'" >
      <br>
      <a :href="'http://localhost:8080/wx/findcar?WAG='+W">找车</a>
      <br>
      <a :href="'http://localhost:8080/wx/hd?WAG='+W">活动</a>
      <br>
      会员中心
      <br>
      <a :href='"http://localhost:8080/app/ab"'>关于我们</a>
      <br>
      <a :href="'http://localhost:8080/wx/wxmember?WAG='+W">会员权益</a>
      <br>
      <a :href="'http://localhost:8080/wx/orders?WAG='+W">订单查询</a>
      <br>
      <a :href="'http://localhost:8080/wx/card?WAG='+W">充值卡</a>
      <br>
      <a :href="'http://localhost:8080/app/warning'">用车须知</a>
    </div>
    <div v-else>
      <br>
      <a :href="'http://www.test.wagonsclub.com/wx/findcar?WAG='+W">找车</a>
      <br>
      <a :href="'http://www.test.wagonsclub.com/wx/hd?WAG='+W">活动</a>
      <br>
      会员中心
      <br>
      <a :href='"http://www.test.wagonsclub.com/app/ab"'>关于我们1</a>
      <br>
      <a :href="'http://www.test.wagonsclub.com/wx/wxmember?WAG='+W">会员权益</a>
      <br>
      <a :href="'http://www.test.wagonsclub.com/wx/orders?WAG='+W">订单查询</a>
      <br>
      <a :href="'http://www.test.wagonsclub.com/wx/card?WAG='+W">充值卡</a>
      <br>
      <a :href="'http://www.test.wagonsclub.com/app/warning'">用车须知</a>
    </div>
    <input v-model="W" style="border:1px solid;width:80%" type="text" placeholder="输入oppenid，不写则是默认值">
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      env: "",
      W: "oEUUVv1Fko_nef3hzP9KY_P7nDHM",
      src: ""
    };
  },
  created() {
    console.log(FileReader);
    this.env = process.env.NODE_ENV;
    var x = (a, b) => c => {
      console.log(a);
      console.log(b);
      console.log(c);
    };
    x(1)(2, 3);
  },
  methods: {
    ss() {
      console.log(this.$refs.file1.files[0])
      console.log(this.$refs.file2.files[0])
      var params = new FormData()
      params.append('name','chen')
      params.append('upfile',this.$refs.file1.files[0])
      params.append('upfile',this.$refs.file2.files[0])
      console.log(params.get('name'))
      // console.log(params.get('file'))
      // params.append('img',this.$refs.file.files[0])
      // console.log(params.get('file'))
      this.$ajax({
        url: BASE_URL + "/uploadFiles",
        method: "post",
        data: params,
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // }
      });
    },
    baseimg() {
      console.log(this.$refs.file1.files[0])
      console.log(this.$refs.file2.files[0])
      var vm = this;
      alert("文件大小:" + this.$refs.file.files[0].size / 1024 + "KB");
      var file = this.$refs.file1.files[0];
      var reader = new FileReader();
      reader.onloadstart = function(e) {
        console.log("开始读取....");
      };
      reader.onprogress = function(e) {
        console.log("正在读取中....");
      };
      reader.onabort = function(e) {
        console.log("中断读取....");
      };
      reader.onerror = function(e) {
        console.log("读取异常....");
      };
      reader.onload = function(e) {
        vm.src = e.target.result;
        console.log("成功读取....");
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style scoped>
a {
  line-height: 30px;
}
</style>
