<template>
  <div>
      <img class="about_ban" src="../../assets/m-about_banner.png">
      <div class="con-1">
          <div class="introduce">
                <span class="headI_left"></span>
                <p class="ch_introduce">WAGONS介绍</p>
                <span class="headI_right"></span>
                <p class="en_introduce">INTRODUCE</p>
            </div>
            <p class="introduce_text">
                WAGONS是北京玄铁科技有限公司旗下超跑俱乐部，面向高端用户群体提供自驾出行、高端商务接待、高端静展等用车服务。WANGONS门店位于北京高端商区当代M-OMA商务中心，自有车辆涵盖世界各顶级品牌超跑经典车型，拉风小跑、炸街超跑、奢华商务座驾供您尽享顶级驾驭体验。同时，WAGONS还精心定制五星会员服务，让您尽享会员尊崇礼遇。
            </p>
      </div>
      <div class="con-2">
          <div class="rent_car">
                <p class="rent_ch">用车流程</p>
                <p class="rent_en">PROCESS</p>
            </div>
            <div class="process_frame">
                <div class="clear"></div>
                <span class="rad" :class="{'rad-s':s1}" style="margin-left: 0.5rem;">1</span>
                <span class="text" :class="{'text-s':s1}">选车</span>
                <i :class="{'line-s':s1}" class="line"></i>
                <i :class="{'line-s':s2}" class="line"></i>
                <span class="rad" :class="{'rad-s':s2}">2</span>
                <span class="text" :class="{'text-s':s2}">用车</span>                
                <i :class="{'line-s':s2}" class="line"></i>
                <i :class="{'line-s':s3}" class="line"></i>
                <span class="rad" :class="{'rad-s':s3}">3</span>
                <span class="text" :class="{'text-s':s3}">还车</span>  
                <div class="clear2"></div>  
                <p v-if="s1" class="tips">线上选车并拨打官方客服电话咨询预约，或直接到店选车</p>
                <p v-else-if="s2" class="tips">到店出示本人身份证、驾驶证，签订用车合同，交付用车费用</p>
                <p v-else class="tips">到店还车，接收车辆检查及交通违规查询，退还相应费用</p>
            </div>
      </div>
      <div class="member">
            <div class="member_head">
                <span class="headM_left"></span>
                <p class="application_ch">会员申请方式</p>
                <span class="headM_right"></span>
                <p class="application_en">APPLICATION</p>
            </div>
            <p class="method_1"><i></i>&nbsp;&nbsp;方式一 缴纳会费</p>
            <p class="method_2"><i></i>&nbsp;&nbsp;方式二 选择合作伙伴投资产品：私募、公募</p>
            <div class="detial">查看详情</div>
        </div>
        <div class="contact_info">
            <div class="contact_head">
                <span class="headC_left"></span>
                <p class="contact_ch">联系方式</p>
                <span class="headC_right"></span>
                <p class="contact_en">CONTACT   INFORMATION</p>
            </div>
            <p class="tel">Tel. &nbsp;&nbsp;4008-625-700</p>
            <p class="add">Add. 北京市东城区香河园路1号当代MOMA商务中心</p>
            <img src="../../assets/map.png" class="map">
            <div class="moma">
                <img src="../../assets/map_click.png" class="map_click">
                <img src="../../assets/arrow.png" class="mmp">
                <span>MOMA</span>
                <p>园区示意图</p>
            </div>
        </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            s1:true,
            s2:false,
            s3:false,
        }
    },
    mounted(){
        setInterval(()=>{
            if(this.s1 == true){
                this.s1 = false
                this.s2 = true
                this.s3 = false
                // alert(1)
                return
            }else if(this.s2 == true){
                this.s1 = false
                this.s2 = false
                this.s3 = true
                // alert(2)                
                return
            }else{
                this.s1 = true
                this.s2 = false
                this.s3 = false
                // alert(3)
                return                
            }
        },1500)
    }
}
</script>
<style>
.moma p {
    position: absolute;
    left: 0.16rem;
    top: 0.28rem;
}
.moma span {
    position: absolute;
    top: 0.09rem;
    left: 0.44rem;
}
.moma .mmp {
    position: absolute;
    left: 0.25rem;
    top: 0.09rem;
    width: 0.09rem;
    height: 0.12rem;
}
.contact_info .map_click {
    width: 1.16rem;
    height: 0.54rem;
}
.moma {
    position: absolute;
    left: 6.12rem;
    top: 3.57rem;
    width: 1.16rem;
    height: 0.54rem;
    font-size: 0.17rem;
    color: #fff;
    cursor: pointer;
}
.contact_info .map {
    width: 7.02rem;
    height: 3.84rem;
    margin: 0 0.22rem 0.27rem 0.25rem;
}
.add {
    font-size: 0.22rem;
    margin: 0 0 0.4rem 0.72rem;
}
.tel {
    font-size: 0.22rem;
    margin: 0 4.15rem 0.25rem 0.72rem;
}
.contact_en {
    position: absolute;
    left: 2.78rem;
    top: 1.24rem;
    font-size: 0.16rem;
    color: #69696b;
}
.contact_head .headC_right {
    position: absolute;
    width: 0.98rem;
    height: 1px;
    left: 4.57rem;
    top: 0.91rem;
    background: #b5b5b5;
}
.contact_ch {
    position: absolute;
    left: 3.16rem;
    top: 0.75rem;
    font-size: 0.3rem;
}
.contact_head .headC_left {
    position: absolute;
    width: 0.97rem;
    height: 1px;
    left: 1.92rem;
    top: 0.91rem;
    background: #b5b5b5;
}
.contact_head {
    position: relative;
    height: 2.12rem;
}
.contact_info {
    background-color: white;
    width: 7.5rem;
    height: 7.35rem;
    position: relative;
}
.member .detial {
    width: 1.24rem;
    height: 0.4rem;
    line-height: 0.4rem;
    margin: 0 3.17rem 0.7rem 3.1rem;
    color: #fff;
    font-size: 0.22rem;
    text-align: center;
    background: #fd5151;
    border-radius: 0.3rem;
}
.method_1 i, .method_2 i {
    position: absolute;
    width: 0.04rem;
    height: 0.08rem;
    left: 0;
    top: 0.05rem;
    background: url('../../assets/m-point.jpg') no-repeat;
    background-size: 100%;
}
.method_2 {
    font-size: 0.22rem;
    margin: 0.22rem 0 0.4rem 0.72rem;
    position: relative;
}
.method_1 i, .method_2 i {
    position: absolute;
    width: 0.04rem;
    height: 0.08rem;
    left: 0;
    top: 0.05rem;
    background: url('../../assets/m-point.jpg') no-repeat;
    background-size: 100%;
}
.method_1 {
    font-size: 0.22rem;
    margin: 0rem 0 0.22rem 0.72rem;
    position: relative;
}
.application_en {
    position: absolute;
    font-size: 0.16rem;
    left: 3.3rem;
    top: 1.2rem;
    color: #69696b;
}
.member_head .headM_right {
    position: absolute;
    width: 0.85rem;
    height: 1px;
    left: 4.83rem;
    top: 0.86rem;
    background: #b5b5b5;
}
.application_ch {
    position: absolute;
    font-size: 0.3rem;
    top: 0.7rem;
    left: 2.92rem;
}
.member_head .headM_left {
    position: absolute;
    width: 0.85rem;
    height: 1px;
    left: 1.92rem;
    top: 0.86rem;
    background: #b5b5b5;
}
.member_head {
    height: 1.7rem;
    position: relative;
}
.member {
    width: 7.5rem;
    height: 3.86rem;
    background: #f5f6f8;
}
.clear2{
    height: 1rem;
}
.tips{
    text-align: center;
    font-size: 0.23rem;
}
.line{
    margin-top: 0.24rem;
    width: 0.5rem;
    float: left;
    display: block;
    height: 2px;
    /* background-color: #ffcd34; */
    background-color: #d7d7d7;
}
.line-s{
    background-color: #ffcd34!important;     
}
.text{
    margin-right: 0.1rem;
    margin-left: 0.1rem;
    line-height: 0.5rem;
    float: left;
    font-size: 0.23rem;
}
.text-s{
    color: #9a7504!important; 
}
.clear{
    height: 1rem;
}
.about_ban {
    width: 7.5rem;
    height: 1.85rem;
    display: block;
}
.con-1{
    padding: 0.66rem 0.67rem 0.88rem 0.75rem;
    background-color: white;
}
.introduce {
    position: relative;
    height: 0.98rem;
}
.introduce .headI_left {
    position: absolute;
    left: 1.15rem;
    top: 0.15rem;
    width: 0.8rem;
    height: 1px;
    background: #b5b5b5;
}
.introduce .ch_introduce {
    position: absolute;
    top: 0;
    left: 2.05rem;
    font-size: 0.3rem;
}
.introduce .headI_right {
    position: absolute;
    left: 4.08rem;
    top: 0.15rem;
    width: 0.8rem;
    height: 1px;
    background: #b5b5b5;
}
.introduce .en_introduce {
    position: absolute;
    left: 2.55rem;
    top: 0.4rem;
    font-size: 0.16rem;
}
.introduce_text {
    font-size: 0.24rem;
    color: #69696b;
    line-height: 0.47rem;
}
.con-2{
    background-color: white;
    padding: 0 0.42rem 0.65rem;
    width: 6.66rem;
    height: 3.08rem;
}
.rent_car {
    height: 0.26rem;
    position: relative;
}
.rent_ch{
    position: absolute;
    top: 0;
    left: 2.48rem;
    font-size: 0.27rem;
    width: 1.69rem;
    height: 0.26rem;
    text-align: center;
    border-bottom: 1px solid #fff;
    z-index: 1;
}
.rent_en {
    position: absolute;
    left: 2.93rem;
    top: 0.43rem;
    width: 0.75rem;
    height: 0.13rem;
    font-size: 0.16rem;
    color: #69696b;
}
.process_frame {
    position: relative;
    width: 6.66rem;
    height: 2.82rem;
    border: 1px solid #dcdcdc;
}
.rad{
    margin-left: 0.1rem;
    width: 0.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    border-radius: 50%;
    background: #d7d7d7;
    color: #fff;
    font-size: 0.22rem;
    /* display: block; */
    float: left;
}
.rad-s{
    background-color: #ffcd34;
     color: #9a7504!important;     
}
</style>
