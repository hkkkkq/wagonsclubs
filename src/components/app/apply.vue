<template>
  <div style="height:100%;background:#0f1923;border:1px solid #3d454d">
      <div class="qq"></div>
      <div class="in">
          <p>
              <span>姓名</span><input placeholder="请填写真实姓名" />          
          </p>
          <p>
              <span>身份证号</span><input placeholder="请填写身份证号" />          
          </p>
          <p>
              <span>手机号</span><input placeholder="请填写手机号" />          
          </p>
          <p>
              <span>婚姻状况</span><b>请选择  ></b>
          </p>
          <p>
              <span>职业</span><b>请选择  ></b>      
          </p>
          <p style="border:0px">
              <span>职务</span><b>请选择  ></b>      
          </p> 
      </div>
      <p class="but">提交申请</p>
      <div class="mask">
          <div class="nu">
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p style="color: rgb(215, 215, 215);">1</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mask p {
    z-index: 100;
    height: 1rem;
    background: #fff;
    border-top: 1px solid #f6f6f6;
    font-size: .32rem;
    text-align: center;
    color: #000;
    line-height: 1rem;
    bottom: 0;
}
.nu {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    height: 3.8rem;
    overflow-y: auto;
}
.mask{
    z-index: 10;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.6);
}
.but{
    width: 7.1rem;
    height: 0.72rem;
    margin: auto;
    background: #fed945;
    font-size: 0.26rem;
    color: #333333;
    text-align: center;
    line-height: 0.7rem;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #636364; opacity:1; 
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #636364;opacity:1;
}

input:-ms-input-placeholder{
    color: #636364;opacity:1;
}

input::-webkit-input-placeholder{
    color: #636364;opacity:1;
}
.in b{
    display: inline-block;
    font-size: 0.26rem;
    color: #636364;
    vertical-align: middle;
    width: 4.4rem;
    text-align: right;
}
.in p{
    height: 1rem;
    width: 6.5rem;
    display: block;
    margin: auto;
    border-bottom: 1px solid #3d454d;
}
.in input{
    font-size: 0.26rem;
    background: rgba(0,0,0,0);
    border: 0;
    text-align: right;
    width: 4.4rem;
    height: 0.6rem;
    vertical-align: middle;
    color: #a9acb0;
}
.in span{
    vertical-align: middle;
    color: #a9acb0;
    font-size: 0.26rem;
    display: inline-block;
    width: 2rem;
}
.in{
    background: #273039;
    width: 7.1rem;
    margin: auto;
    margin-bottom: 0.3rem;
}
.qq{
    width: 7.1rem;
    height: 1rem;
    display: block;
    margin: auto;
    background: url('../../assets/app/apply1.jpg');
    background-size: 100% 100%;
    border-bottom: 1px solid #273039;
    margin-top: 0.42rem;
    margin-bottom: 0.4rem;
}
</style>
