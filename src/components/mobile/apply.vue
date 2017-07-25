<template>
  <div style="">
      <div class="head_xz">
            <a @click="goback" class="goback"></a>
            <p>快速申请</p>
      </div>
      <div style="width:100%;height:1.27rem;"></div>
      <div class="tab" :class="{tabse:!tianxie}">
            <div class="left">
                <i>1</i>
                <span>填写信息</span>
            </div>
            <div class="right">
                <i>2</i>
                <span>完成申请</span>
            </div>
        </div>
            <div class="none_box"></div>
        
        <div v-if="tianxie" class="tianxie">
            <div class="inputbox">
                <div class="box">
                    <span class="p1">真实姓名</span>
                    <input v-model="userinfo.name" type="text" placeholder="请填写真实姓名" class="p2" />
                </div>
                <div class="box">
                    <span class="p1">身份证号</span>
                    <input v-model="userinfo.idCard" type="text" placeholder="请填写身份证号" class="p2" />
                </div>
                <div class="box">
                    <span class="p1">手机号</span>
                    <input v-model="userinfo.telephone" type="text" placeholder="请填写手机号" class="p2" />
                </div>
                <div @click="select(1)" class="box">
                    <span class="p1">婚姻状况</span>
                    <span class="p3" :class="{'p3se':a1}">{{please1}}</span>
                </div>
                <div @click="select(2)" class="box">
                    <span class="p1">职业</span>
                    <span class="p3" :class="{p3se:a2}">{{please2}}</span>
                </div>
                <div @click="select(3)" class="box">
                    <span class="p1">职务</span>
                    <span class="p3" :class="{p3se:a3}">{{please3}}</span>
                </div>
            </div>
            <div class="none_box"></div>            
            <div class="b1">
                <div class="apply" @click='submit'>提交申请</div>
            </div>
            <div @click="close" v-show="mask" class="mask">
                <div class="nu">
                    <p v-for="(item,index) in currlist" @click="choose(item,index)">{{item}}</p>
                    <p @click="close" style="color:#d7d7d7">取消</p>
                </div>
            </div>
            <div v-show="iserr" class="alert_err">{{errmsg}}</div>
            <!-- <div class="alert_msg">请您填写姓名！</div> -->
        </div>
        
        <!-- success -->


        <div v-if="!tianxie" class="success">
            <div class="complate">
                <img src="../../assets/apply.jpg" alt="">
                <div class="text">您的申请已经提交，工作人员审核后会及时联系您沟通办理事宜。</div>
            </div>
            <img class="gift" src="../../assets/gift.jpg" alt="">
            <div class="give">
                为了答谢您对WAGONS的支持，您有机会获得一份精美礼品，请写下正确的收件地址以方便我们寄送。
            </div>
            <textarea id="address" placeholder="请填写详细地址"></textarea>
            <div @click="ok" class="ok">完成</div>
            <div class="tel">
                <p>如有疑问，您可以随时拨打客服热线</p>
                <p>4008-625-700进行咨询</p>
            </div>
        </div>
  </div>
</template>

<script>
require('./rem.js')(window,document);
export default {
    data(){
        return {
            address:'',
            id:'',
            tianxie:true,
            iserr:false,
            errmsg:'',
            please1:'请选择',
            please2:'请选择',
            please3:'请选择',
            which:'',
            mask:false,
            hunyinlist:["未婚","已婚","离异"],
            zhiyelist:["国家机关／事业单位","计算机／互联网","金融业","建筑业","批发零售","文体教育","生产制造","交通运输","文化娱乐","能源环保","农／林／牧／渔业","其他"],
            zhiwulist:["企业所有者","高管","经理","主管","一般职员","自由职业","学生","其他"],
            currlist:'',
            userinfo:{
                maritalStatus:'',
                name:'',
                telephone:'',
                idCard:'',
                career:'',
                duty:'',
                type:'3'
            }
        }
    },
    computed:{
        a1(){ return this.please1!=='请选择' },
        a2(){ return this.please2!=='请选择' },
        a3(){ return this.please3!=='请选择' },
    },
    methods:{
        ok:function(){
            if(this.address == ''){
                this.$router.push('/mobile')
            }else{
                this.$ajax(
                    BASE_URL+'/regist',{
                        params:{
                            id:this.id,
                            address:this.address
                            }
                    }
                ).then((res)=>{
                    this.$router.push('/mobile');
                })
            }
        },
        goback:function(){
            this.$router.go(-1)
        },
        select:function(i){
            if(i == 1){ this.currlist = this.hunyinlist; this.which = 1}
            else if(i == 2){ this.currlist = this.zhiyelist; this.which = 2}
            else{ this.currlist = this.zhiwulist; this.which = 3}
            this.mask = true;
        },
        close:function(){
            this.mask =false;
        },
        choose:function(item,index){
            if(this.which == 1){
                this.userinfo.maritalStatus = index
                this.please1 = item
            }else if(this.which == 2){
                this.userinfo.career = item
                this.please2 = item
            }else if(this.which == 3){
                this.userinfo.duty = item
                this.please3 = item
            }else{
                this.err('一定是什么地方除了问题!')
            }
        },
        err:function(str){
            this.errmsg = str;
            this.iserr = true;
            setTimeout(()=>{ this.iserr = false},1500)
        },
        submit:function(){
            if(this.userinfo.name == ''){ this.err('姓名不能为空'); return false }
            if(this.userinfo.idCard == ''){ this.err('身份证号不能为空'); return false  }
            if(this.userinfo.telephone == ''){ this.err('电话号不能为空'); return false  }
            console.log(this.userinfo)
            this.$ajax(
                BASE_URL+"/regist",{
                    params:this.userinfo
                }
            ).then((res)=>{
                if(res.data.success == true){
                    this.tianxie = false;
                    this.id = res.data.data.id;
                }else{
                    this.err(res.data.message)
                }
            })
        }
    }
}
</script>

<style scoped>
html{
    background-color: #f6f6f6;
}
.tabse{
    background-image: url('../../assets/right.png')!important;
}
.alert_err{
    position: fixed;
    top: 5rem;
    width: 6.8rem;
    height: 1.2rem;
    border-radius: 0.2rem;
    background-color: rgba(0,0,0,0.6);
    color: white;
    text-align: center;
    line-height: 1.2rem;
    font-size: 0.28rem;
    left: 0.4rem;
}
.p3se{
    width: 2.3rem!important;
    color:black!important; 
    text-align:right;
    background:url('')!important;
}
.nu{
    position:absolute;
    left:0;bottom:0;
    width:100%;
    background:#fff;
    height: 3.8rem;
    overflow-y: auto;
}
.tel p {
    margin: 0 auto 0.05rem;
    text-align: center;
    font-size: 0.22rem;
    color: #d7d7d7;
}
.tel p {
    margin: 0 auto 0.05rem;
    text-align: center;
    font-size: 0.22rem;
    color: #d7d7d7;
}
.ok {
    width: 6rem;
    height: 0.8rem;
    line-height: 0.8rem;
    background: #ffd320;
    font-size: 0.3rem;
    text-align: center;
    margin: 0.4rem 0 2rem 0;
}
#address {
    border: 0;
    box-sizing: border-box;
    width: 6rem;
    height: 1.2rem;
    padding: 0.17rem 0.24rem;
    background: #f5f5f5;
    border: none;
    outline: none;
    -webkit-appearance: none;
    overflow-y: auto;
    -webkit-scrollbar: none;
    resize: none;
}
.give {
    height: 1.26rem;
    box-sizing: border-box;
    padding: 0.32rem 0;
    line-height: 0.3rem;
    font-size: 0.24rem;
}
.gift {
    width: 6rem;
    height: 1.7rem;
}
.complate .text {
    float: right;
    width: 5rem;
    height: 1rem;
    box-sizing: border-box;
    padding: 0.15rem 0 0.15rem 0.26rem;
    line-height: 0.4rem;
    font-size: 0.28rem;
    font-weight: bold;
}
.complate img {
    float: left;
    width: 0.98rem;
    height: 1rem;
}
.complate{
    height: 1rem;
    margin-bottom: 0.58rem;
    overflow: hidden;
}
.success{
    width: 100%;
    padding: 0.6rem 0.75rem 0 0.75rem;
    box-sizing: border-box;
}
.mask p{
    
    z-index: 100;
    height: 1rem;
    background: white;
    border-top: 1px solid #f6f6f6;
    font-size: 0.32rem;
    text-align: center;
    color: black;
    line-height: 1rem;
    bottom: 0;
}
.mask {
    z-index: 10;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(76,76,76,0.6);
}
.b1{
    margin-top: 0.6rem;
    width: 100%;
    /* height: 3.67rem; */
    /* background: #f6f6f6; */
}
.apply {
    width: 6rem;
    height: 0.8rem;
    line-height: 0.8rem;
    background: #ffd320;
    font-size: 0.3rem;
    text-align: center;
    margin: auto;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #d7d7d7; opacity:1; 
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #d7d7d7;opacity:1;
}

input:-ms-input-placeholder{
    color: #d7d7d7;opacity:1;
}

input::-webkit-input-placeholder{
    color: #d7d7d7;opacity:1;
}
.p3{
    background-size: 0.14rem 0.24rem;
    float: right;
    margin-top: 0.4rem;
    width: 1.3rem;
    color: #d7d7d7;
    display: inline-block;
     background: url("../../assets/arrow01.png") right no-repeat ; 
}
.p2{
    border: 0px;
    outline-style: none;
    text-align: right;
    font-size: 0.29rem;
    margin-top: 0.3rem;
    float: right;
}
.p1{
    margin-top: 0.4rem;    
    float: left;
}
.box{
    margin: 0 0.5rem;
    height: 1rem;
    border-bottom: 1px solid #f6f6f6;
}
.inputbox{
    font-size: 0.28rem;
    width: 100%;
}
.none_box {
    width: 100%;
    height: 0.1rem;
    padding-bottom: 2px;
    background-color: #f6f6f6;
}
.tab span {
    display: inline-block;
}
.tab .right i {
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
    border-radius: 50%;
    background: #d7d7d7;
    color: #fff;
}
.tab .right {
    float: left;
    width: 3.75rem;
    text-align: center;
    color: #d7d7d7;
}
.tab span {
    display: inline-block;
}
.tab .left i {
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
    border-radius: 50%;
    background: #61da81;
    color: #fff;
}
.tab .left {
    float: left;
    width: 3.75rem;
    text-align: center;
    color: #61da81;
}
.tab {
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0.28rem;
    overflow: hidden;
    background: url('../../assets/left.png') no-repeat;
    background-size: 7.5rem 1.5rem;
    box-sizing: border-box;
}
.head_xz p {
    height: 0.84rem;
    padding-top: 0.15rem;
    font-size: 0.36rem;
    color: #ffffff;
    text-align: center;
}
.head_xz .goback {
    position: absolute;
    left: 0.06rem;
    top: 0.37rem;
    width: 0.8rem;
    height: 0.8rem;
    background: url("../../assets/m-goback.png") no-repeat center center;
    background-size: 0.3rem 0.3rem;
}
.head_xz {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 0.84rem;
    padding-top: 0.43rem;
    background-color: #06060b;
    box-sizing: content-box;
}
</style>
