<template>
  <div>
    <div v-if="qr_show" class="qr_code">
        <a @click="closeqr" href="javascript:;" class="cclose"></a>
        <img src="../../assets/car_gongzhonghao.png" alt="" class="qr"/>
        <p>扫码即刻体验</p>
      </div>
    <div class="s_banner"></div>
    <div class="con_1">
      <div class="ll">
        <p :class="{active:show == 'chanpin'}" @click='change("chanpin")'>产品服务</p>
        <p :class="{active:show == 'us'}" @click='change("us")'>关于我们</p>
      </div>
      <div class="rr">
<div v-if='show == "chanpin"'>
          <div class="vf">
          <h1>俱乐部业务</h1>
          <h2>— 个人</h2>
          <P>平台有多种档次的会员套餐，满足各阶层的租赁需求</P>
          <div style="height:22px;"></div>
          <h2>— 商务</h2>
          <P>平台同时兼营婚庆，静展，商务接待和拍摄等其他业务</P>
        </div>
        <div class="vf">
          <h1>谁能用车</h1>
          <h2>试营业期间WAGONS光速超跑的用车服务仅覆盖北京地区的用户</h2>
        </div>
        <div class="vf">
          <h1>用车流程</h1>
          <h2>— 选车</h2>
          <P>线上选车并拨打官方客服电话咨询预约，或直接到店选车</P>
          <div style="height:22px;"></div>
          <h2>— 用车</h2>
          <P>到店出示本人身份证驾驶证，签订用车协议，交付用车费用</P>
          <div style="height:22px;"></div>
          <h2>— 还车</h2>
          <P>平台同时兼营婚庆，静展，商务接待和拍摄等其他业务</P>
        </div>
        <div style="border:0px" class="vf">
          <h1>俱乐部业务</h1>
          <h2>1.缴纳会费</h2>
          <h2>2.选择合作伙伴投资产品：私募，公募</h2>
        </div>
</div>
<div v-if='show == "us"'>
          <div class="vf">
          <h1>关于WAGONS光速超跑俱乐部</h1>
          <h2>WAGONS光速超跑是北京玄铁科技有限公司旗下超跑俱乐部，面向高端用户群体提供自驾出行，高端商务接待，高端静展等用车服务。</h2>
          <h2>WAGONS光速超跑门店位于北京高端商区当代MOMA商务中心，自有车辆涵盖世界各顶级品牌超跑经典车型，拉风小跑，炸街超跑，奢华商务座驾供您尽享顶级驾驭体验。同时，WAGONS光速超跑还精心定制五星会员服务，让您尽享会员尊宠礼遇。</h2>
        </div>
        <div style="border:0px" class="vf">
          <h1>联系我们</h1>
          <h2>客服热线：<span style="font-size: 22px;font-weight: bolder;">4008-625-700</span></h2>
          <h2 style="position: relative;top: -5px;">公司地址：北京市东城区香河园路1号当代MOMA商务中心</h2>
          <p style="height:15px"></p>
          <img style="height:379px;width:620px" src="../../assets/newmap1.jpg">
        </div>
</div>
      </div>
      <!-- <div class="intro">
        <p>WAGONS光速超跑是北京玄铁科技有限公司旗下超跑俱乐部，面向高端用户群体提供自驾出行、高端商务接待、高端静展等用车服务。WAGONS光速超跑门店位于北京高端商区当代MOMA商务中心，自有车辆涵盖世界各顶级品牌超跑经典车型，拉风小跑、炸街超跑、奢华商务座驾供您尽享顶级驾驭体验。同时，WAGONS光速超跑还精心定制五星会员服务，让您尽享会员尊宠礼遇。</p>
        <h5>地址：北京市东城区香河园路1号当代MOMA商务中心</h5>
        <div style="width:255px;">
          <img src="../../assets/car_gongzhonghao.png" alt="" class="gongzhonghao" />
          <h4>关注微信 即刻体验</h4>
        </div>
      </div>
      <div class="condition">
        <div class="no1">
          <span>谁能用车</span>
          <p>试营业期间WAGONS光速超跑的用车服务<i>仅覆盖北京地区</i>用户。</p>
        </div>
        <div class="no2">
          <span class="lc">用车流程</span>
          <div class="lct">
            <h5 style="margin-top:-4px;">
              <p>-选车</p>
              <p>线上选车并拨打官方客服电话咨询预约，或直接到店选车</p>
            </h5>
            <h5>
              <p>-用车</p>
              <p>到店出示本人身份证、驾驶证，签订用车协议，交付用车费用</p>
            </h5>
            <h5>
              <p>-还车</p>
              <p>到店还车，接受车辆检查及交通违规查询，退还相应费用</p>
            </h5>
          </div>
        </div>
        <div class="no3">
          <span>会员申请方式</span>
          <p>1、缴纳会费
            <br/><br/>
            2、选择合作伙伴投资产品：私募、公募
          </p>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      qr_show:true,
      show:'chanpin'
    }
  },
  methods:{
    closeqr:function(){
          this.qr_show = false;
      },
    change:function(str){
      this.show = str;
    }
  }
}
</script>
<style scoped>
.vf h1{
  margin-top: 24px;
  font-size: 16px;
  color: black;
  font-weight: bolder;
  margin-bottom: 20px;
}
.vf h2{
  color: #747474;
  font-size: 15px;
    line-height: 26px;
}
.vf p{
    color: #747474;
  font-size: 15px;
  text-indent: 20px;
}
.vf{
  border-bottom: 1px solid #8e8e8e;
    padding-bottom: 34px;
     padding-top: 12px;
     padding-left: 10px;

}
.ll p {
  text-align: center;
  line-height: 53px;
  height: 50px;
  /* background: #262626; */
  color: black;
  font-size: 22px;
  margin: 18px 0;
  cursor: pointer;
}
.ll p.active {
  text-align: center;
  line-height: 53px;
  height: 50px;
  background: #262626;
  color: #ffd400;
  font-size: 22px;
  margin: 18px 0;
}
.ll{
  width: 314px;
  background: #efefef;
  height: 100%;
  display: inline-block;
}
.rr{
    width: 630px;
    height: 10px;
    display: inline-block;
    vertical-align: top;
    padding-left: 50px;
}
  .qr_code{
    z-index: 100;
    position: fixed;
    right:0;
    top:30%;
    width:173px;
    height:234px;
    background-color: #333333;
  }
  .qr_code .cclose{
    position: absolute;
    top:15px;
    right:15px;
    width:14px;
    height:14px;
    background:url("../../assets/car_close.png") no-repeat;
    background-size:100% 100%;
  }
  .qr_code .qr{
    display:block;
    margin:45px auto 13px;
    width:128px;
    height:128px;
  }
  .qr_code p{
    font-size:14px;
    color:#f4f4f4;
    text-align: center;
  }
  .s_banner{
    width: 100%;
    min-width: 1000px;
    height: 217px;
    background: url('../../assets/car_guide_banner.jpg') center center no-repeat;
  }
  .con_1{
    width:1000px;
    height:1000px;
    margin:0 auto;
    overflow: hidden;
  }
  .con_1 .intro{
    float: left;
    width: 366px;
    height:550px;
    padding-top:70px;
    box-sizing: border-box;
    border-right:1px solid #dddddf;
  }
  .con_1 .intro p{
    padding-right:49px;
    font-size:14px;
    line-height:30px;
    color:#7a7a7a;
    margin-bottom:30px;
  }
  .con_1 .intro h5{
    height:30px;
    font-size:14px;
    color:#717171;
  }
  .con_1 .intro .gongzhonghao{
    display:block;
    width:145px;
    height:143px;
    margin:0 auto;
  }
  .con_1 .intro h4{
    text-align: center;
    font-size:16px;
    color:#3d3d3d;
    line-height:22px;
  }
  .con_1 .condition{
    float: left;
    box-sizing: border-box;
    width:634px;
    height:550px;
    padding:75px 0 0 86px;
  }
  .con_1 .condition .no1{
    height:50px;
    border-bottom: 1px solid #dddddf;
    overflow: hidden;
  }
  .con_1 .condition .no1 span{
    float:left;
    width:122px;
    font-size:18px;
    color:#06060b;
  }
  .con_1 .condition .no1 p{
    float:left;
    width:420px;
    font-size:14px;
    color:#717171;
  }
  .con_1 .condition .no1 p i{
    color:#e41b06;
  }

  .con_1 .condition .no2{
    height:256px;
    border-bottom: 1px solid #dddddf;
    overflow: hidden;
    box-sizing: border-box;
    padding-top:34px;
  }
  .con_1 .condition .no2 .lc{
    float:left;
    width:122px;
    font-size:18px;
    color:#06060b;
  }
  .con_1 .condition .no2 .lct{
    float:left;
    width:420px;
    font-size:14px;
    color:#717171;
  }
  .con_1 .condition .no2 .lct h5{
    margin-bottom:18px;
  }
  .con_1 .condition .no2 .lct h5 p{
    line-height:26px;
  }
  .con_1 .condition .no3{
    overflow: hidden;
    padding-top:34px;
  }
  .con_1 .condition .no3 span{
    float:left;
    width:122px;
    font-size:18px;
    color:#06060b;
  }
  .con_1 .condition .no3 p{
    float:left;
    width:420px;
    line-height:20px;
    font-size:14px;
    color:#717171;
  }
</style>
