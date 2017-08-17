<template>
  <div class="pcweb">
    <div class="header">
      <router-link v-on:click.native="changecolor1" class="router-link" v-bind:class="{'active':homeactive1}" to="/first">
        <i>首页</i>
      </router-link>
      <span class="shu"></span>
      <router-link v-on:click.native="changecolor2" class="router-link" v-bind:class="{'active':homeactive2}" to="/second">
        <i>俱乐部动态</i>
      </router-link>
      <span class="shu"></span>
      <router-link v-on:click.native="changecolor3" class="router-link" v-bind:class="{'active':homeactive3}" to="/third">
        <i>用车须知</i>
      </router-link>
      <span class="shu"></span>
      <router-link v-on:click.native="changecolor4" class="router-link" v-bind:class="{'active':homeactive4}" to="/forth">
        <i>会员说明</i>
      </router-link>
      <span class="phone"></span>
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
              homeactive1:true,
              homeactive2:false,
              homeactive3:false,
              homeactive4:false
          }
        },
        mounted(){
          let i = this.$route.path;
          if(i == '/first'){ this.changecolor1() }
          if(i == '/second'){ this.changecolor2() }
          if(i == '/third'){ this.changecolor3() }
          if(i == '/forth'){ this.changecolor4() }
        },
    methods:{
      changecolor1:function(){
          this.homeactive1 = true
          this.homeactive2 = false
          this.homeactive3 = false
          this.homeactive4 = false
      },
      changecolor2:function(){
          this.homeactive1 = false
          this.homeactive2 = true
          this.homeactive3 = false
          this.homeactive4 = false
          
      },
      changecolor3:function(){
          this.homeactive1 = false
          this.homeactive2 = false
          this.homeactive3 = true
          this.homeactive4 = false
          
      },
      changecolor4:function(){
          this.homeactive1 = false
          this.homeactive2 = false
          this.homeactive3 = false
          this.homeactive4 = true
      }
    }


  }
</script>
<style type="text/css" scoped>
  .shu{
    display: inline-block;
    width: 1px;
    height: 16px;
    background: #797979;
    padding-top: 0px;
    margin: -3px 10px;

  }
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
    background: url("../../assets/carRental_logo3.png") no-repeat left 34px;
    padding-top: 49px;
    background-size: 256px 43px;
    box-sizing: border-box;
    margin: auto;
    padding-left: 314px;
    background-position: 0 40px;
  }
  .footer{
    width: 100%;
    min-width: 1000px;
    height: 82px;
    padding-top: 18px;
    box-sizing: border-box;
    background-color: #dcdcdc;
  }
  .footer p{
    text-align: center;
  }
  .no1{
    width: 780px;
    height: 22px;
    color: #777777;
    font-size: 14px;
    margin: 0 auto;
    border-bottom: 1px solid #8e8e8e;
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
    line-height: 33px;
    display: inline-block;
    text-decoration: none;
    color: #797979;
    margin-right: 0px;
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
    float: right;
    background: url('../../assets/car_tel.png') 0 5px no-repeat;
    display: block;
    width: 242px;
    height: 45px;
    position: relative;
    top: -15px;
  }
</style>
