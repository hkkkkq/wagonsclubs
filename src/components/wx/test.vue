<template>
  <div>
      <br>
      <!-- <a href="http://www.test.wagonsclub.com/wx/findcar?WAG=test1">找车</a> -->
      <a href="http://localhost:8080/wx/findcar?WAG=oML6ov8Kksw5opZ6Cy6Fbu_Bxh7A">找车</a>
      <br>
      <!-- <a href="http://www.test.wagonsclub.com/wx/hd?WAG=test1">活动</a> -->
      <a href="http://localhost:8080/wx/hd?WAG=oML6ov8Kksw5opZ6Cy6Fbu_Bxh7A">活动</a>
      <br>
      会员中心
      <br>
      <!-- <a href="http://www.test.wagonsclub.com/app/ab">关于我们</a> -->
      <a href="http://localhost:8080/app/ab">关于我们</a>
      <br>
      <!-- <a href="http://www.test.wagonsclub.com/wx/wxmember">会员权益</a> -->
      <a href="http://localhost:8080/wx/wxmember?WAG=oML6ov8Kksw5opZ6Cy6Fbu_Bxh7A">会员权益</a>
      <br>
      <!-- <a href="http://www.test.wagonsclub.com/wx/orders?WAG=test1">订单查询</a> -->
      <a href="http://localhost:8080/wx/orders?WAG=oML6ov8Kksw5opZ6Cy6Fbu_Bxh7A">订单查询</a>
      <br>
      <a href="http://localhost:8080/wx/card?WAG=oML6ov8Kksw5opZ6Cy6Fbu_Bxh7A">充值卡</a>
      <br>
      <!-- <a href="http://www.test.wagonsclub.com/app/warning">用车须知</a> -->
      <a href="http://localhost:8080/app/warning">用车须知</a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    var arr = [1, 2, 3, 45, 6, 7, 55, 78, 4, 14];
    console.log(arr.reduce((a,b)=>{return a>b?a:b}))
    function findMax(arr) {
      var tmp = [],
        n = 0,//下标
        m;//值
      for (let i = 0; i < arr.length; i++) {
        if ((m == undefined)) {
          m = arr[0];
        } else {
          if (m < arr[i]) {
            n = i;
            m = arr[i]
          }
        }
      }
      return [n-1,m]
    }
    console.log(findMax(arr));
  }
};
</script>

<style scoped>
a {
  line-height: 30px;
}
</style>
