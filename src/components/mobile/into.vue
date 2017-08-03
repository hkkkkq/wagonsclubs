<template>
  <div>
      <!-- <div style="height:1.25rem"></div> -->
      <img class="about_ban" src="../../assets/m-about_banner.png">
      <div class="con-1">
          <div class="introduce">
                <span class="headI_left"></span>
                <p class="ch_introduce">WAGONS介绍</p>
                <span class="headI_right"></span>
                <p class="en_introduce">INTRODUCE</p>
            </div>
            <p class="introduce_text">
                WAGONS光速超跑是北京玄铁科技有限公司旗下超跑俱乐部，面向高端用户群体提供自驾出行、高端商务接待、高端静展等用车服务。WANGONS光速超跑门店位于北京高端商区当代M-OMA商务中心，自有车辆涵盖世界各顶级品牌超跑经典车型，拉风小跑、炸街超跑、奢华商务座驾供您尽享顶级驾驭体验。同时，WAGONS光速超跑还精心定制五星会员服务，让您尽享会员尊崇礼遇。
            </p>
      </div>
      <div class="con-2">
          <div class="rent_car">
                <p class="rent_ch">用车流程</p>
                <p class="rent_en">PROCESS</p>
            </div>
            <div class="process_frame">
                <div class="q">
                <div class="clear"></div>
                <router-link to="/mobile/join" class="join">如何加入</router-link>
                <span class="rad" :class="{'rad-s':s1}" style="">1</span>
                <span class="text" :class="{'text-s':s1}">加入WAGONS</span>
                <i :class="{'line-s':s1}" class="line"></i>
                <i :class="{'line-s':s2}" class="line"></i>
                <span class="rad" :class="{'rad-s':s2}">2</span>
                <span class="text" :class="{'text-s':s2}">选车 —</span>
                <p class="qq" :class="{'text-s':s2}">线上选车并拨打官方客服电话咨询预约，或直接到店选车</p>
                <i :class="{'line-s':s2}" class="line"></i>
                <i :class="{'line-s':s3}" class="line"></i>
                <span class="rad" :class="{'rad-s':s3}">3</span>
                <span class="text" :class="{'text-s':s3}">用车 —</span>    
                <p class="qq" :class="{'text-s':s3}">到店出示本人身份证、驾驶证、签订用车合同，交付用车费用</p>            
                <i :class="{'line-s':s3}" class="line"></i>
                <i :class="{'line-s':s4}" class="line"></i>
                <span class="rad" :class="{'rad-s':s4}">4</span>
                <span class="text" :class="{'text-s':s4}">还车 —</span>  
                <p class="qq" :class="{'text-s':s4}">到店还车，接收车辆检查及交通违规查询，退还相应费用</p>
                <div class="clear2"></div>  
                </div>
            </div>
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
            <div @click="show" class="moma">
                <img src="../../assets/map_click.png" class="map_click">
                <img src="../../assets/arrow.png" class="mmp">
                <span>MOMA</span>
                <p>园区示意图</p>
            </div>
        </div>
        <div v-show="show1" class="park_alert" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
            <img src="../../assets/park_map.png" class="map_alert">
            <img @click="close" src="../../assets/close.png" class="close">
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
            s4:false,
            show1:false
        }
    },
    mounted(){
        window.scrollTo(0,0);
        setInterval(()=>{
            if(this.s1 == true){
                this.s1 = false
                this.s2 = true
                this.s3 = false
                this.s4 = false
                // alert(1)
                return
            }else if(this.s2 == true){
                this.s1 = false
                this.s2 = false
                this.s3 = true
                this.s4 = false
                // alert(2)                
                return
            }else if(this.s3 == true){
                this.s1 = false
                this.s2 = false
                this.s3 = false
                this.s4 = true
                // alert(3)
                return                
            }else{
                this.s1 = true
                this.s2 = false
                this.s3 = false
                this.s4 = false
            }
        },1500)
    },
    methods:{
        show(){
            this.show1 = true
        },
        close(){
            this.show1 = false
        }
    }
}
</script>
<style scoped>
.park_alert .close {
    position: absolute;
    width: 0.72rem;
    height: 0.72rem;
    left: 50%;
    margin-left: -0.36rem;
    bottom: 1.5rem;
}
.park_alert .map_alert {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5.18rem;
    height: 6.81rem;
    margin-left: -2.59rem;
    margin-top: -3.4rem;
}
.park_alert {
    width: 100%;
    height: 100%;
    background: rgba(1,1,1,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}
.join {
    text-decoration:none;
    text-decoration-line: none;
    position: absolute;
    top: 0.8rem;
    right: 0.3rem;
    width: 1.52rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.24rem;
    color: #fff;
    background: url("../../assets/m-join.png") no-repeat;
    background-size: 1.52rem 0.5rem;
}
.qq{
    margin-left: 0.1rem;
    display: inline-block;
    width: 4.6rem;
    font-size: 0.24rem;
    vertical-align: -webkit-baseline-middle;
}
.line2{
    position: relative;
    width: 0.2rem;
    height: 1px;
    background-color: #d7d7d7;
    display: inline-block;
    margin: 0 0.1rem;
    top: -0.06rem;
}
.q{
    margin-left: 0.2rem;
}
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
    margin-left: 0.31rem;
    /* margin-top: 0.24rem; */
    width: 2px;
    /* float: left; */
    display: block;
    height: 0.3rem;
    /* background-color: #ffcd34; */
    background-color: #d7d7d7;
}
.line-s{
    background-color: #ffcd34!important;     
}
.text{
    font-size: 0.23rem;
}
.text-s{
    color: #9a7504!important; 
}
.clear{
    height: 0.8rem;
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
    height: 6rem;
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
    padding-left: 0.3;
    position: relative;
    width: 6.66rem;
    height: 5.57rem;
    border: 1px solid #dcdcdc;
    font-size: 0;
}
.rad{
    margin: 0.05rem 0.1rem;
    width: 0.5rem;
    height: 0.5rem;
    line-height: 0.55rem;
    text-align: center;
    border-radius: 50%;
    background: #d7d7d7;
    color: #fff;
    font-size: 0.22rem;
     display: inline-block; 
    /* float: left; */
}
.rad-s{
    background-color: #ffcd34;
     color: #9a7504!important;     
}
</style>
