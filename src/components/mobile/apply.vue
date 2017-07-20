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
        <div class="inputbox">
            <div class="box">
                <span class="p1">真实姓名</span>
                <span class="p2">请填写真实姓名</span>
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
