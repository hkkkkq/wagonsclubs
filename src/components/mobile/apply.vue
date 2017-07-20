<template>
  <div>
      <div class="head_xz">
            <a class="goback"></a>
            <p>快速申请</p>
      </div>
      <div style="width:100%;height:1.27rem;"></div>
      <div class="tab">
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
        
        <div style="display:none" class="tianxie">
            <div class="inputbox">
                <div class="box">
                    <span class="p1">真实姓名</span>
                    <input type="text" placeholder="请填写真实姓名" class="p2" />
                </div>
                <div class="box">
                    <span class="p1">身份证号</span>
                    <input type="text" placeholder="请填写身份证号" class="p2" />
                </div>
                <div class="box">
                    <span class="p1">手机号</span>
                    <input type="text" placeholder="请填写手机号" class="p2" />
                </div>
                <div class="box">
                    <span class="p1">婚姻状况</span>
                    <span class="p3">请选择</span>
                </div>
                <div class="box">
                    <span class="p1">职业</span>
                    <span class="p3">请选择</span>
                </div>
                <div class="box">
                    <span class="p1">职务</span>
                    <span class="p3">请选择</span>
                </div>
            </div>
            <div class="b1">
                <div class="apply">提交申请</div>
            </div>
            <div style="display:none" class="mask">
                <div style="position:absolute;left:0;bottom:0;width:100%;background:#fff">
                    <p>国家机关</p>
                    <p>国家机关</p>
                    <p>国家机关</p>
                    <p>国家机关</p>
                    <p>国家机关1</p>
                </div>
            </div>
        </div>
        
        <!-- success -->


        <div class="success">
            <div class="complate">
                <img src="../../assets/apply.jpg" alt="">
                <div class="text">您的申请已经提交，工作人员审核后会及时联系您沟通办理事宜。</div>
            </div>
            <img class="gift" src="../../assets/gift.jpg" alt="">
            <div class="give">
                为了答谢您对WAGONS的支持，您有机会获得一份精美礼品，请写下正确的收件地址以方便我们寄送。
            </div>
            <textarea id="address" placeholder="请填写详细地址"></textarea>
            <div class="ok">完成</div>
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

}
</script>

<style scoped>
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
    padding-top: 0.6rem;
    width: 100%;
    height: 3.67rem;
    background: #f6f6f6;
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
