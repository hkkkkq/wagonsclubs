<template>
  <div class="pcweb">
    <div class="header">
      <router-link v-on:click.native="changecolor1" class="router-link" v-bind:class="{'active':homeactive}" to="/first">
        <i>首页</i>
        <b>HOME</b>
      </router-link>
      <router-link v-on:click.native="changecolor2" class="router-link" v-bind:class="{'active':!homeactive}" to="/second">
        <i>用车须知</i>
        <b style="margin-left: 1em">GUIDE</b>
      </router-link>
      <span class="phone">4008-625-700</span>
    </div>
    <router-view></router-view>
    <div class="footer">
      <!-- <p class="no1">合作伙伴：火球理财 搬运工</p> -->
      <p class="no1">合作伙伴：搬运工&nbsp;&nbsp;
            <a href="https://www.huoqiu.cn" target="_blank" style="color:#777777; cursor: pointer;text-decoration: none;">火球理财</a>&nbsp;&nbsp;
            <a href="http://www.quhuanqian.cn/" target="_blank" style="color:#777777; cursor: pointer;text-decoration: none;">趣还钱</a>&nbsp;&nbsp;
            <a href="https://www.leverfun.com/" target="_blank" style="color:#777777; cursor: pointer;text-decoration: none;">炒饭</a>&nbsp;&nbsp;
        </p>
      <p class="no2">京ICP备17029862号-1  铭博顺通（北京）科技发展有限公司版权所有©2017</p>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
      data(){
          return{
              homeactive:true
          }
          },
    methods:{
      changecolor1:function(){
          this.homeactive = true;
          console.log(BASE_URL)
      },
      changecolor2:function(){
          this.homeactive = false;
      },
    }


  }
</script>
<style type="text/css">
  .pcweb {
    font-family: "Helvetica Neue Light", "HelveticaNeue-Light", "Helvetica Neue", Calibri, Helvetica, Arial, sans-serif;
    background-color: #fff;
  }
  .active{
    color: #090405!important;
  }
  .header{
    width: 1000px;
    height: 100px;
    background: url("../../assets/carRental_logo.png") no-repeat center 34px;
    padding-top: 49px;
    background-size: 248px 48px;
    box-sizing: border-box;
    margin: auto;
  }
  .footer{
    width: 100%;
    min-width: 1000px;
    height: 82px;
    padding-top: 18px;
    box-sizing: border-box;
    background-color: #565656;
  }
  .footer p{
    text-align: center;
  }
  .no1{
    width: 780px;
    height: 22px;
    color: #777777;
    font-size: 13px;
    margin: 0 auto;
    border-bottom: 1px solid #6b6b6b;
  }
  .no2{
    width: 780px;
    height: 22px;
    color: #777777;
    font-size: 13px;
    padding-top: 9px;
    margin: 0 auto;
  }
  .router-link{
    display: inline-block;
    width: 110px;
    text-decoration: none;
    color: #797979;
  }
  .router-link i {
    display: block;
    font-size: 17px;
  }
  .router-link b {
    margin-top: 6px;
    display: block;
    font-size: 11px;
  }
  .phone{
    letter-spacing:1px;
    color: #797979;
    float: right;
    line-height: 43px;
    text-indent: 2em;
    background: url('../../assets/car_tel.png') 0 5px no-repeat;
    cursor: text;
  }
</style>
