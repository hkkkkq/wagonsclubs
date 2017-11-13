<template>
  <div>
    <div v-if="env == 'development'" >
      <br>
      <a :href="'http://localhost:8080/wx/findcar?WAG='+WAG">找车</a>
      <br>
      <a :href="'http://localhost:8080/wx/hd?WAG='+WAG">活动</a>
      <br>
      会员中心
      <br>
      <a :href='"http://localhost:8080/app/ab"'>关于我们</a>
      <br>
      <a :href="'http://localhost:8080/wx/wxmember?WAG='+WAG">会员权益</a>
      <br>
      <a :href="'http://localhost:8080/wx/orders?WAG='+WAG">订单查询</a>
      <br>
      <a :href="'http://localhost:8080/wx/card?WAG='+WAG">充值卡</a>
      <br>
      <a :href="'http://localhost:8080/app/warning'">用车须知</a>
    </div>
    <div v-else>
      <br>
      <a :href="'http://www.test.wagonsclub.com/wx/findcar?WAG='+WAG">找车</a>
      <br>
      <a :href="'http://www.test.wagonsclub.com/wx/hd?WAG='+WAG">活动</a>
      <br>
      会员中心
      <br>
      <a :href='"http://www.test.wagonsclub.com/app/ab"'>关于我们</a>
      <br>
      <a :href="'http://www.test.wagonsclub.com/wx/wxmember?WAG='+WAG">会员权益</a>
      <br>
      <a :href="'http://www.test.wagonsclub.com/wx/orders?WAG='+WAG">订单查询</a>
      <br>
      <a :href="'http://www.test.wagonsclub.com/wx/card?WAG='+WAG">充值卡</a>
      <br>
      <a :href="'http://www.test.wagonsclub.com/app/warning'">用车须知</a>
    </div>
    <input v-model="WAG" style="border:1px solid;width:80%" type="text" placeholder="输入oppenid，不写则是默认值">
  </div>
</template>

<script>
export default {
  data() {
    return {
      env:'',
      WAG:'oEUUVv1Fko_nef3hzP9KY_P7nDHM'
    };
  },
  created() {
    this.env = process.env.NODE_ENV;
  }
};
</script>

<style scoped>
a {
  line-height: 30px;
}
</style>
