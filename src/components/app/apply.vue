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
          <p @click="sel(1)">
              <span>婚姻状况</span><b :class="{'tian':istian1}">{{c1}}</b>
          </p>
          <p @click="sel(2)">
              <span>职业</span><b :class="{'tian':istian2}">{{c2}}</b>      
          </p>
          <p @click="sel(3)" style="border:0px">
              <span>职务</span><b :class="{'tian':istian3}">{{c3}}</b>      
          </p> 
      </div>
      <p class="but">提交申请</p>
      <div @click="clo" v-show="l1" class="mask">
          <div class="nu">
              <p @click='cl(item)' v-for="(item,index) in currlist">{{item}}</p>
              <p @click="clo" style="color: rgb(215, 215, 215);">取消</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            istian1:false,
            istian2:false,
            istian3:false,
            wh:'',
            c1:'请选择  >',
            c2:'请选择  >',
            c3:'请选择  >',
            l1:false,
            currlist:"",
            hunyinlist:["未婚","已婚","离异"],
            zhiyelist:["国家机关／事业单位","计算机／互联网","金融业","建筑业","批发零售","文体教育","生产制造","交通运输","文化娱乐","能源环保","农／林／牧／渔业","其他"],
            zhiwulist:["企业所有者","高管","经理","主管","一般职员","自由职业","学生","其他"],
        }
    },
    methods:{
        sel(n){
            this.l1 = true
            if(n == 1){this.currlist = this.hunyinlist;this.wh = 1}
            if(n == 2){this.currlist = this.zhiyelist;this.wh = 2}
            if(n == 3){this.currlist = this.zhiwulist;this.wh = 3}
        },
        clo(){
            this.l1 = false
        },
        cl(str){
            if(this.wh == 1){this.c1 = str;this.istian1 = true}
            if(this.wh == 2){this.c2 = str;this.istian2 = true}
            if(this.wh == 3){this.c3 = str;this.istian3 = true}
        }
    }
}
</script>

<style scoped>
.tian{
    color: #a9acb0!important;
}
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
