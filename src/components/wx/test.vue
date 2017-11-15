<template>
  <div>
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
      <a :href='"http://www.test.wagonsclub.com/app/ab"'>关于我们</a>
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
export default {
  data() {
    return {
      env:'',
      W:'oEUUVv1Fko_nef3hzP9KY_P7nDHM'
    };
  },
  created() {
    this.env = process.env.NODE_ENV;
     var x = (a,b)=>(c)=>{
      console.log(a)
      console.log(b)
      console.log(c)
    }
    x(1)(2,3);
  }
};
</script>

<style scoped>
a {
  line-height: 30px;
}
</style>
