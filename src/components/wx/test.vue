<template>
  <div>
    <!-- <input @change="baseimg()" accept="image/*" ref="file2" type="file"> -->
    <img :src='src' style="height:100px;width:100px">
    <button @click="ss">上传</button>
    <div class="bor">
      <div></div>
    </div>
    <!-- <form name="form" action="/dd" method="post" enctype="multipart/form-data" target="uploadFrame">
      姓名<input name="name" type="text">
      照片<input name="img" type="file">
      <button type="submit">提交</button>
    </form> -->
    <div v-if="env == 'development'" >
      <br>
      <a :href="'http://'+ip+'/wx/findcar?WAG='+W">找车</a>
      <br>
      <a :href="'http://'+ip+'/wx/hd?WAG='+W">活动</a>
      <br>
      会员中心
      <br>
      <a :href="'http://'+ip+'/app/ab'">关于我们</a>
      <br>
      <a :href="'http://'+ip+'/wx/wxmember?WAG='+W">会员权益</a>
      <br>
      <a :href="'http://'+ip+'/wx/orders?WAG='+W">订单查询</a>
      <br>
      <a :href="'http://'+ip+'/wx/card?WAG='+W">充值卡</a>
      <br>
      <a :href="'http://'+ip+'/app/warning'">用车须知</a>
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
    <input v-model="ip" style="border:1px solid;width:80%" type="text" placeholder="输入电脑ip:端口,必填">
    <h4 color='red' name='xxx'>chenxiang</h4>
    <h4 color='blue' name='xxx'>chenxiang</h4>
    <h4 type='img'>haha</h4>
    <VueCropper
      class="crop"
      ref='cropper'
      :img='option.img' 
      :outputSize="option.size"
      :outputType="option.outputType"
      :info="option.info"
      :canScale="option.canScale"
      :autoCrop="option.autoCrop"
      :autoCropWidth="option.autoCropWidth"
      :autoCropHeight="option.autoCropHeight"
      :fixed="option.fixed"
      :fixedNumber="option.fixedNumber"
    ></VueCropper>
    <input @change="baseimg()" accept="image/*" ref="file1" type="file">
    <button @click="cli">截图</button>
  </div>
</template>

<script>
require('../app/rem.js')(window, document)
import qs from "qs";
import VueCropper from "vue-cropper"
export default {
  data() {
    return {
      ip:'192.168.10.142:8080',
      env: "",
      W: "oEUUVvzs3UIbfgkUO56S0H3O-sNI",
      src: "",
      option:{
        img:'../../assets/5.png',
        info: true,
				size: 1,
				outputType: 'jpeg',
				canScale: false,
				autoCrop: true,
				// 只有自动截图开启 宽度高度才生效
				autoCropWidth: 300,
				autoCropHeight: 250,
				// 开启宽度和高度比例
				fixed: true,
				fixedNumber: [1, 1]
      }
    };
  },
  components:{
    'VueCropper':VueCropper
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
    cli () {
      this.$refs.cropper.getCropBlob((data)=>{
        this.src = data
      })
    },
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
      var vm = this;
      alert("文件大小:" + this.$refs.file1.files[0].size / 1024 + "KB");
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
        vm.option.img = e.target.result;
        console.log("成功读取....");
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style lang='scss' scoped>
.bor{
  display: block;
  width: 6.2rem;
  border-radius: 10px;
  display: flex;
  display: -webkit-flex;
  height: 1rem;
  border: 3px solid #42b1ef;
  >div{
    width: 95%;
    border-radius: 10px;
    height: 95%;
    margin: auto;
    border: 1px solid red;
    box-shadow: 0px 0px 13px #f00 inset, 0px 0px 13px #f00;
  }
}
.crop{
  height: 20rem;
}
h4[color=red]{
  background: red
}
h4::before{
  content:'我是额外内容'
}
h4::after{
  content: attr(name)
}
h4[type = img]::after{
  content: url(../../assets/bj.png)
}
a {
  line-height: 30px;
}
</style>
