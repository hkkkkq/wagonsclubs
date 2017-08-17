<template>
<div>
<div class="s_banner"></div>
<div v-if="qr_show" class="qr_code">
        <a @click="closeqr" href="javascript:;" class="cclose"></a>
        <img src="../../assets/car_gongzhonghao.png" alt="" class="qr"/>
        <p>扫码即刻体验</p>
      </div>
  <div class="con">
      <div class="sqhy">
          <transition name="fade">
              <div v-show="iserr"  class='err'>{{errmessage}}</div>
          </transition>
          <p>申请会员</p>
          <div class="clear2"></div>
          <input v-model="name" class="text" placeholder="姓名" type="text">
          <input v-model="telephone" class="text" placeholder="手机号码" type="text">
          <input v-model="idCard" class="text" placeholder="身份证号码" type="text">
          <div :class="{black:!show11,shadow:show1}" @click="choose1" class="text select" placeholder="">
              {{maritalStatus}}
              <span v-show="show11" class="choose">{{pleasechoose}}</span>
          </div>
          <div v-show="show1" style="top:349px" class="drop">
                <p @click="click1(1,'未婚',0)">未婚</p>
                <p @click="click1(1,'已婚',1)">已婚</p>
                <p @click="click1(1,'离异',2)">离异</p>
              </div>
          <div :class="{black:!show12,shadow:show2}" @click="choose2" class="text select" placeholder="">
              {{career}}
              <span v-show="show12" class="choose">{{pleasechoose}}</span>
          </div>
          <div v-show="show2" style="top:404px" class="drop">
                  <p @click="click1(2,'国家机关/事业单位')">国家机关/事业单位</p>
                  <p @click="click1(2,'计算机／互联网')">计算机／互联网</p>
                  <p @click="click1(2,'金融业')">金融业</p>
                  <p @click="click1(2,'建筑业')">建筑业</p>
                  <p @click="click1(2,'批发零售')">批发零售</p>
                  <p @click="click1(2,'文体教育')">文体教育</p>
                  <p @click="click1(2,'生产制造')">生产制造</p>
                  <p @click="click1(2,'交通运输')">交通运输</p>
                  <p @click="click1(2,'文化娱乐')">文化娱乐</p>
                  <p @click="click1(2,'能源环保')">能源环保</p>
                  <p @click="click1(2,'农／林／牧／渔业')">农／林／牧／渔业</p>
                  <p @click="click1(2,'其他')">其他</p>
              </div>
          <div :class="{black:!show13,shadow:show3}" @click="choose3" class="text select" placeholder="">
              {{duty}}
              <span v-show="show13" class="choose">{{pleasechoose}}</span>
          </div>
          <div v-show="show3" style="top:461px" class="drop">
                    <p @click="click1(3,'企业所有者')">企业所有者</p>
                    <p @click="click1(3,'高管')">高管</p>
                    <p @click="click1(3,'经理')">经理</p>
                    <p @click="click1(3,'主管')">主管</p>
                    <p @click="click1(3,'一般职员')">一般职员</p>
                    <p @click="click1(3,'自由职业者')">自由职业者</p>
                    <p @click="click1(3,'学生')">学生</p>
                    <p @click="click1(3,'其他')">其他</p>
            </div>
          <input v-model="address" class="text" placeholder="通讯地址" type="select">
          <div @click="submit" class="submit">提交资料</div>
          <p class="into">我们还将对申请用户进行抽奖活动，请务必确保以上资料正确以便邮寄奖品。</p>
      </div>


      <div class="jihua">
          <div class="jihua1">
              <p class="jihuaname">乐潮计划</p>
              <div class="jihuaname1">
                  <p class='detail'>权益细则</p>
                  <p class='price'>98000元／年</p>
              </div>
              <div class='clear1'></div>
              <p class="line"><span class="left">1</span><span class="right">每月3天超跑使用权，每天可在指定车型中任选1台自驾，本月未使用完的天数可累计到下月，本年度未使用完的天数可在下一年度继续使用（具体车型见备注）</span></p>
              <p class="line"><span class="left">2</span><span class="right">乐潮计划权益外用车，可享受金卡会员折扣，即基础价7折</span></p>
              <p class="line"><span class="left">3</span><span class="right">生日当天用车半价，生日专属礼物</span></p>
              <p class="line"><span class="left">4</span><span class="right">每邀请1位好友，可额外累计1天使用权</span></p>
              <p class="line"><span class="left">5</span><span class="right">一对一专属管家服务</span></p>
              <p class="line"><span class="left">6</span><span class="right">俱乐部旗下修理厂每年1次免费深度车辆清洗</span></p>
              <p class="line"><span class="left">7</span><span class="right">俱乐部组织的高端定制游等自费活动，享受9折优惠</span></p>
          </div>
          <div class="jihua1">
              <p class="jihuaname">优享计划</p>
              <div class="jihuaname1">
                  <p class='detail'>权益细则</p>
                  <p class='price'>218000元／年</p>
              </div>
              <div class='clear1'></div>
              <p class="line"><span class="left">1</span><span class="right">每月3天超跑使用权，每天可在俱乐部所有车型中任选1台自驾，本月未使用完的天数可累计到下月，本年度未使用完的天数可在下一年度继续使用</span></p>
              <p class="line"><span class="left">2</span><span class="right">获俱乐部价值100万白金会员资格，享有白金会员所有权益</span></p>
              <p class="line"><span class="left">3</span><span class="right">优享计划权益外用车，可享受白金会员折扣，即基础价6折</span></p>
              <p class="line"><span class="left">4</span><span class="right">长租折上折，周租白金价格9折，月租白金价格7折</span></p>
              <p class="line"><span class="left">5</span><span class="right">生日当天用车半价，生日专属礼物</span></p>
              <p class="line"><span class="left">6</span><span class="right">每邀请1位好友，可额外累计1天使用权</span></p>
              <p class="line"><span class="left">7</span><span class="right">每月1次劳斯莱斯或宾利商务接送服务</span></p>
              <p class="line"><span class="left">8</span><span class="right">一对一专属管家服务</span></p>
              <p class="line"><span class="left">9</span><span class="right">每次用车免除3分及以内的违章罚金</span></p>
              <p class="line"><span class="left">10</span><span class="right">俱乐部旗下修理厂每年2次免费深度车辆清洗，保养9折优惠</span></p>
              <p class="line"><span class="left">11</span><span class="right">免费参与俱乐部组织的各类培训试驾、演唱会、观影、酒会派对、体育棋牌等活动</span></p>
              <p class="line"><span class="left">12</span><span class="right">俱乐部组织的高端定制游等自费活动，享受8折优惠</span></p>
          </div>
          <div class="jihua1">
              <p class="jihuaname">至尊计划</p>
              <div class="jihuaname1">
                  <p class='detail'>权益细则</p>
                  <p class='price'>358000元／年</p>
              </div>
              <div class='clear1'></div>
              <p class="line"><span class="left">1</span><span class="right">每月5天超跑使用权，每天可在俱乐部所有车型中任选1台自驾，本月未使用完的天数可累计到下月，本年度未使用完的天数可在下一年度继续使用</span></p>
              <p class="line"><span class="left">2</span><span class="right">获俱乐部价值100万白金会员资格，享有白金会员所有权益</span></p>
              <p class="line"><span class="left">3</span><span class="right">至尊计划权益外用车，可享受白金会员折扣，即基础价6折</span></p>
              <p class="line"><span class="left">4</span><span class="right">长租折上折，周租白金价格9折，月租白金价格7折</span></p>
              <p class="line"><span class="left">5</span><span class="right">生日当天用车免费，生日专属礼物</span></p>
              <p class="line"><span class="left">6</span><span class="right">每邀请1位好友，可额外累计1天使用权</span></p>
              <p class="line"><span class="left">7</span><span class="right">每月2次劳斯莱斯或宾利商务接送服务</span></p>
              <p class="line"><span class="left">8</span><span class="right">一对一专属管家服务</span></p>
              <p class="line"><span class="left">9</span><span class="right">每次用车免除6分及以内的违章罚金</span></p>
              <p class="line"><span class="left">10</span><span class="right">俱乐部旗下修理厂每年4次免费深度车辆清洗，保养8折优惠</span></p>
              <p class="line"><span class="left">11</span><span class="right">免费参与俱乐部组织的各类培训试驾、演唱会、观影、酒会派对、体育棋牌等活动</span></p>
              <p class="line"><span class="left">12</span><span class="right">俱乐部组织的高端定制游等自费活动，享受7折优惠</span></p>
              <p class="line"><span class="left">13</span><span class="right">在与WAGONS合作的顶级会所、健身房、高尔夫球场、餐厅、酒吧消费享专属礼遇</span></p>
          </div>
          <div class="jihua1">
              <p class="jihuaname">散租</p>
              <!-- <div class="jihuaname1">
                  <p class='detail'>权益细则</p>
                  <p class='price'>98000元／年</p>
              </div>            -->
              <div class='clear1'></div>
              <p class="line"><span class="left">1</span><span class="right">只需缴纳少量押金，即可开走顶级跑车</span></p>
              <p class="line"><span class="left">2</span><span class="right">尊享会员折扣价，长租还享折上折</span></p>
              <p class="line"><span class="left">3</span><span class="right">优质老客户还有多重优惠，有机会免押金用车</span></p>
          </div>
          <div class='tips'>
              <p class="tips1">备注</p>
              <div class="cars">
                  <p>乐潮计划支持车型:</p>
                  兰博基尼 Gallardo 、阿斯顿马丁 V8 Vantage、法拉利 California、奥迪 R8 、奔驰 SLS AMG、奔驰 G55 AMG、奔驰 AMG GT、玛莎拉蒂  GranCabrio 、玛莎拉蒂 GranTurismo、保时捷 911 、宝马 i8、宝马 640i、宝马 z4、科尔维特、科迈罗等
              </div>
              <div class="cars">
                  <p>优享计划／至尊计划支持车型:</p>
                  除乐潮计划计划车型外，还包括兰博基尼LP700-4、兰博基尼 huracan、阿斯顿马丁、阿斯顿马丁 DB9、法拉利 F12、法拉利 458、法拉利 FF、法拉利 488、劳斯莱斯魅影、劳斯莱斯 Ghost、宾利飞驰、宾利欧陆 GT、奔驰迈凯伦SLR、奔驰 G63 Amg、迈凯伦 MP4-12C、迈凯伦 570s、迈凯伦 720s、KTM X-BOW、摩根4-4等
              </div>
              <p style="margin-top: 23px;" >乐潮计划/优享计划/至尊计划经典、稀有超跑车型持续增加中...</p>
              <div class="clear3"></div>
          </div>
      </div>
  </div>
  <div v-if="issuccess" class="mask">
    <div class="alert">
        <p class="p1">申请提交成功</p>
        <img class="x" @click="close" src="../../assets/pc-x.png">
        <img class="success" src="../../assets/pc-success.png">
        <p class="p2">您的申请已提交，待工作人员审核后会及时与您沟通办理事宜</p>
        <p class="p3">如有疑问，您可以随时拨打客服热线4008-625-700</p>
        <p @click="close" class="p4">确认</p>
    </div>
</div>
  </div>
</template>
<script>
import qs from 'qs';
export default {
    data(){
        return{
            qr_show:true,
            name:"",
            telephone:"",
            idCard:"",
            address:"",
            show1:false,
            show2:false,
            show3:false,
            show11:true,
            show12:true,
            show13:true,
            maritalStatus:"婚姻状况",
            MS:"",
            career:"职业",
            duty:"职务",
            pleasechoose:"请选择",
            iserr:false,
            errmessage:'',
            issuccess:false
        }
    },
    computed:{
    },
    methods:{
        close:function(){
            this.issuccess = false
        },
        nochoose:function(){
            this.show1=this.show2=this.show3=false
        },
        choose1:function(){
            this.show1==true?this.show1 = false:this.show1=true
            this.show2=false
            this.show3=false
        },
        choose2:function(){
            this.show1=false
            this.show2==true?this.show2 = false:this.show2=true
            this.show3=false
        },
        choose3:function(){
            this.show1=false
            this.show2=false
            this.show3==true?this.show3 = false:this.show3=true
        },
        click1:function(i,str,d){
            if(i == 1){
                this.MS = d
                this.maritalStatus = str
                this.show11 = false
            }else if(i == 2){
                this.show12 = false
                this.career = str
            }else{
                this.duty = str
                this.show13 = false
            }
            this.nochoose();
        },
        err:function(str){
            this.errmessage = str

            setTimeout(()=>{this.iserr = false},1000);
        },
        closeqr:function(){
            this.qr_show = false;
        },
        submit:function(){
            if(this.name == ''){this.err("请填写姓名");this.iserr = true;return false}
            if(this.telephone == ''){this.err("请填写电话号码");this.iserr = true;return false}
            if(this.idCard == ''){this.err("请填写身份证号码");this.iserr = true;return false}
            if(this.MS === ''){this.err("请选择婚姻状况");this.iserr = true;return false}
            if(this.career == '职业'){this.err("请选择职业");this.iserr = true;return false}
            if(this.duty == '职务'){this.err("请选择职务");this.iserr = true;return false}
            let that = this
            this.$ajax({
                method:'POST',
                url:BASE_URL+"/regist",
                data:qs.stringify({
                    idCard:this.idCard,
                    name:this.name,
                    telephone:this.telephone,
                    address:this.address,
                    maritalStatus:this.MS,
                    career:this.career == '职业'?'':this.career,
                    duty:this.duty== '职务'?'':this.duty,
                    type:2
                    }),
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        },
                })
                .then(function(res){
                    if(res.data.success  == true){
                        that.issuccess = true;
                    }else{
                        that.err(res.data.message);
                        that.iserr = true;
                        return false;
                    }
                })
        }
    }
}
</script>
<style scoped>
 .qr_code{
    z-index: 100;
    position: fixed;
    right:11%;
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
.alert .p4{
    font-size: 18px;
    color: #090405;
    background: #ffd302;
    width: 130px;
    height: 34px;
    text-align: center;
    margin: auto;
    margin-top: 28px;
    padding-top: 16px;
}
.alert .p3{
    text-align: center;
    font-size: 14px;
    color: #676767;
    margin-top: 14px;
}
.alert .p2{
    color: #090405;
    text-align: center;
    font-size: 14px;
}
.alert .success{
    display: block;
    margin: auto;
    margin-top: 25px;
    margin-bottom: 15px;
}
.alert .x{
    position: absolute;
    top: 10px;
    right: 10px;
}
.alert .p1{
    margin-top: 18px;
    padding-bottom: 18px;
    border-bottom: 1px solid #d7d7d7;
    font-size: 18px;
    text-align: center;
}
.alert{
    position: fixed;
    display: block;
    width: 500px;
    height: 300px;
    background: white;
    margin: auto;
    top: 30%;
    left: 33%;
}
.mask{
    z-index: 1111;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(76,76,76,0.6);
    width: 100%;
    height: 296%;
}
::-moz-placeholder{color:#bebebe;}
::-webkit-input-placeholder{color:#bebebe;}
:-ms-input-placeholder{color:#bebebe;}
.con{
    width: 1000px;
    margin: auto;
}
.clear2{
    height: 52px;
}
.clear1{
    margin-left: 80px;
    height: 24px;
    border-bottom: 1px solid #ddddde;
}
.clear3{
    height: 72px;
}
.sqhy{
    position: relative;
    padding: 0;
    width: 366px;
    display: inline-block;
    padding-top: 52px;
}
.jihua{
    margin: 0;
    width: 628px;
    display: inline-block;
    border-left: 1px solid #ddddde;
    vertical-align: top;
}
.sqhy p{
    font-size: 30px;
    color: #06060b;
}
.s_banner {
    width: 100%;
    min-width: 1000px;
    height: 217px;
    background: url("../../assets/car_member_banner.png") center center no-repeat;
}
.text{
    text-indent: 12px;
    font-size: 14px;
    border-radius: 3px;
    margin-bottom: 16px;
    width: 313px;
    height: 40px;
    background: #eeeeee;
    border: 0;
    outline: none;
}
.select{
    position:relative;
    font-size: 14px;
    border-radius: 3px;
    box-shadow:1px solid #008aff;
    line-height: 40px;
    color: #bebebe;
    cursor: pointer;
}
.choose{
    text-indent: 0;
    display: inline-block;
    width: 60px;
    background: url("../../assets/car_member_arrow.png") center right no-repeat;
    float: right;
    margin-right: 13px;
    display: inline-block;
}
.must{
    color: #fd5151;
    font-size: 14px;
    margin-left: 5px;
}
.submit{
    margin-top: 30px;
    background: #ffd320;
    text-align: center;
    width: 313px;
    height: 50px;
    vertical-align: middle;
    line-height: 52px;
    border-radius: 3px;
}
.into{
    margin-top: 28px;
    font-size: 14px!important;
    color: #676767!important;
    width: 313px;
}
.jihuaname{
    margin-left: 80px;
    font-size: 18px;
    color: #06060b
}
.jihuaname1{
    margin-top: 46px;
    color:#676767;
    margin-left: 82px;
}
.detail{
    float: left;
}
.price{
    float: right;
    font-size: 18px;
    color: red;
}
.jihua1{
    margin-top: 52px;
}
.line{
    margin-top: 20px;
    margin-left: 80px;
    font-size: 14px;
    color: #676767;
}
.line .left{
    width: 19px;
    height: 18px;
    display: inline-block;
    background: #494949;
    color: white!important;
    border-radius: 3px;
    vertical-align: top;
    text-align: center;
    padding-top: 1px;
}
.line .right{
    font-size: 14px;
    line-height: 19px;
    display: inline-block;
    margin-left: 12px;
    width: 515px;
    letter-spacing: 1px;
}
.tips{
    margin-top: 72px;
    margin-left: 80px;
    color: #676767;
    font-size: 14px;
}
.tips1{
    border-bottom: 1px solid #dddddf;
    padding-bottom: 12px;
}
.cars{
    margin-top: 34px;
    line-height: 32px;
}
.drop{
    position:absolute;
    z-index: 10;
    border: 1px solid #dddddf;
}
.drop p{
    text-indent: 10px;
    cursor: pointer;
    width: 311px;
    font-size: 14px;
    color: #676767;
    background: white;
    height: 24px;
    line-height: 24px;
}
.drop p:hover{
    background: #eeeeee;
}
.black{
    color:black!important;
}
.shadow{
    box-shadow: 0px 0px 10px #008aff;
}
.text:focus {
    box-shadow: 0px 0px 10px #008aff;
}
.err{
    z-index: 100;
    left: 34px;
    position: absolute;
    background: black;
    opacity: 0.8;
    color: white;
    padding-left: 18px;
    padding-right: 18px;
    display: block;
    height: 50px;
    width: 220px;
    top: 270px;
    font-size: 16px;
    text-align: center;
    line-height: 49px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
